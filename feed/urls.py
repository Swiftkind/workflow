from django.urls import path, re_path
from .views import Feed


urlpatterns = [
    path('', Feed.as_view({
        'get': 'get',
    }), name="feed"),
]