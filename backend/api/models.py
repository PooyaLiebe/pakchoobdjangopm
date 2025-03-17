from django.db import models
from django.contrib.auth.models import User


class SubmitForm(models.Model):
    formcode = models.CharField(max_length=20)
    problem_date = models.DateTimeField(auto_now_add=True)
    production_stop = models.CharField(max_length=20)
    section = models.CharField(max_length=50)
    machine_name = models.CharField(max_length=50)
    machine_code = models.CharField(max_length=50)
    machine_place_code = models.CharField(max_length=50)
    stop_time = models.DateTimeField(auto_now_add=True)  # Fixed
    failure_time = models.TimeField(auto_now_add=True)  # Changed from CharField
    shift = models.CharField(max_length=50)
    suggest_time = models.TimeField(auto_now_add=True)  # Changed from CharField
    work_suggest = models.CharField(max_length=50)
    fix_repair = models.CharField(max_length=50)
    report_inspection = models.CharField(max_length=50)  # Fixed typo
    fault_dm = models.CharField(max_length=50)
    operator_name = models.CharField(max_length=50)
    problem_description = models.TextField(null=True)  # Fixed
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.formcode
