
import { create } from "zustand";


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
type WeatherStore = {
    data: TWeatherData;
    prevData: TWeatherData[];
    setData: (prop: TWeatherData) => void;
}

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
}

// 
// Actual Store
// 
export const useWeatherStore = create<WeatherStore>((set) => ({
    data: EmptyWeatherData,
    prevData: [],
    setData: (new_data: TWeatherData) => {
        set((state) => {
            const isDuplicateCity = state.prevData.some((data) => data.city === new_data.city);


            if (!isDuplicateCity) {
                return {
                    prevData: [...state.prevData, state.data],
                    data: new_data,
                };
            }
            return state;
        });
    },
}));

