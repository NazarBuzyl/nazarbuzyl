import $ from 'jquery';
import FetchWeather from './fetchWeather';
import FetchCity from './fetchCity';
import WeatherHtml from './weatherHtml';
import WeatherFullHtml from './weatherFullHtml';
//inst classes//

const ftWe = new FetchWeather();
const ftCity = new FetchCity();
const weHtml = new WeatherHtml();
const weFullHtml = new WeatherFullHtml();

// console.log(ftCity.getCurrent());

//add event listeners//

const searchWeather = document.getElementById("searchCityWeather");
const btnWeather = document.getElementById("submitWeather");
btnWeather.addEventListener("click", () => {
	const currentVal = searchWeather.value;

	ftWe.getCurrent(currentVal).then((data) => {
		console.log(data, currentVal);

		let cordsCity = {
			lat: data.coord.lat,
			lng: data.coord.lon
		};
		initMap(cordsCity);
		weHtml.populateUI(data);
		weHtml.saveToLS(data);
		weFullHtml.populateUI(data);
		weFullHtml.saveToLS(data);
	});
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
	const dataSaved = weHtml.getFromLS();
	weHtml.populateUI(dataSaved);
	weFullHtml.populateUI(dataSaved);
});