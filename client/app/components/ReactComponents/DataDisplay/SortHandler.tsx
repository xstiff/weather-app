import { TWeatherData } from "../../Types/Types";

export const SortHandler = (
  sortBy: number,
  prevDataFiltered: TWeatherData[],
  setPrevDataFiltered: (data: TWeatherData[]) => void
) => {
  const dataToSort = [...prevDataFiltered];
  switch (sortBy) {
    case 0:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => a.city.localeCompare(b.city))
      );
      break;
    case 1:
      setPrevDataFiltered(
        dataToSort.sort((a, b) =>
          a.status_weather.localeCompare(b.status_weather)
        )
      );
      break;
    case 2:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => a.min_temperature - b.min_temperature)
      );
      break;
    case 3:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => a.max_temperature - b.max_temperature)
      );
      break;
    case 4:
      setPrevDataFiltered(dataToSort.sort((a, b) => a.pressure - b.pressure));
      break;
    case 5:
      setPrevDataFiltered(dataToSort.sort((a, b) => a.humidity - b.humidity));
      break;
    case 6:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => a.wind_speed - b.wind_speed)
      );
      break;
    case 7:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => a.wind_direction - b.wind_direction)
      );
      break;
    case 8:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => a.cloud_coverage - b.cloud_coverage)
      );
      break;
    case 9:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => {
          const sunriseA = parseInt(
            a.sunrise_time.slice(11, 16).replace(":", "")
          );
          const sunriseB = parseInt(
            b.sunrise_time.slice(11, 16).replace(":", "")
          );
          return sunriseA - sunriseB;
        })
      );
      break;
    case 10:
      setPrevDataFiltered(
        dataToSort.sort((a, b) => {
          const sunsetA = parseInt(
            a.sunset_time.slice(11, 16).replace(":", "")
          );
          const sunsetB = parseInt(
            b.sunset_time.slice(11, 16).replace(":", "")
          );
          return sunsetA - sunsetB;
        })
      );
      break;
    default:
      break;
  }
};
