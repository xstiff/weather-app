'use client'
import { OpenWeatherAPI } from "./components/objects/OpenWeatherAPI";


export default function Home() {
  const Weather = new OpenWeatherAPI();


  const getData = async (city: string) => {
    const response = await Weather.getDataByCity(city)
    console.log(response)
  }

  return (
    <div>
      <p>Hello world</p>

      <button onClick={() => getData("Warszawa")}>
        Click me
      </button>
    
    </div>
  );
}
