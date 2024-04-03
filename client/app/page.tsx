'use client'
import { useEffect } from "react";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { WeatherAPI } from "./components/objects/OpenWeatherAPI";
import { TWeatherData, useWeatherStore } from "./store/store";
import { DataDisplay } from "./components/DataDisplay/DataDisplay";
import { CurrentLocation } from "./components/CurrentLocation/CurrentLocation";


export default function Home() {

  const {setData} = useWeatherStore( state => state )

  const updateData = async (city: string) => {
    try {
      const responseData = await WeatherAPI.getDataByCity(city);
      const data = responseData as TWeatherData
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Getting some samples
  useEffect(() => {
    updateData("Warszawa")
    updateData("Poznań")
    updateData("Miami")
    updateData("Gdańsk")
    updateData("Łódź")
    updateData("Berlin")
    updateData("Rzym")
    updateData("Split")
    updateData("Zadar")
    updateData("Wrocław")
  }, [])


  return (
    <div>
      <SearchInput />
      <CurrentLocation />
      <DataDisplay />
    </div>
  );
}
