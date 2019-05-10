from django.urls import path, re_path
from .views import ProjectDetail, ProjectsList

urlpatterns = [
    path('project/', ProjectsList.as_view()),
    
    path('project/<int:id>/', ProjectDetail.as_view({
        'get': 'get'
    }), name="project_details"),
]