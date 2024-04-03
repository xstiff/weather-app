from django.urls import path
from . import views

urlpatterns = [
    path('weather/<str:city>/', views.weather_api_view),
    path('', views.usage_view),
]
