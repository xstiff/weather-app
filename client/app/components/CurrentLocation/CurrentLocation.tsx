import { useWeatherStore } from "@/app/store/store";
import "./CurrentLocation.scss";

export const CurrentLocation = () => {
    const { data } = useWeatherStore(state => state);

    return (
        <div className="CurrentLocation-Display">
            <div className="row">
                <p className="city-name"><strong>{data.city}</strong></p>   
            </div>
            <div className="row">
                <p><strong>Status Weather</strong> {data.status_weather}</p>
                <p><strong>Cloud Coverage</strong> {data.cloud_coverage}%</p>
            </div>
            <div className="row">
                <p><strong>Min Temperature</strong> {data.min_temperature} °C</p>
                <p><strong>Max Temperature</strong> {data.max_temperature} °C</p>
            </div>
            <div className="row">
                <p><strong>Pressure</strong> {data.pressure} hPa</p>
                <p><strong>Humidity</strong> {data.humidity} %</p>
            </div>
            <div className="row">
                <p><strong>Wind Speed</strong> {data.wind_speed} m/s</p>
                <p><strong>Wind Direction</strong> {data.wind_direction} &deg;</p>
            </div>
            <div className="row">
                <p><strong>Sunrise Time</strong> {data.sunrise_time.slice(11, 16)}</p>
                <p><strong>Sunset Time</strong> {data.sunset_time.slice(11, 16)}</p>
            </div>
            <div className="row">
                <p><strong>Rainfall</strong> {JSON.stringify(data.rainfall).slice(1, -1).replaceAll('"',"").replaceAll(":"," ")} {JSON.stringify(data.rainfall).slice(1, -1).replaceAll('"',"").length > 1 ? ("mm") : ("0h 0 mm")}</p>
                <p><strong>Snowfall</strong> {JSON.stringify(data.snowfall).slice(1, -1).replaceAll('"',"").replaceAll(":"," ")} {JSON.stringify(data.snowfall).slice(1, -1).replaceAll('"',"").length > 1 ? ("mm") : ("0h 0 mm")}</p>
            </div>
        </div>
    );
};
