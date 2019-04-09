from django.conf import settings
from django.utils import timezone
from rest_framework import serializers

from users.serializers import ShortUserSerializer

from .models import Event
from .mixins import FeedParser


class FeedSerializer(FeedParser, serializers.Serializer):
    """ feed serializer
    """
    instance = serializers.SerializerMethodField()
    instance_type = serializers.SerializerMethodField()

    def get_instance(self, obj):
        return self.serialize(obj)

    def get_instance_type(self, obj):
        return obj._meta.model_name


class EventSerializer(serializers.ModelSerializer):

    start_time = serializers.SerializerMethodField()
    end_time = serializers.SerializerMethodField()
    organizer = ShortUserSerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            'id',
            'title',
            'content',
            'organizer',
            'participants',
            'event_date',
            'start_time',
            'end_time',
            'date_created',
        )

    def get_start_time(self, obj):
        return f"{obj.event_date}T{obj.start_time}"

    def get_end_time(self, obj):
        return f"{obj.event_date}T{obj.end_time}"