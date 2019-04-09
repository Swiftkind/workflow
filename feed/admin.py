from django.contrib import admin
from .models import Event


class EventAdmin(admin.ModelAdmin):
    """ event admin
    """
    model = Event


admin.site.register(Event, EventAdmin)