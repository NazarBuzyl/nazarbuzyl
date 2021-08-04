// class WeatherHtml {
//     constructor() {
//         this.uiContainerWe = document.getElementById("weatherInfo");
//         this.city;
//         this.defaultCity = "Kyiv";
//     }

//     populateUI(data) {
//         this.uiContainerCocktail.innerHTML = `
//               `;
//     }

//     clearUI() {
//         uiContainerWe.innerHTML = "";
//         uiContainerWeFull.innerHTML = "";
//     }
//     saveToLS(data) {
//         localStorage.setItem("city", JSON.stringify(data));
//     }
//     getFromLS() {
//         if (localStorage.getItem("city" == null)) {
//             return this.defaultCity;
//         } else {
//             this.city = JSON.parse(localStorage.getItem("city"));
//         }

//         return this.city;
//     }
//     clearLS() {
//         localStorage.clear();
//     }

//     getTimeForm(data) {
//         const time = new Date(data * 1000);
//         const hours = (time.getHours() < 10) ? "0" + time.getHours() : time.getHours();
//         const minutes = (time.getMinutes() < 10) ? "0" + time.getMinutes() : time.getMinutes();

//         const dateForm = hours + ':' + minutes;
//         return dateForm;
//     }
// }

// export default WeatherHtml;