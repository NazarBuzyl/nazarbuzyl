import FetchWeather from './fetchWeather';
import WeatherHtml from './weatherHtml';

// Weather
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const ftWe = new FetchWeather();
const weHtml = new WeatherHtml();

const searchWeather = document.getElementById("searchCityWeather");
const btnWeather = document.getElementById("submitWeather");

searchWeather.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) getInfoByName();
});
btnWeather.addEventListener("click", getInfoByName);

function getInfoByName() {
    const currentVal = searchWeather.value;

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
        weHtml.saveToLS(data);
    });
    searchWeather.value = '';
}

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = weHtml.getFromLS();
    // ftWe.getCurrent(dataSaved.name).then((data) => {
    // 	weHtml.populateUI(data);
    // 	weHtml.saveToLS(data);
    // });
    weHtml.populateUI(dataSaved);
});
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||