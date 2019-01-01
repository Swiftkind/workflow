# Generated by Django 2.1.4 on 2019-01-01 00:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Payroll',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_from', models.DateField(blank=True, null=True)),
                ('date_to', models.DateField(blank=True, null=True)),
                ('total_deduction', models.DecimalField(decimal_places=2, default=0.0, max_digits=999)),
                ('gross_pay', models.DecimalField(decimal_places=2, default=0.0, max_digits=999)),
                ('net_pay', models.DecimalField(decimal_places=2, default=0.0, max_digits=999)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_updated', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
