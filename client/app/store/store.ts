import { create } from "zustand";
import { TWeatherData } from "../components/Types/Types";

type WeatherStore = {
  data: TWeatherData;
  prevData: TWeatherData[];
  prevDataFiltered: TWeatherData[];
  setData: (prop: TWeatherData) => void;
  setPrevDataFiltered: (prop: TWeatherData[]) => void;
  sort: number;
  setSort: (sorter: number) => void;
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
  prevDataFiltered: [],
  setPrevDataFiltered: (new_data: TWeatherData[]) => {
    set({ prevDataFiltered: new_data });
  },
  sort: -1,
  setSort: (sorter: number) => {
    set((state) => ({
      ...state,
      sort: sorter,
    }));
  },  
  setData: (new_data: TWeatherData) => {
    set((state) => {
      const isDuplicateCity = state.prevData.some(
        (data) => data.city === new_data.city
      );

      if (!isDuplicateCity) {
        return {
          prevDaprevDatataFiltered: [...state.prevData, new_data],
          prevData: [...state.prevData, new_data],
          sort: -1,
          data: new_data,
        };
      }

      return {
        prevDataFiltered: [...state.prevData],
        prevData: [...state.prevData],
        data: new_data,
        sort: -1,

      };
    });
  },
}));
