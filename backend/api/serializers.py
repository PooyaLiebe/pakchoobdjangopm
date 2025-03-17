from django.contrib.auth.models import User
from rest_framework import serializers
from .models import SubmitForm


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class SubmitFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmitForm
        fields = [
            "id",
            "formcode",
            "problemdate",
            "productionstop",
            "section",
            "machinename",
            "machinecode",
            "machineplacecode",
            "stoptime",
            "failuretime",
            "shift",
            "suggesttime",
            "worksuggest",
            "fixrepair",
            "reportinspection",
            "faultdm",
            "operatorname",
            "problemdescription",
            "author",
        ]
        extra_kwargs = {
            "author": {"read_only": True},
        }
