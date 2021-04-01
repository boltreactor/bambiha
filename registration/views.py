from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from bambiha.utils import to_json_ndb, get_token
from .models import User, NotificationSettings
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import jwt
from google.cloud import ndb
from rest_framework import status
from django.shortcuts import render, redirect, HttpResponseRedirect
from django.views import View
from sendgrid import SendGridAPIClient
from django.conf import settings
from sendgrid.helpers.mail import Mail


@csrf_exempt
@api_view(['GET', 'POST'])
def profile(request):
    if request.method == 'POST':
        user = User.update_profile(request)
        return Response({
            'status': status.HTTP_200_OK, 'user': to_json_ndb(user)
        })

    if request.method == 'GET':
        user = User.get_user(request.session['user'])
        return Response({
            'status': status.HTTP_200_OK, 'user': to_json_ndb(user),
        })


@csrf_exempt
@api_view(['GET', 'PUT'])
def profile_image(request):
    if request.method == 'PUT':
        user = User.update_profile(request)
        if request.data.get('image_type') == 'profile':
            return Response({
                'profile_image': user.profile_image
            })
        if request.data.get('image_type') == 'cover':
            return Response({
                'cover_image': user.profile_image
            })


@csrf_exempt
@api_view(['GET', 'POST'])
def signup(request):
    if request.method == 'POST':
        message, status, user = User.add_user(request)

        return Response({
            'status': status, 'message': message, 'user': to_json_ndb(user)
        })


@api_view(['GET', 'POST'])
def login(request):
    if request.method == 'POST':
        # with client.context():
        message, status, user = User.authenticate_user(request)
        if user:
            user = user.to_dict()
        return Response({
            'status': status, 'message': message, 'user': user
        }, status)


@api_view(['GET', 'POST'])
def refresh_token(request):
    if request.method == 'POST':
        # with client.context():
        decoded_payload = jwt.decode(request.POST.get('token'), None, None)
        user = User.get_user(decoded_payload['user_id'])
        with ndb.Client().context():
            new_token = get_token(user)
            user.token = new_token
            user.put()

            return Response({
                'status': status.HTTP_200_OK, 'message': 'Token refreshed', 'token': new_token
            })


# @decorator_from_middleware(BaseMiddleware)
@api_view(['GET', 'POST'])
def all_users(request):
    if request.method == 'GET':
        users = User.get_users(request)
        # serialized_results = to_json_ndb(users)
        if users:
            return Response({
                'status': status.HTTP_200_OK, 'users': to_json_ndb(users)
            }, status.HTTP_200_OK)
        # return Response(serialized_results)


@csrf_exempt
@api_view(['GET', 'POST'])
def account_status(request):
    user = User.manage_status(request)

    return Response({
        'status': status.HTTP_200_OK, 'message': 'Account status updated', 'token': to_json_ndb(user)
    })


# make user role to admin and refreshes token.
@api_view(['POST'])
def make_admin(request):
    if request.method == 'POST':
        user = User.make_admin(request)
        return Response({
            'status': status.HTTP_200_OK, 'message': 'Status Changed', 'user': to_json_ndb(user)
        })


@api_view(['GET', 'POST'])
def social_login(request):
    if request.method == 'POST':
        users = User.social_login(request)
        return Response(to_json_ndb(users))


@api_view(['GET', 'POST'])
def add_social_connection(request):
    if request.method == 'POST':
        users = User.add_social_connection(request)
        return Response(to_json_ndb(users))


