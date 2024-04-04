import { create } from "zustand";
import { TWeatherData } from "../components/Types/Types";

type WeatherStore = {
  data: TWeatherData;
  prevData: TWeatherData[];
  setData: (prop: TWeatherData) => void;
};

const EmptyWeatherData = {
  city: "",
  cloud_coverage: 0,
  humidity: 0,
  max_temperature: 0,
  min_temperature: 0,
  pressure: 0,
  rainfall: {},
  snowfall: {},
  status_weather: "",
  sunrise_time: "",
  sunset_time: "",
  wind_direction: 0,
  wind_speed: 0,
};

//
// Actual Store
//
export const useWeatherStore = create<WeatherStore>((set) => ({
  data: EmptyWeatherData,
  prevData: [],
  setData: (new_data: TWeatherData) => {
    set((state) => {
      const isDuplicateCity = state.prevData.some(
        (data) => data.city === new_data.city
      );

      if (!isDuplicateCity) {
        return {
          prevData: [...state.prevData, new_data],
          data: new_data,
        };
      }

      return {
        prevData: [...state.prevData],
        data: new_data,
      };
    });
  },
}));
