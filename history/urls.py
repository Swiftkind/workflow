from django.urls import path, re_path
from .views import Standups, Standup, StandupByWeek, StandupByWeekPagination


urlpatterns = [
    path('standup/', Standups.as_view({
        'post': 'post',
        'get': 'get'
    }), name="standups"),

    path('standup/<int:id>/', Standup.as_view({
        'get': 'get'
    }), name="standup"),

    path('standup/weekly/', StandupByWeek.as_view({
        'put': 'put'
    }), name="standup-weekly"),

    path('standup/weekly/<int:id>/<str:date>/', StandupByWeekPagination.as_view(), name="standup-weekly-test"),
    
]