from django.urls import path
from . import views

urlpatterns = [
    path("submitform/", views.FormListCreate.as_view(), name="form-list"),
    path("submitform/delete/<int:pk>/", views.FormDelete.as_view(), name="form-delete"),
]
