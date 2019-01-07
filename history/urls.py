from django.urls import path, re_path
from .views import Standup


urlpatterns = [
    path('standup/', Standup.as_view({
        'post': 'post',
    }), name="standup"),
]