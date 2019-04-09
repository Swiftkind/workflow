from django.db import models
from users.models import User


class Event(models.Model):
    """ event schedules
    """
    title = models.CharField(max_length=200)
    content = models.TextField()

    organizer = models.ForeignKey(User, null=True, related_name="organizer", on_delete=models.SET_NULL)
    participants = models.ManyToManyField(User, related_name="participants")

    event_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.title}"