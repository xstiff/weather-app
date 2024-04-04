from pyowm import OWM
import json


class WeatherData:
    def __init__(self, api_key):
        self.owm = OWM(api_key)
        self.mgr = self.owm.weather_manager()
        self.geo = self.owm.geocoding_manager()
        
    def get_weather_data(self, location):
        try:
            observation = self.mgr.weather_at_place(location)
            w = observation.weather
            
            self.city = location
            self.status_weather = w.status
            self.min_temperature = w.temperature('celsius')['temp_min']
            self.max_temperature = w.temperature('celsius')['temp_max']
            self.pressure = w.pressure['press']
            self.humidity = w.humidity
            self.wind_speed = w.wind()['speed']
            self.wind_direction = w.wind()['deg']
            self.cloud_coverage = w.clouds
            self.sunrise_time = w.sunrise_time(timeformat='iso')
            self.sunset_time = w.sunset_time(timeformat='iso')
            self.rainfall = w.rain
            self.snowfall = w.snow
        except Exception as e:
            self.status_weather = None
            self.error = e

    def get_query_results(self, query):
        try:
           self.query_results = [{"location": x.name, "lon": x.lon, "lat:": x.lat} for x in self.geo.geocode(query, limit=10)]

        except Exception as e:
            self.status_weather = None
            self.error = e
    
