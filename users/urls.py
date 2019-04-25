from django.urls import path, re_path
from .views import (Login, User, SlackAuth, ChangePassword)


urlpatterns = [
    path('auth/', User.as_view({
        'get': 'get',
        'post': 'update',
    }), name="user_detail"),

    path('auth/server/', User.as_view({
        'get': 'servertime',
    }), name="server_status"),

    path('auth/slack/', SlackAuth.as_view({
        'get': 'get',
    }), name="slackauth"),

    path('auth/slack/config/', SlackAuth.as_view({
        'get': 'config',
    }), name="slackauth_config"),

    path('auth/slack/token/<str:token>/', SlackAuth.as_view({
        'get': 'get_usertoken',
    }), name="slackauth_token"),

    path('auth/login/', Login.as_view(), name="login"),
    
    path('auth/password/', ChangePassword.as_view(), name="change_password")
]