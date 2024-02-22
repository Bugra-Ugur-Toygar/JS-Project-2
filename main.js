const searchInput = document.querySelector("#searchInput");
const cityNameEl = document.querySelector(".cityName");
const degreeEl = document.querySelector(".degree");
const descriptionEl = document.querySelector(".description");

searchInput.addEventListener("keypress" , findWeatherInfo);

const weatherApi = new WeatherAPI();



function findWeatherInfo(e){
        if(e.keycode=='13'){
            const cityName = searchInput.value.trim();
            weatherApi.getWeatherInfo(cityName)
            .then(data => {   
                if(data.message=="city not found"){
                    alert("Şehir Bulunamadı.")
                }  else{
                    display(data);
                } 
             
    })
            .catch(err=> console.log(err));
        }
}
function display(data){
     cityNameEl.textContent = data.name;
     degreeEl.textContent = Math.round(data.main.temp)+ "°";
     descriptionEl.textContent = data.weather[0].description;

     searchInput.value="";
}