@api_view(['GET', 'POST'])
def social_login_linkedin(request):
    if request.method == 'POST':
        code = request.data['code']
        import requests
        url = "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=77gr3ejlwri2v8&client_secret=Tr8BHf3bXnWR1m7K&code=" + code + "&redirect_uri=http://localhost:8000/linkedin"

        payload = {}
        headers = {
            'Cookie': 'lang=v=2&lang=en-us; bscookie="v=1&20210121095810c82296f3-fa2b-42f7-87e8-78e4a21b5f41AQEI6xVdHYa7kQ_x7Nt8GH8_SIR_ApNU"; lissc=1; bcookie="v=2&c4c022a1-db6b-4b7b-86c0-8b4b13a656c2"; lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611228113:t=1611284246:v=1:sig=AQEYmQ6L0mO49CnfwLd_KGsKaHfySiMW"'
        }

        response = requests.request("POST", url, headers=headers, data=payload)
        import json
        response_parsed = json.loads(response.text)
        token = response_parsed['access_token']

        url = "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))&oauth2_access_token=" + token

        payload = {}
        headers = {
            'Cookie': 'lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611224303:t=1611284246:v=1:sig=AQGgjD3raGQejd3IEhtfy2mMYoxt2GoY"; lang=v=2&lang=en-us; lissc=1; lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611223371:t=1611284246:v=1:sig=AQFKtZaI0BKQjHARj7wzU0S_rAvALp5k"; bcookie="v=2&c4c022a1-db6b-4b7b-86c0-8b4b13a656c2"'
        }

        response = requests.request("GET", url, headers=headers, data=payload)

        response_parsed = json.loads(response.text)
        email = response_parsed['elements'][0]['handle~']['emailAddress']

        url = "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))&oauth2_access_token=" + token

        payload = {}
        headers = {
            'Cookie': 'lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611225211:t=1611284246:v=1:sig=AQERMIJWBrawTDnN7WtySEv5QkQtYhJA"; lang=v=2&lang=en-us; lissc=1; lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611223371:t=1611284246:v=1:sig=AQFKtZaI0BKQjHARj7wzU0S_rAvALp5k"; bcookie="v=2&c4c022a1-db6b-4b7b-86c0-8b4b13a656c2"'
        }

        response = requests.request("GET", url, headers=headers, data=payload)
        response_parsed = json.loads(response.text)
        first_name = response_parsed['firstName']['localized']['en_US']
        last_name = response_parsed['lastName']['localized']['en_US']
        image = response_parsed['profilePicture']['displayImage~']['elements'][0]['identifiers'][0]['identifier']

        user = User.query(User.email == email, ancestor=ndb.Key("User", "user")).get()
        if user:
            return Response(to_json_ndb(user))
        else:
            user = User(parent=ndb.Key("User", "user"))
            user.first_name = first_name
            user.last_name = last_name
            user.email = email
            user.password = make_password(email)
            user.profile_image = image
            user.user_type = 4  # linkedin
            user.put()
            token = get_token(user)
            user.token = token
            user.put()
        return Response(to_json_ndb(user))


@api_view(['POST'])
def forgot(request):
    verification, user = User.reset_password(request.data['email'])
    if verification:
        link = "http://" + request.get_host() + "/new-password/" + user.verification_key
        message = Mail(
            from_email='developers@bambiha.com',
            to_emails=request.data['email'],
            subject="Reset link has been sent to your email address",
            html_content='<strong>Reset password using this link ' + link + '</strong>')
        # try:
        sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
        response = sg.send(message)
        print(response.status_code)
        # except Exception as e:
        #     return Response({
        #         'status': status.HTTP_500_INTERNAL_SERVER_ERROR, 'message': 'sasa',
        #     })
        return Response({
            'status': status.HTTP_200_OK, 'message': 'Reset link has been sent to you email',
        })
    else:
        return Response({
            'status': status.HTTP_200_OK, 'message': 'Email does not exists',
        })


#
# class ResetPassword(View):
#     def get(self, request):
#         key = request.GET.get('key')
#         return render(request, 'resetpassword.html', {"key": key})
@api_view(['GET', 'POST'])
def ResetPassword(request):
    User.update_password(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': 'password updated',
    }, status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def set_password(request):
    if User.set_password(request):
        return Response({
            'status': status.HTTP_200_OK, 'message': 'Password updated',
        }, status.HTTP_204_NO_CONTENT)
    return Response({
        'status': status.HTTP_401_UNAUTHORIZED, 'message': 'Wrong Password or User not found!',
    }, status.HTTP_401_UNAUTHORIZED)


@api_view(['GET', 'POST'])
def notification(request):
    if request.method == 'GET':
        notifications = NotificationSettings.get_notification_settings(request)
        return Response({
            'notifications': to_json_ndb(notifications),
        }, status.HTTP_200_OK)
    if request.method == 'POST':
        notifications = NotificationSettings.update(request)
        return Response({
            'notifications': to_json_ndb(notifications),
        }, status.HTTP_200_OK)
