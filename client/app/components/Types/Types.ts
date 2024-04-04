export type TWeatherData = {
    city: string;
    cloud_coverage: number;
    humidity: number;
    max_temperature: number;
    min_temperature: number;
    pressure: number;
    rainfall: Record<any,any>;
    snowfall: Record<any,any>;
    status_weather: string;
    sunrise_time: string;
    sunset_time: string;
    wind_direction: number;
    wind_speed: number;
}

export type TWeatherQueryElement = {
    "location": string;
    "lat": number;
    "lon": number;
}