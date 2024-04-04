import axios, { AxiosError, AxiosResponse } from "axios";
import { TWeatherData, TWeatherQueryElement } from "../Types/Types";

class OpenWeatherAPI {
  private url: string = "http://localhost:8000/api/";

  public async getDataByCity(city: string): Promise<TWeatherData> {
    try {
      const response: AxiosResponse<TWeatherData> = await axios.get(
        `${this.url}weather/${city}/`
      );
      return response.data;
    } catch (error) {
      console.log("Error fetching weather data:", error);
      throw new Error("Failed to fetch weather data");
    }
  }

  public async searchEngine(phrase: string): Promise<any> {
    try {
      const response: AxiosResponse<TWeatherQueryElement[]> = await axios.get(
        `${this.url}search/${phrase}/`
      );
      return response.data;
    } catch (error) {
      console.log("Data not found.");
      throw new Error("Search failed");
    }
  }
}

export const WeatherAPI = new OpenWeatherAPI();
