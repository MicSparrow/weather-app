const view = (() => {
  function setSearchResult(weatherData) {
    if (!weatherData) return;

    const searchResult = document.getElementById("searchResult");
    searchResult.classList.add("active");

    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const converter = document.getElementById("fahrenheit");
    converter.addEventListener("click", convertToF);
    
    cityName.textContent = `${weatherData.cityName}`;
    temperature.textContent = `${weatherData.temperature} °C`;
    feelsLike.textContent = `Fells like: ${weatherData.feelsLike} °C`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
    
   function convertToF() {
      let celsius = weatherData.temperature;
      let fahrenheit = 9/5 * Number(celsius) + 32;
      temperature.textContent = Math.round(fahrenheit * 100) / 100 + "°F";
    }
   }

  return {
    setSearchResult
  };
})();

export default view;
