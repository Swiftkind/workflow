from django.urls import path, re_path
from .views import Login


urlpatterns = [
    path('auth/login/', Login.as_view(), name="login"),
]