class WeatherAPI {
    constructor() {
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "474a52334101f1aef0f9e8d59e64c683";

    }

    async getWeatherInfo(cityName) {
      const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`);
      const data = await response.json();
        return data;
    }

}
