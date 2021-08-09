import $ from 'jquery';
import FetchCocktailRan from './fetchCocktailRan'

const ftCocktailRan = new FetchCocktailRan();

class CoDayDrinks {
    constructor() {
        this.uiContainerCoDayDrink = document.getElementById("dayDrink");
        this.dayCocktail = {};
        this.dayCocktailId = [];
        this.index = 1;
    }

    populateUI(data, index) {
        data.drinks.forEach((elem) => {
            this.dayCocktailId.push(elem.idDrink);
            this.uiContainerCoDayDrink.innerHTML += `
            <div class="day-drink__item col-6 col-sm-12">
                <img src="${elem.strDrinkThumb}" alt="${elem.strDrink}" class="day-drink__img">
                <div class="day-drink__info-wrapper">
                    <h2 class="cocktail__h2 day-drink__title">special drink</h2>
                    <h3 class="day-drink__name">${elem.strDrink}</h3>
                    <button id="openBtnRecipeDayDrink${elem.idDrink}" class="day-drink__btn recipe-btn">see
                        recipe</button>
                </div>
                <div class="co-recipe" id="coRecipeContainerDayDrink${elem.idDrink}">
                    <div class="co-recipe__container">
                        <h4 class="co-recipe__name">${elem.strDrink}</h4>
                        <div class="co-recipe__info-container">
                            <img src="${elem.strDrinkThumb}" alt="${elem.strDrink}" class="co-recipe__img">
                            <div class="co-recipe__info-block">
                                <div class="co-recipe__ing-block">
                                    <h5 class="co-recipe__title">INGREDIENTS</h5>
                                    <ul class="co-recipe__ing-list">
                                        <li class="co-recipe__ing"><span
                                                class="co-recipe__ing-qty">${elem.strMeasure1}
                                            </span>${elem.strIngredient1}
                                        </li>
                                    </ul>
                                </div>
                                <div class="co-recipe__instruction-block">
                                    <h5 class="co-recipe__title">INSTRUCTIONS</h5>
                                    <p class="co-recipe__instruction">${elem.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                        <button id="closeBtnRecipeDayDrink${elem.idDrink}" class="co-recipe__close-btn"></button>
                    </div>
                </div>
            </div>
            `;
        });
    }

    saveToLS(data, index) {
        console.log(data, index, 'SaveToLs');
        localStorage.setItem(`dayCocktails${index}`, JSON.stringify(data));
    }

    getFromLS(qty) {
        console.log('start');
        for (let i = 1; i <= qty; i++) {
            if (!localStorage.getItem(`dayCocktails${i}`)) {
                this.getCocktailData(i);
                document.cookie = `dayCocktailTime=0; max-age=${this.getTimeDelete}`;
            } else if (localStorage.getItem(`dayCocktails${i}`)) {
                console.log('Gib');
                this.dayCocktail = JSON.parse(localStorage.getItem(`dayCocktails${i}`));
                this.populateUI(this.dayCocktail);
            }
        }
        this.addEventBtnRecipe(this.dayCocktailId, 'openBtnRecipeDayDrink', 'coRecipeContainerDayDrink', 'closeBtnRecipeDayDrink')
    }

    getCocktailData(index) {
        ftCocktailRan.getCurrent().then((data) => {
            this.dayCocktail = data;
            this.saveToLS(data, index);
            this.populateUI(data, index);
        })
    }

    clearLS() {
        localStorage.clear();
    }

    addEventBtnRecipe(data, openBtnId, containerId, closeBtnId) {
        data.forEach((elem) => {
            // console.log(elem, data, `#${openBtnId}${elem.idDrink}`, `#${containerId}${elem.idDrink}`, `#${closeBtnId}${elem.idDrink}`);
            // console.log($(`#${openBtnId}${elem.idDrink}`), $(`#${containerId}${elem.idDrink}`),$(`#${closeBtnId}${elem.idDrink}`));
            console.log(elem);
            $(`#${openBtnId}${elem}`).click(function () {
                $(`#${containerId}${elem}`).addClass('visible-recipe');
                $(document.body).addClass('recipe-open');

                console.log('open');
            });
            $(`#${closeBtnId}${elem}`).click(function () {
                $(`#${containerId}${elem}`).removeClass('visible-recipe');
                $(document.body).removeClass('recipe-open');

                console.log('close');
            });
        });
    }

    getTimeDelete() {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
        let totalSecondsInADay = 86400;

        return totalSecondsInADay - totalSecondsToday;
    }
}

export default CoDayDrinks;