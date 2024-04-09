"use client";
import { useEffect } from "react";
import { SearchInput } from "./components/ReactComponents/SearchInput/SearchInput";
import { DataDisplay } from "./components/ReactComponents/DataDisplay/DataDisplay";
import { CurrentLocation } from "./components/ReactComponents/CurrentLocation/CurrentLocation";
import { useWeatherUpdater } from "./components/Hooks/WeatherHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilteringAndSorting } from "./components/ReactComponents/Filtering/FilteringAndSorting";
import { SortRemover } from "./components/ReactComponents/SortRemover/SortRemover";

export default function Home() {
  const useWeather = useWeatherUpdater();

  // Getting some sample data
  useEffect(() => {
    const SampleData = () => {
      toast.success("Retrieving sample data of 10 cities. Please wait.", {
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

      setTimeout(() => {
        toast.warn("Search does auto-complete, but it's slow due to API limitations!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }, 3000)
    };

    SampleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rootDiv">
      <SortRemover />
      <SearchInput />
      <CurrentLocation />
      <FilteringAndSorting />
      <DataDisplay />
      <ToastContainer />
    </div>
  );
}
