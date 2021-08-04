class WeatherFullHtml {
    constructor() {
      this.uiContainer = document.getElementById("weatherInfo");
      this.city;
      this.defaultCity = "Kyiv";
    }
  
    populateUI(data) {
      this.uiContainer.innerHTML = `
      <h2 class="we-info__title title-h2">Weather - ${data.name}</h2>
      <p class="we-info__time">As of 12:00 EEST</p>
      <div class="we-info__temperature-block row">
          <div class="we-info__now-temperature-block">
              <p class="we-info__now-temperature">${~~data.main.temp} °</p>
              <p class="we-info__descr">${data.weather[0].description}</p>
          </div>
          <div class="we-info__min-max-temperature-block">
              <img class="we-info__min-max-icon" src="" alt="">
              <p class="we-info__min-max-temperature">${~~data.main.temp_max} °/${~~data.main.temp_min} °</p>
          </div>
      </div>
          `;
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }
  
  export default WeatherFullHtml;