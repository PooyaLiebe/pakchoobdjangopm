from django.contrib import admin
from .models import SubmitForm


class SubmitFormAdmin(admin.ModelAdmin):
    list_display = [
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
    list_editable = ["section"]


admin.site.register(SubmitForm, SubmitFormAdmin)
