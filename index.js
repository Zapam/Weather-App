const apiKey = "d0df9c18425e4d8f09c55e5170311c76";
const apiURL =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
	const response = await fetch(apiURL + city + `&appid=${apiKey}`);
	let data = await response.json();
	console.log(data);
	cityName.innerHTML = data.name;
	temp.innerHTML = Math.round(data.main.temp) + "℃";
	humidity.innerHTML = data.main.humidity + "%";
	wind.innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
