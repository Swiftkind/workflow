from datetime import datetime, timedelta
from django.conf import settings

from rest_framework import serializers
from rest_framework.pagination import PageNumberPagination

from .models import Project

from history.models import Standup

class ProjectSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    total_hours = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'channel_name',
            'date_created',
            'date_updated',
            'total_hours'
        )
    
    def get_total_hours(self, obj):
        stand = Standup.objects.filter(project=obj)
        total = sum([hours.total_hours for hours in stand])
        
        return total
        