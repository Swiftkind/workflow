from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext, gettext_lazy as _

from rest_framework.authtoken.models import Token
from payroll.admin import PlanInline
from .models import User, SalaryLog, SlackToken, TimeLog



class SalaryLogAdmin(admin.ModelAdmin):
    """ salary log
    """
    model = SalaryLog
    list_display = ('user', 'amount', 'date_implemented', 'is_primary')


class SalaryLogInline(admin.TabularInline):
    """ salary log inline
    """
    model = SalaryLog
    extra = 0
    readonly_fields = ('user', 'amount', 'date_implemented', 'is_primary')


class UserAdmin(UserAdmin):
    """ user admin panel configuration
    """
    model = User
    readonly_fields = ('date_joined',)
    ordering = ('email',)
    filter_horizontal = ('deductions', 'groups', 'user_permissions')
    list_display = ('email', 'first_name', 'last_name', 'position', 'date_started')
    inlines = (SalaryLogInline, PlanInline,)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'birthdate',
            'image', 'position', 'position_type', 'date_started', 'deductions')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
            'groups', 'user_permissions', 'slack_id')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}), 
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

class TimeLogAdmin(admin.ModelAdmin):
    """ salary log
    """
    model = TimeLog
    list_display = ('user', 'time_in')

admin.site.register(User, UserAdmin)
admin.site.register(SalaryLog, SalaryLogAdmin)
admin.site.register(SlackToken)
admin.site.register(TimeLog, TimeLogAdmin)