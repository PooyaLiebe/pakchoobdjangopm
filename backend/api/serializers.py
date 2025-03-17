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
            "problem_date",
            "production_stop",
            "section",
            "machine_name",
            "machine_code",
            "machine_place_code",
            "stop_time",
            "failure_time",
            "shift",
            "suggest_time",
            "work_suggest",
            "fix_repair",
            "report_inspection",
            "fault_dm",
            "operator_name",
            "problem_description",
            "author",
        ]
        extra_kwargs = {
            "author": {"read_only": True},
        }
