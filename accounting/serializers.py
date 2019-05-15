from datetime import datetime, timedelta
from django.conf import settings

from rest_framework import serializers
from rest_framework.pagination import PageNumberPagination

from .models import Project

from users.models import User
from users.serializers import ShortUserSerializer
from history.models import Standup

class ProjectSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    total_hours = serializers.SerializerMethodField()
    users = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'channel_name',
            'date_created',
            'date_updated',
            'total_hours',
            'users'
        )
    
    def get_total_hours(self, obj):
        stand_up = Standup.objects.filter(project=obj)
        total = sum([hours.total_hours for hours in stand_up])
        
        return total
    
    def get_users(self, obj):
        stand_up = Standup.objects.filter(project=obj)

        test_list = []
        for stand in stand_up:
            if stand.user not in test_list:
                test_list.append(stand.user)
        serializer = ShortUserSerializer(test_list, many=True)
        return serializer.data
        