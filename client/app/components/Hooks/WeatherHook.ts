import { useWeatherStore } from "@/app/store/store";
import { TWeatherData } from "../Types/Types";
import { WeatherAPI } from "../API/OpenWeatherAPI";

export const useWeatherUpdater = () => {
  const { setData } = useWeatherStore();

  const updateData = async (city: string) => {
    try {
      const responseData = await WeatherAPI.getDataByCity(city);
      const data = responseData as TWeatherData;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return updateData;
};
