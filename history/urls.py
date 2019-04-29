from django.urls import path, re_path
from .views import Standups, Standup


urlpatterns = [
    path('standup/', Standups.as_view({
        'post': 'post',
        'get': 'get'
    }), name="standups"),

    path('standup/<int:id>/', Standup.as_view({
        'get': 'get'
    }), name="standup"),
]