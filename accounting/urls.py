from django.urls import path, re_path
from .views import ProjectDetails

urlpatterns = [
    path('project/<int:id>/', ProjectDetails.as_view({
        'get': 'get'
    }), name="project_details"),
]