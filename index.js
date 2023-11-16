const apiKey = "d0df9c18425e4d8f09c55e5170311c76";
const apiURL =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon") 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
	const response = await fetch(apiURL + city + `&appid=${apiKey}`);
	if (response.status == 404)  {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		let data = await response.json();
		cityName.innerHTML = data.name;
		temp.innerHTML = Math.round(data.main.temp) + "℃";
		humidity.innerHTML = data.main.humidity + "%";
		wind.innerHTML = data.wind.speed + "km/h";
	
		if (data.weather[0].main === 'Clouds') {
			weatherIcon.src = "images/clouds.png"
		} else if (data.weather[0].main === "Clear") {
			weatherIcon.src = "images/clear.png"
		}else if (data.weather[0].main === "Rain") {
			weatherIcon.src = "images/rain.png"
		}else if (data.weather[0].main === "Drizzle") {
			weatherIcon.src = "images/drizzle.png"
		} else if (data.weather[0].main === "Mist") {
			weatherIcon.src = "images/mist.png"
		}
	
		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";

	}
	

}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
