import datetime

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
    list_display = ('email', 'first_name', 'last_name', 'position', 'date_started', 'work_time', 'is_late')
    inlines = (SalaryLogInline, PlanInline,)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'birthdate',
            'image', 'position', 'position_type', 'date_started', 'deductions')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
            'groups', 'user_permissions', 'slack_id')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined', 'work_time')}), 
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

    def is_late(self, obj):
        """ check if user is late for the day
        """

        # boolean for late user field and today_min and today_max to get the current day
        user_is_late = False
        today_min = datetime.datetime.combine(datetime.date.today(), datetime.time.min)
        today_max = datetime.datetime.combine(datetime.date.today(), datetime.time.max)
        
        # get if user has already clocked in for the day
        try:
            user_clocked_in = TimeLog.objects.get(user=obj, time_in__range=(today_min, today_max))
        except:
            user_clocked_in = None

        if user_clocked_in:
            # compare the user worktime and time clocked in
            if (datetime.datetime.fromtimestamp(user_clocked_in.time_in.timestamp()).strftime('%H:%M:%S') > obj.work_time.strftime('%H:%M:%S')):
                user_is_late = True

        return user_is_late

    is_late.boolean = True
    is_late.short_description = "is late"

    

class TimeLogAdmin(admin.ModelAdmin):
    """ salary log
    """
    model = TimeLog
    list_display = ('user', 'time_in')

admin.site.register(User, UserAdmin)
admin.site.register(SalaryLog, SalaryLogAdmin)
admin.site.register(SlackToken)
admin.site.register(TimeLog, TimeLogAdmin)