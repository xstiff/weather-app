from django.urls import path
from . import views

urlpatterns = [
    path('weather/<str:city>/', views.weather_api_view),
    path('search/<str:query>/', views.weather_serach_view),
    path('', views.usage_view),
]
