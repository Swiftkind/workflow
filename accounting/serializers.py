from datetime import datetime, timedelta
from django.conf import settings

from rest_framework import serializers
from rest_framework.pagination import PageNumberPagination

from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'channel_name',
            'date_created',
            'date_updated'
        )

        