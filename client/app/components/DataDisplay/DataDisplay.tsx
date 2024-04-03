
import { TWeatherData, useWeatherStore } from "@/app/store/store"
import { ColorRing } from "react-loader-spinner"
import "./DataDisplay.scss"

const TableElement = ({data}: {data: TWeatherData}) => {
    return(
        <>
        <tr>
            <td>{data.city}</td>
            <td>{data.status_weather}</td>
            <td>{data.min_temperature} &deg;C</td>
            <td>{data.max_temperature} &deg;C</td>
            <td>{data.pressure} hPa</td>
            <td>{data.humidity} %</td>
            <td>{data.wind_speed} m/s</td>
            <td>{data.wind_direction}</td>
            <td>{data.cloud_coverage}</td>
            <td>{data.sunrise_time.slice(11, 16)}</td>
            <td>{data.sunset_time.slice(11, 16)}</td>
            <td>{JSON.stringify(data.rainfall)}</td>
            <td>{JSON.stringify(data.snowfall)}</td>
        </tr>
        </>
    )
}

export const DataDisplay = () => {
  const { data, prevData } = useWeatherStore.getState();

  return (
    <div className="DataDisplay-Container">
        <h1>Previous searches</h1>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Status Weather</th>
              <th>Min Temperature</th>
              <th>Max Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
              <th>Wind Speed</th>
              <th>Wind Direction</th>
              <th>Cloud Coverage</th>
              <th>Sunrise Time</th>
              <th>Sunset Time</th>
              <th>Rainfall</th>
              <th>Snowfall</th>
            </tr>
          </thead>
          <tbody>
          {
            prevData.length > 1 &&
            prevData.slice(1).map((el, idx) => (
              <TableElement key={idx} data={el} />
            ))
          }
          </tbody>
        </table>
      </div>
  );
};