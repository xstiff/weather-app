import axios, { AxiosResponse } from "axios";
import { TWeatherData } from "@/app/store/store";

class OpenWeatherAPI {
    private url: string = "http://localhost:8000/api/";

    public async getDataByCity(city: string): Promise<TWeatherData> {
        try {
            const response: AxiosResponse<TWeatherData> = await axios.get(`${this.url}weather/${city}/`);
            return response.data;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            throw new Error("Failed to fetch weather data");
        }
    }

    public async searchEngine(phrase: string): Promise<any> {
        try {
            const response = await axios.get(`${this.url}search/${phrase}/`);
            return response.data;
        } catch (error) {
            console.error("Error searching:", error);
            throw new Error("Search failed");
        }
    }
}

export const WeatherAPI = new OpenWeatherAPI();
