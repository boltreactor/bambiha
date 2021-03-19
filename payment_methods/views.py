import datetime

import stripe
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from bambiha.utils import to_json_ndb
from registration.models import User
from .models import PaymentCoupons, VAT


@csrf_exempt
@api_view(['GET', 'POST'])
def add_payment_method(request):
    if request.method == 'POST':
        user = User.get_user(request.session['user'])
        stripe.api_key = settings.STRIPE_PRIVATE_KEY
        if user.stripe_customer_id is None:
            response = stripe.Customer.create(
                email=user.email,
                name=user.first_name,
                description=user.first_name + ' ' + user.last_name,
            )
            user.stripe_customer_id = response.id
            user.put()
        source = stripe.Customer.create_source(
            user.stripe_customer_id,
            source=request.data['card_token']
        )
        return Response({
            'status': status.HTTP_200_OK, 'user': to_json_ndb(user)
        })


@csrf_exempt
@api_view(['GET', 'POST'])
def get_payment_method(request):
    if request.method == 'GET':
        user = User.get_user(request.session['user'])
        stripe.api_key = settings.STRIPE_PRIVATE_KEY
        user_cards = None
        if user.stripe_customer_id is not None:
            response = stripe.Customer.retrieve(user.stripe_customer_id)
            user_cards = response.sources.data
        return Response({
            'status': status.HTTP_200_OK, 'user_cards': user_cards
        })


@csrf_exempt
@api_view(['GET', 'POST'])
def delete_payment_method(request):
    if request.method == 'POST':
        user = User.get_user(request.session['user'])
        stripe.api_key = settings.STRIPE_PRIVATE_KEY

        stripe.Customer.delete_source(
            user.stripe_customer_id,
            request.data['card_id']
        )
        user_cards = None
        if user.stripe_customer_id is not None:
            response = stripe.Customer.retrieve(user.stripe_customer_id)
            user_cards = response.sources.data
        return Response({
            'status': status.HTTP_200_OK, 'user_cards': user_cards
        })


@csrf_exempt
@api_view(['GET', 'POST'])
def delete_payout_method(request):
    if request.method == 'POST':
        user = User.get_user(request.session['user'])
        stripe.api_key = settings.STRIPE_PRIVATE_KEY

        stripe.Account.delete_external_account(
            request.data['acc_id'],
            request.data['bank_id']
        )
        acct = None
        if user.stripe_connect_account_id is not None:
            acct = stripe.Account.retrieve(
                user.stripe_connect_account_id,
            )

        return Response({
            'status': status.HTTP_200_OK, 'acct': acct.external_accounts.data
        })


@csrf_exempt
@api_view(['GET', 'POST'])
def get_payout_method(request):
    if request.method == 'GET':
        user = User.get_user(request.session['user'])
        stripe.api_key = settings.STRIPE_PRIVATE_KEY
        if user.stripe_connect_account_id is None:
            acct = None
        else:
            acct = stripe.Account.retrieve(
                user.stripe_connect_account_id,
            )
        return Response({
            'status': status.HTTP_200_OK, 'acct': acct.external_accounts.data
        })


@api_view(['GET', 'POST'])
def get_balance(request):
    if request.method == 'GET':
        user = User.get_user(request.session['user'])
        stripe.api_key = settings.STRIPE_PRIVATE_KEY
        if user.stripe_connect_account_id is None:
            all_transfers = None
        else:
            all_transfers = stripe.Transfer.list(destination=user.stripe_connect_account_id, limit=1000)
        return Response({
            'status': status.HTTP_200_OK, 'all_transfers': all_transfers
        })


@api_view(['GET', 'POST'])
def create_payment_intent(request):
    if request.method == 'POST':
        user = User.get_user(request.session['user'])

        amount = int(request.data['amount'])
        currency = request.data['currency']
        coupon = request.data['coupon']
        stripe_customer_id = None
        stripe.api_key = settings.STRIPE_PRIVATE_KEY

        metadata = {
            'payment_flow': 'any description here ',
            'booking_type': 'instant_booking',
            'listing_price_at_booking_time': 'add listing price here ',
            'lesson_duration': '60 mins',
        }
        intent = stripe.PaymentIntent.create(
            amount=(amount * 100),
            currency=currency,
            metadata=metadata,
            receipt_email=user.email,
            customer=stripe_customer_id,
            description='instant booking amount paid by ' + user.key.urlsafe().decode(),
        )
        return Response({
            'status': status.HTTP_200_OK, 'intent_id': intent.id, 'client_secret': intent.client_secret
        })


@api_view(['GET', 'POST'])
def add_bank_account(request):
    if request.method == 'POST':
        user = User.get_user(request.session['user'])
        if not user.stripe_connect_account_id:
            country = 'GB'
            stripe.api_key = settings.STRIPE_PRIVATE_KEY
            acct = stripe.Account.create(
                country=country,
                type="custom",
                email=user.email,
                legal_entity={
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "type": 'individual',
                    "dob": {
                        "day": '1',
                        "month": '11',
                        "year": '2000'
                    }
                },
                tos_acceptance={
                    "date": datetime.now(),
                    "ip": "119.156.76.23"
                    # "ip": self.request.remote_addr
                },
                metadata={
                    'slug': user.key.urlsafe().decode(),
                    'email': user.email,
                },

            )
            user.stripe_connect_account_id = acct.id
            user.stripe_connect_country = country
            user.put()
        acct = stripe.Account.create_external_account(
            user.stripe_connect_account_id,
            external_account=request.data['bank_token']
        )
        return Response({
            'status': status.HTTP_200_OK, 'account': acct,

        })


