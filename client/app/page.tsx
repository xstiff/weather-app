"use client";
import { useEffect } from "react";
import { SearchInput } from "./components/ReactComponents/SearchInput/SearchInput";
import { DataDisplay } from "./components/ReactComponents/DataDisplay/DataDisplay";
import { CurrentLocation } from "./components/ReactComponents/CurrentLocation/CurrentLocation";
import { useWeatherUpdater } from "./components/Hooks/WeatherHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilteringAndSorting } from "./components/ReactComponents/Filtering/FilteringAndSorting";

export default function Home() {
  const useWeather = useWeatherUpdater();

  // Getting some sample data
  useEffect(() => {
    const SampleData = () => {
      toast.success("Retrieving sample data of 10 cities", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      useWeather("Warszawa");
      useWeather("Poznań");
      useWeather("Miami");
      useWeather("Gdańsk");
      useWeather("Łódź");
      useWeather("Berlin");
      useWeather("Rzym");
      useWeather("Split");
      useWeather("Zadar");
      useWeather("Wrocław");
    };

    SampleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchInput />
      <CurrentLocation />
      <FilteringAndSorting />
      <DataDisplay />
      <ToastContainer />
    </div>
  );
}
