# Generated by Django 5.1.6 on 2025-03-22 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_alter_submitform_stoptime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submitform',
            name='fixrepair',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='formcode',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='reportinspection',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='stoptime',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='suggesttime',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='worksuggest',
            field=models.CharField(max_length=100),
        ),
    ]