@csrf_exempt
@api_view(['GET', 'POST'])
def transfer_amount_to_teacher(request):
    if request.method == 'POST':
        stripe.api_key = settings.STRIPE_PRIVATE_KEY
        pi = stripe.PaymentIntent.retrieve(
            request.data['payment_intent_id'],  # actually booking.stripe_charge_id contains payment intent id
        )
        if pi.charges.total_count == 1:
            source_trans = pi.charges.data[0].id
        else:
            source_trans = None
        amount = int(request.data['amount'])
        currency = request.data['currency']
        destination_connect_account_id = request.data['destination_connect_account_id']
        payout = stripe.Transfer.create(
            amount=str(amount),
            currency=currency,
            destination=destination_connect_account_id,
            source_transaction=source_trans,
            description='Lesson amount transferred. Lesson id: ',
            metadata={
                "from": 'from platform',
            },
        )
        return Response({
            'status': status.HTTP_200_OK, 'payout': payout,
        })


@csrf_exempt
@api_view(['GET', 'POST'])
def refund_payment(request):
    if request.method == 'POST':
        stripe.api_key = settings.STRIPE_PRIVATE_KEY
        amount = int(request.data['amount'])
        if request.data['stripe_charge_id']:
            refund = stripe.Refund.create(
                payment_intent=request.data['stripe_charge_id'],
                amount=amount,
                metadata={
                    'lesson_key': 'any metadata here'
                }
            )
            return Response({
                'status': status.HTTP_200_OK, 'refund': refund,
            })
        return Response({
            'status': status.HTTP_400_BAD_REQUEST, 'refund': None,
        })


@csrf_exempt
@api_view(['GET', 'POST'])
def generate_coupons(request):
    if request.method == 'POST':
        PaymentCoupons.generate_coupons(request)
        return Response({
            'status': status.HTTP_200_OK, 'message': 'Coupons generated successfully!',
        })


@api_view(['GET'])
def get_coupon_detail(request):
    if request.method == 'GET':
        data = PaymentCoupons.get_details(request)

        return Response({
            'status': status.HTTP_200_OK, 'coupon': to_json_ndb(data),
        })


@api_view(['POST'])
def consume_coupon(request):
    if request.method == 'POST':
        data = PaymentCoupons.consume_coupon(request)
        if not data:
            return Response({
                'status': status.HTTP_200_OK, 'coupon': 'coupon not found',
            })

        return Response({
            'status': status.HTTP_200_OK, 'coupon': to_json_ndb(data),
        })


def ServiceWorkerView(request):
    import requests
    import json

    serverToken = 'AAAACfAFLKI:APA91bEM2cfnbHkq9pv9IiDuY6KwhZ2EWdDrN7Ap8JWFLc60JXZcG4x6T3AW8e0GvgAHqrA9sJu2rHFBxCJ89t_n_2iotPST-1HBfILP1EhAOkB90JhUd8N0HBw2DVtFiO1u92uFCeEG'
    deviceToken = 'eBuuf7yZw2WSkZJQZFCiD_:APA91bFCzfoEO1-cP23L_VfA0cAZowHwZ3sf0tKIMREkHGLMLdjTFvN0wwA2JVP-MhwXHo_Fr1Pak6ipZ1ezRxhS6AmETPmpiwCFa5P6aonW8zvvzGjWf4P6skKRSgttLNScvBRY93m0'

    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'key=' + serverToken,
    }

    body = {
        'notification': {'title': 'Rishta Alert',
                         'body': ' Hurry up! Just got you a match.',
                         'icon': 'https://cdn.logo.com/hotlink-ok/logo-social.png',
                         'click_action': 'https://boltreactor-app.uc.r.appspot.com/'
                         },
        'to':
            deviceToken,
        'priority': 'high',
        #   'data': dataPayLoad,
    }
    response = requests.post("https://fcm.googleapis.com/fcm/send", headers=headers, data=json.dumps(body))
    print(response.status_code)

    print(response.json())
    return render(request, 'frontend/firebase-messaging-sw.js', content_type="application/x-javascript")


def set_session(request):
    if request.method == 'GET':
        request.session['test-user'] = 'Saim Abdullah'
        return HttpResponse("session set")


def get_session(request):
    return HttpResponse(request.session['test-user'])


def error(request):
    return ""


@api_view(['POST'])
def add_vat(request):
    if request.method == 'POST':
        vat = VAT.add_vat(request)

        return Response({
            'status': status.HTTP_200_OK, 'vat': to_json_ndb(vat)
        })


@api_view(['POST'])
def edit_vat(request):
    if request.method == 'POST':
        vat = VAT.update_vat(request)

        return Response({
            'status': status.HTTP_200_OK, 'vat': to_json_ndb(vat)
        })


@api_view(['GET'])
def get_vat(request):
    if request.method == 'GET':
        vat = VAT.get_vat(request)

        return Response({
            'status': status.HTTP_200_OK, 'vat': to_json_ndb(vat)
        })


@api_view(['GET'])
def get_vat_by_id(request):
    if request.method == 'GET':
        vat = VAT.get_by_id(request)

        return Response({
            'status': status.HTTP_200_OK, 'vat': to_json_ndb(vat)
        })


@api_view(['POST'])
def delete_vat(request):
    if request.method == 'POST':
        VAT.delete_vat(request)
        vat = VAT.get_vat(request)
        return Response({
            'status': status.HTTP_200_OK, 'vat': to_json_ndb(vat)
        })
