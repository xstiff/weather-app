import { TWeatherData } from "../../Types/Types";

interface TableElementProps {
  data: TWeatherData;
}

const TableElement: React.FC<TableElementProps> = ({ data }) => {
  return (
    <tr>
      <td>{data.city}</td>
      <td>{data.status_weather}</td>
      <td>{data.min_temperature} &deg;C</td>
      <td>{data.max_temperature} &deg;C</td>
      <td>{data.pressure} hPa</td>
      <td>{data.humidity} %</td>
      <td>{data.wind_speed} m/s</td>
      <td>{data.wind_direction} &deg;</td>
      <td>{data.cloud_coverage} %</td>
      <td>{data.sunrise_time.slice(11, 16)}</td>
      <td>{data.sunset_time.slice(11, 16)}</td>
      <td>{formatRainfall(data.rainfall)}</td>
      <td>{formatSnowfall(data.snowfall)}</td>
    </tr>
  );
};

const formatRainfall = (rainfall: Record<string, any>): string => {
  const formattedRainfall = JSON.stringify(rainfall)
    .slice(1, -1)
    .replaceAll('"', "")
    .replaceAll(":", " ");
  return formattedRainfall.length > 1 ? `${formattedRainfall} mm` : "0h 0 mm";
}

const formatSnowfall = (snowfall: Record<string, any>): string => {
  const formattedSnowfall = JSON.stringify(snowfall)
    .slice(1, -1)
    .replaceAll('"', "")
    .replaceAll(":", " ");
  return formattedSnowfall.length > 1 ? `${formattedSnowfall} mm` : "0h 0 mm";
}

export default TableElement;
