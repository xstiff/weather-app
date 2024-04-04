from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .weather import WeatherData
from dotenv import dotenv_values


config = dotenv_values()
weather = WeatherData(config['API_KEY'])

@api_view(['GET'])
def weather_api_view(request, city):
    weather.get_weather_data(city)
    
    if not weather.status_weather:
        return Response({"error": f"No data found", "message": str(weather.error)}, status=status.HTTP_400_BAD_REQUEST)

    data = {
        'city' : weather.city,
        'status_weather': weather.status_weather,
        'min_temperature': weather.min_temperature,
        'max_temperature': weather.max_temperature,
        'pressure': weather.pressure,
        'humidity': weather.humidity,
        'wind_speed': weather.wind_speed,
        'wind_direction': weather.wind_direction,
        'cloud_coverage': weather.cloud_coverage,
        'sunrise_time': weather.sunrise_time,
        'sunset_time': weather.sunset_time,
        'rainfall': weather.rainfall,
        'snowfall': weather.snowfall,
    }
    return Response(data)



@api_view(['GET'])
def weather_serach_view(request, query):
    weather.get_query_results(query)

    old_data = {
        "query": weather.query_results,
    }

    unique_locations = []
    existing_locations = set()


    # Not the best idea but for some reason API doesnt return countries
    for item in old_data["query"]:
        location = item["location"]
        if location not in existing_locations:
            unique_locations.append(item)
            existing_locations.add(location)

    return Response(unique_locations)


@api_view(['GET'])
def usage_view(request):
    return Response({"error": "Usage: ./weather/[city]"}, status=status.HTTP_400_BAD_REQUEST)
