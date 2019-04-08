from django.contrib import admin
from .models import Payroll, Deduction, Plan


class PlanInline(admin.TabularInline):
    model = Plan
    extra = 0
    readonly_fields = ('name', 'amount', 'term', 'monthly_ammort',
        'payment_count', 'date_from', 'date_to')

class PlanAdmin(admin.ModelAdmin):
    model = Plan
    list_display = ('__str__', 'term', 'date_from', 'date_to',
        'amount', 'monthly_ammort', 'payment_count')


class PayrollAdmin(admin.ModelAdmin):
    model = Payroll
    list_display = ('payroll_code', '__str__', 'date_from', 'date_to',
        'gross_pay', 'total_deduction', 'net_pay')


class DeductionAdmin(admin.ModelAdmin):
    model = Deduction
    list_display = ('__str__', 'name', 'amount',
        'er', 'ee', 'date_created', 'date_updated')


admin.site.register(Payroll, PayrollAdmin)
admin.site.register(Deduction, DeductionAdmin)
admin.site.register(Plan, PlanAdmin)