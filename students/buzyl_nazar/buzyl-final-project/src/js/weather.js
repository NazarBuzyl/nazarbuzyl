import FetchWeather from './fetchWeather';
import WeatherHtml from './weatherHtml';

const weather = document.getElementById('forecastWeather');

console.log(weather);
if (weather !== null) {
    // Weather
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    const ftWe = new FetchWeather();
    const weHtml = new WeatherHtml();

    const searchWeather = document.getElementById("searchCityWeather");
    const btnWeather = document.getElementById("submitWeather");

    searchWeather.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) getInfoByName(searchWeather.value);
    });
    btnWeather.addEventListener("click", () => {
        getInfoByName(searchWeather.value)
    });

    function getInfoByName(valueSearch) {
        const currentVal = valueSearch;
        ftWe.getCurrent(currentVal).then((data) => {
            if (data.cod !== 200) {
                return;
            }

            let cordsCity = {
                lat: data.coord.lat,
                lng: data.coord.lon
            };
            initMap(cordsCity);

            weHtml.populateUI(data);
        });
        searchWeather.value = '';
    }

    window.addEventListener("DOMContentLoaded", () => {
        const dataSaved = weHtml.getFromLS();

        if (dataSaved === weHtml.defaultCity) {
            getInfoByName(dataSaved);
            return;
        }

        weHtml.populateUI(dataSaved);
    });
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
}