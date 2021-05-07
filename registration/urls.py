from django.conf.urls import url
from django.urls import path, include

from registration.views import signup, login, all_users, forgot, social_login_linkedin, social_login, ResetPassword, \
    profile_image, refresh_token, profile, set_password, notification, add_social_connection, account_status, manage_admin_status
from bambiha.middlewares import auth_middleware, ndb_context_middleware

urlpatterns = [
    path('register/', ndb_context_middleware(signup)),
    path('login/', ndb_context_middleware(login)),
    url(r'all-users/', ndb_context_middleware(auth_middleware(all_users))),
    url(r'refresh-token/', ndb_context_middleware(refresh_token)),
    path('social-login/', ndb_context_middleware(social_login)),
    path('add-social-connection/', ndb_context_middleware(auth_middleware(add_social_connection))),
    path('social-login-linkedin/', ndb_context_middleware(social_login_linkedin)),
    path('profile/', ndb_context_middleware(auth_middleware(profile))),
    path('profile-image/', ndb_context_middleware(auth_middleware(profile_image))),
    path('forgot/', ndb_context_middleware(forgot)),
    path('notification-settings/', ndb_context_middleware(auth_middleware(notification))),
    path('set_password/', ndb_context_middleware(set_password)),
    path('reset-password-email/', ndb_context_middleware(ResetPassword), name='login'),

]
