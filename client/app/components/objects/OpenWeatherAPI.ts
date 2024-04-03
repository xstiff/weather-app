import axios from "axios";

"https://api.openweathermap.org/geo/1.0/direct?q=Warszawa&limit=2&appid=6611cca35400d73a09f389df35033cda"


const url = "http://localhost:8000/weather/{city}/"

export class OpenWeatherAPI {
    private url: string = "http://localhost:8000/api/"
    public getDataByCity = async (city: string) => {
        try {
            const request = await axios.get(this.url + `weather/${city}/`)
            return request
        } catch (error) {
            console.log("Error! | " + error)
            return error
        }
    }

    public searchEngine = async (phrase: string) => {
        try {
            const request = await axios.get(this.url + `search/${phrase}/`)
            return request
        } catch (error) {
            console.log("Error! | " + error)
            return error
        }
    }
}