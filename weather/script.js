const apikey = "3bae13d8564b61d00465fc8d3872a61a";

const weatherData = document.getElementById('weather-data');
const cityInputEl = document.getElementById('city-input');

const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if(!response.ok) {
            throw new Error("Network response  was not ok");
        }

        const data = await response.json();
        // console.log(data);
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${data.main.feels_like}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ]

        document.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather ICON">`;
        document.querySelector(".temperature").textContent = `${temperature}°C`;
        document.querySelector(".description").textContent = `${description}`;

        document.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");



    } catch {

        document.querySelector(".icon").innerHTML = "";
        document.querySelector(".temperature").textContent = "";
        document.querySelector(".description").textContent = "An error happened, please try again";

        document.querySelector('.details').innerHTML = "";
        
    }
}