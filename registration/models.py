from google.cloud import ndb
from django.contrib.auth.hashers import make_password, check_password
from bambiha.utils import get_token
from django.utils.crypto import get_random_string
from rest_framework import status as http_status
import boto3
from dateutil import parser
import datetime

with ndb.Client().context():
    ancestor_key = ndb.Key("User", "user")
    ancestor_key_notification = ndb.Key("NotificationSettings", "NotificationSettings")


class NotificationSettings(ndb.Model):
    user = ndb.StringProperty()
    unsubscribe = ndb.BooleanProperty(default=False)
    unsub_all_marketing_emails = ndb.BooleanProperty(default=False)
    push_notifications = ndb.BooleanProperty(default=True)
    messages_sms = ndb.BooleanProperty(default=True)
    messages_email = ndb.BooleanProperty(default=True)
    reminders_sms = ndb.BooleanProperty(default=True)
    reminders_email = ndb.BooleanProperty(default=True)
    promotion_sms = ndb.BooleanProperty(default=True)
    promotion_email = ndb.BooleanProperty(default=True)
    policy_sms = ndb.BooleanProperty(default=True)
    policy_email = ndb.BooleanProperty(default=True)
    acc_support_sms = ndb.BooleanProperty(default=True)
    acc_support_email = ndb.BooleanProperty(default=True)

    @classmethod
    def get_notification_settings(cls, request):
        obj = NotificationSettings.query(NotificationSettings.user == request.session['user'],
                                         ancestor=ancestor_key_notification).get()
        if obj:
            return obj
        obj = NotificationSettings(parent=ancestor_key_notification, user=request.session['user'])
        obj.put()
        return obj

    @classmethod
    def update(cls, request):
        obj = ndb.Key(urlsafe=request.data['id']).get()
        obj.unsubscribe = request.data['unsubscribe']
        obj.unsub_all_marketing_emails = request.data['messages_email']
        obj.push_notifications = request.data['push_notifications']
        obj.messages_sms = request.data['messages_sms']
        obj.messages_email = request.data['messages_email']
        obj.reminders_sms = request.data['reminders_sms']
        obj.reminders_email = request.data['reminders_email']
        obj.promotion_sms = request.data['promotion_sms']
        obj.promotion_email = request.data['promotion_email']
        obj.policy_sms = request.data['policy_sms']
        obj.policy_email = request.data['policy_email']
        obj.acc_support_sms = request.data['acc_support_sms']
        obj.acc_support_email = request.data['acc_support_email']
        if obj.messages_sms is True or obj.messages_email is True or obj.reminders_email is True \
                or obj.reminders_sms is True or \
                obj.promotion_email is True or obj.promotion_sms is True or obj.policy_email is True or obj.policy_sms is True \
                or obj.acc_support_email is True or obj.acc_support_sms is True:
            obj.unsubscribe = False
        obj.put()
        return obj


