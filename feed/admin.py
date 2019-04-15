from django.contrib import admin
from .models import Event


class EventAdmin(admin.ModelAdmin):
    """ event admin
    """
    model = Event
    list_display = (
        'title',
        'organizer',
        'event_date',
        'start_time',
        'end_time',
        'date_created',
        'get_participants'
    )

    def get_participants(self, instance):
        return ", ".join([i.get_full_name() for i in instance.participants.all()])

    get_participants.short_description = "Participants"


admin.site.register(Event, EventAdmin)