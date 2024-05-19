const apiKey = "be62b83e5607cbed9e456596a35306ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";

async function getWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}` );
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".feels").innerHTML = Math.round(data.main.feels_like) + "°c";

}
getWeather();

