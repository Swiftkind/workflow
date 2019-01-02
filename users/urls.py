from django.urls import path, re_path
from .views import Login, User


urlpatterns = [
    path('auth/', User.as_view({
        'get': 'get',
        'post': 'update',
    }), name="user_detail"),

    path('auth/login/', Login.as_view(), name="login"),
]