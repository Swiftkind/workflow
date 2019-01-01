from rest_framework import serializers
from users.serializers import UserSerializer

from .models import Payroll, Deduction, Plan


class PayrollSerializer(serializers.ModelSerializer):
    """ payroll serializer
    """
    user = UserSerializer()

    class Meta:
        model = Payroll
        fields = (
            'id',
            'user',
            'date_from',
            'date_to',
            'total_deduction',
            'gross_pay',
            'net_pay',
            'date_created',
            'date_updated'
        )


class DeductionSerializer(serializers.ModelSerializer):
    """ deduction serializer
    """
    class Meta:
        model = Deduction
        fields = (
            'id',
            'name',
            'description',
            'tier',
            'amount',
            'er',
            'ee',
            'date_created',
            'date_updated',
        )


class PlanSerializer(serializers.ModelSerializer):
    """ plan serializer
    """
    class Meta:
        model = Plan
        fields = (
            'id',
            'name',
            'amount',
            'term',
            'monthly_ammort',
            'payment_count',
            'date_from',
            'date_to',
            'date_created',
            'date_updated'
        )