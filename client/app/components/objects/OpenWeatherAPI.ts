import axios from "axios";


const url = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

class OpenWeatherAPI {
    url: string;

    constructor(url: string) {
        this.url = url;
    }


    getByCity = (city: string) => {
        return 
    }
    
}