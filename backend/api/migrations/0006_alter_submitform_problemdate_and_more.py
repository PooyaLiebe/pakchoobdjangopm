# Generated by Django 5.1.6 on 2025-03-17 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_submitform_problemdate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submitform',
            name='problemdate',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='stoptime',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
