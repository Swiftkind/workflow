from django.urls import path, re_path
from .views import Standups, Standup, StandupByWeek, ProjectBlockers, ProjectReport, SearchAll, UserStandups


urlpatterns = [
    path('standup/', Standups.as_view({
        'post': 'post'
    }), name="standups"),

    path('standup/<int:id>/', Standup.as_view({
        'get': 'get'
    }), name="standup"),

    path('standup/user/', UserStandups.as_view(), name="standup-user"),

    path('standup/weekly/', StandupByWeek.as_view(), name="standup-weekly"),

    path('project/<int:id>/report/', ProjectReport.as_view({
        'get':'get'
    }), name="project-report"),

    path('project/<int:id>/blockers/', ProjectBlockers.as_view({
        'get':'get'
    }), name="project-blockers"),
    
    path('search/', SearchAll.as_view(), name="search")
]