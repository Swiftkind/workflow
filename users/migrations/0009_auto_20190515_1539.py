# Generated by Django 2.2 on 2019-05-15 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_auto_20190515_1536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timelog',
            name='time_out',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
