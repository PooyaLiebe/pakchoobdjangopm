# Generated by Django 5.1.6 on 2025-03-17 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_submitform_author_alter_submitform_faultdm_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submitform',
            name='problemdate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='submitform',
            name='suggesttime',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
