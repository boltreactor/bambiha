from datetime import datetime

import jwt
from django.http import JsonResponse
from google.cloud import ndb


def ndb_context_middleware(get_response):
    def middleware(request):
        with ndb.Client().context():
            return get_response(request)

    return middleware


def auth_middleware(get_response):
    def middleware(request):
        if not request.META.get('HTTP_AUTHORIZATION'):
            return JsonResponse({'error': 'Authentication Required!'}, status=401)

        decoded_payload = jwt.decode(request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1], None, None)

        if datetime.fromtimestamp(decoded_payload['exp'] * 1000 / 1e3) < datetime.utcnow():
            return JsonResponse({'error': 'Token Expired!'}, status=401)
        # request.user = decoded_payload
        request.session['user'] = decoded_payload['user_id']

        return get_response(request)

    return middleware


def admin_auth_middleware(get_response):
    def middleware(request):
        if not request.META.get('HTTP_AUTHORIZATION'):
            return JsonResponse({'error': 'Authentication Required!'}, status=401)

        decoded_payload = jwt.decode(request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1], None, None)

        if datetime.fromtimestamp(decoded_payload['exp'] * 1000 / 1e3) < datetime.utcnow():
            return JsonResponse({'error': 'Token Expired!'}, status=401)
        # request.user = decoded_payload
        if decoded_payload['role'] == 2:
            request.session['user'] = decoded_payload['user_id']
        else:
            return JsonResponse({'error': 'Admin Permissions Required!'}, status=401)

        return get_response(request)

    return middleware
