import $ from 'jquery';
import Fetch from './fetch';
import UI from './ui';

//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
	const currentVal = search.value;

	ft.getCurrent(currentVal).then((data) => {
		console.log(data, currentVal);
		//call a UI method//
		ui.populateUI(data);
		//call saveToLS
		ui.saveToLS(data);
	});
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
	const dataSaved = ui.getFromLS();
	ui.populateUI(dataSaved);
});

// const button = document.querySelector('.btn-search');
// const inputValue = document.querySelector('.input-value');
// const name = document.querySelector('.name');
// const desc = document.querySelector('.desc');
// const temp = document.querySelector('.temp');
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://api.ambeedata.com/latest/by-city?city=Bengaluru",
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "API_KEY",
// 		"Content-type": "application/json"
// 	}
// };

// button.addEventListener('click', function () {
// 	fetch('https://api.ambeedata.com/latest/by-city?city=' + inputValue.value)
// 		.then(response => response.json())
// 		.then(data => console.log(data))

// 		.catch(err => console.log("Wrong city!"));	
// });