class User(ndb.Model):
    first_name = ndb.StringProperty()
    last_name = ndb.StringProperty()
    phone = ndb.StringProperty()
    email = ndb.StringProperty()
    gender = ndb.StringProperty()
    about = ndb.StringProperty()
    language = ndb.StringProperty()
    location = ndb.StringProperty()
    date_of_birth = ndb.StringProperty()
    password = ndb.StringProperty()
    token = ndb.StringProperty()
    profile_image = ndb.StringProperty()
    cover_image = ndb.StringProperty()
    verification_key = ndb.StringProperty()
    stripe_customer_id = ndb.StringProperty()
    stripe_connect_account_id = ndb.StringProperty()
    stripe_connect_country = ndb.StringProperty()
    user_type = ndb.IntegerProperty(default=1)  # 2 google, 3 fb ,4 linkedin
    google_connection_email = ndb.StringProperty()
    facebook_connection_email = ndb.StringProperty()
    account_status = ndb.BooleanProperty(default=True)

    @classmethod
    def add_user(cls, request):

        user = User.query(cls.email == request.data['email'], ancestor=ancestor_key).get()
        if user:
            if user.user_type == 2:
                return "your account is created via Gmail, Please use Gmail to login", 0, None  # message, status, userobj
            return "Account already exists", 0, None  # message, status, userobj

        else:
            user = User(parent=ancestor_key,
                        first_name=request.data['first_name'],
                        last_name=request.data['last_name'],
                        email=request.data['email'],
                        password=make_password(request.data['password']))
            token = get_token(user)
            user.token = token
            user.put()
            return "Successfully registered", 1, user

    @classmethod
    def get_users(cls, request):
        query = User.query(ancestor=ancestor_key).fetch()
        return query

    @classmethod
    def get_user(cls, key):
        if ndb.Key(urlsafe=key):
            return ndb.Key(urlsafe=key).get()

    @classmethod
    def manage_status(cls, request):
        user = cls.get_user(request.POST.get('user_key'))
        user.account_status = bool(int(request.POST.get('status')))
        user.put()
        return user

    @classmethod
    def update_profile(cls, request):

        user = ndb.Key(urlsafe=request.session['user']).get()
        if request.FILES.get('profile_image'):
            file = request.FILES['profile_image']
            s3 = boto3.resource(
                service_name='s3',
                region_name='us-east-2',
                aws_access_key_id='AKIARXUVHB5JQZ2AQ6HM',
                aws_secret_access_key='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'
            )
            bucket = s3.Bucket('test-bucket-ndb')
            details = bucket.put_object(Key=file.name, Body=file)
            url = "https://test-bucket-ndb.s3.us-east-2.amazonaws.com/" + details.key
            user.profile_image = url
            user.put()
            return user
        elif request.FILES.get('cover_image'):
            file = request.FILES['cover_image']
            s3 = boto3.resource(
                service_name='s3',
                region_name='us-east-2',
                aws_access_key_id='AKIARXUVHB5JQZ2AQ6HM',
                aws_secret_access_key='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'
            )
            bucket = s3.Bucket('test-bucket-ndb')
            details = bucket.put_object(Key=file.name, Body=file)
            url = "https://test-bucket-ndb.s3.us-east-2.amazonaws.com/" + details.key
            user.cover_image = url
            user.put()
            return user
        else:
            user.date_of_birth = request.data['date_of_birth']
            user.gender = request.data['gender']
            user.language = request.data['language']
            user.about = request.data['about']
            user.phone = request.data['phone']
            user.location = request.data['location']
            user.put()
            return user

    @classmethod
    def authenticate_user(cls, request):
        user = User.query(User.email == request.data['email'], ancestor=ancestor_key).get()

        message = None
        status = http_status.HTTP_200_OK
        if user:
            password = check_password(request.data['password'], user.password)
            if password:
                if user.account_status:
                    request.session['user'] = user.key.urlsafe().decode()
                else:
                    message = "You account is blocked by Admin"
                    status = http_status.HTTP_406_NOT_ACCEPTABLE
                    return message, status, user
            elif user.user_type == 2:

                message = "You are signed with Google. Please do sign in with Gmail."
                status = http_status.HTTP_406_NOT_ACCEPTABLE
                return message, status, user
            else:
                message = "wrong password provided"
                status = http_status.HTTP_406_NOT_ACCEPTABLE
                return message, status, user

        else:
            message = "email not found"
            user = None
            status = http_status.HTTP_406_NOT_ACCEPTABLE
            return message, status, user

        print(request.session.get('user'))

        user.token = get_token(user)
        user.put()
        return message, status, user

    @classmethod
    def reset_password(cls, email):
        ancestor_key = ndb.Key("User", "user")
        user = User.query(User.email == email,
                          ancestor=ancestor_key).get()
        if user:
            user.verification_key = get_random_string(length=32)
            user.put()
            return str(user.key.urlsafe()), user
        else:
            return False, None

    @classmethod
    def update_password(cls, request):
        ancestor_key = ndb.Key("User", "user")
        user = cls.query(cls.verification_key == request.data['token'],
                         ancestor=ancestor_key).get()
        if user:
            user.verification_key = ""
            user.password = make_password(request.data['new_password'])
            user.put()
            return True
        else:
            return False

    @classmethod
    def set_password(cls, request):
        user = ndb.Key(urlsafe=request.session['user']).get()
        if user and check_password(request.data['current_password'], user.password):
            user.password = make_password(request.data['new_password'])
            user.put()
            return True
        else:
            return False

    @classmethod
    def social_login(cls, request):
        user = cls.query(cls.email == request.data['email'], ancestor=ancestor_key).get()
        if not user:
            user = cls.query(cls.google_connection_email == request.data['email'], ancestor=ancestor_key).get()
        if not user:
            user = cls.query(cls.facebook_connection_email == request.data['email'], ancestor=ancestor_key).get()
        if not user:
            user = User(parent=ancestor_key)
            user.first_name = request.data['name'].split(' ')[0]
            user.last_name = request.data['name'].split(' ')[1]
            user.email = request.data['email']
            user.password = make_password(request.data['email'])
            user.profile_image = request.data['image']
            if request.data['platform'] == "google":
                user.user_type = 2
                user.google_connection_email = request.data['email']
            elif request.data['platform'] == 'facebook':
                user.user_type = 3
                user.facebook_connection_email = request.data['email']
            else:
                user.user_type = 4  # linkedin
            user.put()
        token = get_token(user)
        user.token = token
        user.put()
        return user

    @classmethod
    def add_social_connection(cls, request):
        user_normal = ndb.Key(urlsafe=request.session['user']).get()
        if user_normal:
            if request.data['platform'] == "google":
                user_normal.google_connection_email = request.data['email']
            elif request.data['platform'] == 'facebook':
                user_normal.facebook_connection_email = request.data['email']
            user_normal.put()
        return user_normal
