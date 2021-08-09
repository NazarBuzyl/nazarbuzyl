class WeatherHtml {
    constructor() {
        this.uiContainerWe = document.getElementById("weatherInfo");
        this.uiContainerWeFull = document.getElementById("weatherInfoFull");
        this.city;
        this.defaultCity = "Kiev";
    }

    populateUI(data) {
        this.saveToLS(data);
        this.uiContainerWe.innerHTML = `
            <h2 class="we-info__title title-h2">Weather - ${data.name}</h2>
            <p class="we-info__time">As of ${this.getTimeForm(data.dt)} EEST</p>
            <div class="we-info__temperature-block row">
                <div class="we-info__now-temperature-block">
                    <p class="we-info__now-temperature">${~~data.main.temp} °</p>
                    <p class="we-info__descr">${data.weather[0].description}</p>
                </div>
                <div class="we-info__min-max-temperature-block">
                    <div class="we-info__img-block">
                    <img class="we-info__img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                    alt="${data.weather[0].description}">
                    </div>
                    <p class="we-info__min-max-temperature">${~~data.main.temp_max} °/${~~data.main.temp_min} °</p>
                </div>
            </div>
        `;
        this.uiContainerWeFull.innerHTML = `
        <h2 class="we-info-full__title title-h2">Weather in ${data.name} for today</h2>
      <div class="we-info-full__temperature-block">
          <div class="row we-info-full__sun-row">
              <div class="we-info-full__temperature-block ">
                  <p class="we-info-full__feel-temperature">${~~data.main.feels_like} °</p>
                  <p class="we-info-full__descr">Feels like</p>
              </div>
              <div class="we-info-full__sun-pos">
                  <div class="we-info-full__semicircle">
                  </div>
                  <div class="we-info-full__sun-rise-set-block">
                      <div class="we-info-full__sunrise">
                          <svg class="we-info-full__sun-icon" viewBox="0 0 24 24">
                              <title>Sun Rise</title>
                              <path
                                  d="M10.862 6.052v5.329a.75.75 0 0 0 1.5 0V6.036l1.772 1.534a.75.75 0 0 0 .982-1.134l-3.003-2.601a.75.75 0 0 0-.982 0L8.128 6.436A.75.75 0 0 0 9.11 7.57l1.752-1.518zM21 19.128a.75.75 0 0 0 0-1.5H3.167a.75.75 0 1 0 0 1.5H21z">
                              </path>
                          </svg>
                          <p class="we-info-full__sun-text">${this.getTimeForm(data.sys.sunrise)}</p>
                      </div>
                      <div class="we-info-full__sunset">
                          <svg class="we-info-full__sun-icon" viewBox="0 0 24 24">
                              <title>Sunset</title>
                              <path
                                  d="M10.862 9.853L9.044 8.278a.75.75 0 1 0-.982 1.134l3.003 2.602a.75.75 0 0 0 .982 0l3.004-2.602a.75.75 0 0 0-.983-1.134l-1.706 1.478V4a.75.75 0 0 0-1.5 0v5.853zM21 19.075a.75.75 0 1 0 0-1.5H3.167a.75.75 0 1 0 0 1.5H21z">
                              </path>
                          </svg>
                          <p class="we-info-full__sun-text">${this.getTimeForm(data.sys.sunset)}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row we-info-full__row">
              <div class="we-info-full__card">
                  <svg class="we-info-full__icon" viewBox="0 0 24 24">
                      <title>Temperature</title>
                      <path
                          d="M10.333 15.48v.321c.971.357 1.667 1.322 1.667 2.456 0 1.438-1.12 2.604-2.5 2.604S7 19.695 7 18.257c0-1.134.696-2.099 1.667-2.456v-.322a2.084 2.084 0 0 1-1.25-1.91V5.583a2.083 2.083 0 1 1 4.166 0v7.986c0 .855-.514 1.589-1.25 1.91zM15.8 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                      </path>
                  </svg>
                  <div class="we-info-full__icon-desription">
                      High / low
                  </div>
                  <div class="we-info-full__info-text"><span>${~~data.main.temp_max} °</span> / <span>${~~data.main.temp_min} °</span>
                  </div>
              </div>
              <div class="we-info-full__card">
                  <svg class="we-info-full__icon" viewBox="0 0 24 24">
                      <title>Wind</title>
                      <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none">
                      </path>
                  </svg>
                  <div class="we-info-full__icon-desription">
                      Wind
                  </div>
                  <div class="we-info-full__info-text">
                      <span>
                          <svg class="we-info-full__info-text-icon" style="transform:rotate(${data.wind.deg}deg)" viewBox="0 0 24 24">
                              <title>Wind Direction</title>
                              <path stroke="currentColor" fill="none"
                                  d="M18.467 4.482l-5.738 5.738a1.005 1.005 0 0 1-1.417 0L5.575 4.482l6.446 16.44 6.446-16.44z">
                              </path>
                          </svg>${data.wind.speed} km / year
                      </span>
                  </div>
              </div>
              <div class="we-info-full__card">
                  <svg class="we-info-full__icon" viewBox="0 0 24 24">
                      <title>Humidity</title>
                      <path fill-rule="evenodd"
                          d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4">
                      </path>
                  </svg>
                  <div class="we-info-full__icon-desription">Humidity
                  </div>
                  <div class="we-info-full__info-text">
                      <span>${data.main.humidity}%
                      </span>
                  </div>
              </div>
              <div class="we-info-full__card" class="">
                  <svg class="we-info-full__icon" viewBox="0 0 24 24">
                      <title>Pressure</title>
                      <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z">
                      </path>
                  </svg>
                  <div class="we-info-full__icon-desription">Pressure
                  </div>
                  <div class="we-info-full__info-text">
                      <span>
                          <svg class="we-info-full__info-text-icon" viewBox="0 0 24 24">
                              <title>Arrow Up</title>
                              <path d="M11 2.5a1 1 0 0 1 2 0v19a1 1 0 0 1-2 0v-19z"></path>
                              <path
                                  d="M12 3.914l-7.293 7.293a1 1 0 1 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 1 1-1.414 1.414L12 3.914z">
                              </path>
                          </svg>${data.main.pressure} mbar
                      </span>
                  </div>
              </div>
              <div class="we-info-full__card">
                  <svg class="we-info-full__icon" viewBox="0 0 1024 1024">
                      <title>Visibility</title>
                      <path
                          d="M491.856 879.808c-60.48-5.056-110.848-25.184-171.328-55.424-120.96-55.424-216.704-146.112-292.256-256.96-25.248-40.352-30.24-80.64 0-126.016 80.608-115.872 186.464-211.68 317.472-272.096 110.816-50.4 226.752-50.4 337.664 0 136 60.48 241.824 156.224 317.44 282.208 15.104 25.216 25.12 65.504 10.048 85.728-105.792 191.424-256.992 367.84-519.04 342.56zm292.256-377.92c0-151.168-120.96-272.064-272.096-272.064-146.144 0-272.128 126.016-272.128 272.064 0 151.232 120.96 277.216 272.128 277.216 151.104-.032 272.096-125.984 272.096-277.216z">
                      </path>
                      <path
                          d="M789.808 500.416c0 156.896-125.472 287.52-282.336 282.336-156.864 0-282.336-130.656-282.336-287.488 0-146.4 130.656-277.12 282.336-277.12 156.896-.032 287.584 125.376 282.336 282.272zM512.752 348.832c-83.68 0-151.584 67.968-151.584 151.584 0 88.864 67.968 156.896 151.584 156.896 83.648 0 156.832-73.216 156.832-156.896-5.184-83.648-73.152-151.584-156.832-151.584z">
                      </path>
                  </svg>
                  <div class="we-info-full__icon-desription">Visibility
                  </div>
                  <div class="we-info-full__info-text">
                      <span>${data.visibility/1000} km
                      </span>
                  </div>
              </div>
          </div>
      </div>
            `;
    }

    clearUI() {
        uiContainerWe.innerHTML = "";
        uiContainerWeFull.innerHTML = "";
    }
    saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data));
    }
    getFromLS() {
        if (!localStorage.getItem("city")) {
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city;
    }
    clearLS() {
        localStorage.clear();
    }

    getTimeForm(data) {
        const time = new Date(data * 1000);
        const hours = (time.getHours() < 10) ? "0" + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? "0" + time.getMinutes() : time.getMinutes();

        const dateForm = hours + ':' + minutes;
        return dateForm;
    }
}

export default WeatherHtml;