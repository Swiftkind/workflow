# Generated by Django 2.2.1 on 2019-05-08 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0002_event_frequency'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='frequency',
        ),
    ]
