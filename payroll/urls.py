from django.urls import path, re_path
from .views import Payroll


urlpatterns = [
    path('', Payroll.as_view({
        'get': 'filter',
    }), name="payroll-list"),
    
    path('<int:id>/', Payroll.as_view({
        'get': 'get'
    }), name="payroll-detail"),
]