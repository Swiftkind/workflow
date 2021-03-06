# Generated by Django 2.1.4 on 2019-01-02 22:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounting', '0003_project_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Burn',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=200)),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=999)),
                ('source', models.CharField(blank=True, max_length=200, null=True)),
                ('remarks', models.TextField(blank=True, null=True)),
                ('burn_type', models.CharField(choices=[('recurring', 'Reccurring Bill (monthly)'), ('onetime', 'One-Time Expense')], default='recurring', max_length=20)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_updated', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AddField(
            model_name='invoice',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='invoice',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='invoiceitem',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='invoiceitem',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
