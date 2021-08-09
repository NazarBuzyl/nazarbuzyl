import $ from 'jquery';
import FetchCocktail from "./fetchCocktail";
import FetchCocktailById from "./fetchCocktailById";
import CoPopDrinksHtml from "./coPopDrinksHtml";
import CoCatalogHtml from "./coCatalogHtml";
// import FetchCocktailRan from './fetchCocktailRan';
import CoDayDrinks from './coDayDrink';


const cocktail = document.getElementById('CocktailSite');

if (cocktail !== null) {
    // Cocktail
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    const ftCocktail = new FetchCocktail();
    const ftCocktailById = new FetchCocktailById();
    // const ftCocktailRan = new FetchCocktailRan();
    const htmlPopCocktail = new CoPopDrinksHtml();
    const htmlCoCatalog = new CoCatalogHtml();
    const coDayDrinks = new CoDayDrinks();

    const searchCocktail = document.getElementById("searchCocktail");
    const btnCocktail = document.getElementById("submitCocktail");

    const popCocktailId = [11000, 11007, 17196];
    const defaultOpenBtnRecipe = 'openBtnRecipe';
    const defaultCloseBtnRecipe = 'closeBtnRecipe';
    const defaultIdRecipe = 'coRecipeContainer';
    const qtyDayDrinks = 2;

    // DayDrinks
    if (!getCookie('dayCocktailTime')) {
        coDayDrinks.clearLS();
    }
    coDayDrinks.getFromLS(qtyDayDrinks);

    // Search
    searchCocktail.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) getInfoCocktail();
    });
    btnCocktail.addEventListener("click", getInfoCocktail);

    // Fetch Cocktail
    function getInfoCocktail() {
        const currentVal = searchCocktail.value;

        ftCocktail.getCurrent(currentVal).then((data) => {
            console.log(data);
            if (!data.drinks) return;
            htmlCoCatalog.clearUI();
            htmlCoCatalog.populateUI(data);
            addEventBtnRecipe(data, defaultOpenBtnRecipe, defaultIdRecipe, defaultCloseBtnRecipe);
        });
        searchCocktail.value = '';
    }

    // Pop cocktail
    popCocktailId.forEach((elem, index) => {
        ftCocktailById.getCurrent(popCocktailId[index]).then((data) => {
            htmlPopCocktail.populateUI(data);
        });
    })
    popCocktailId.forEach((elem, index) => {
        ftCocktailById.getCurrent(popCocktailId[index]).then((data) => {
            addEventBtnRecipe(data, `${defaultOpenBtnRecipe}Pop`, `${defaultIdRecipe}Pop`, `${defaultCloseBtnRecipe}Pop`);
        });
    })

    // Recipe Cocktail
    function addEventBtnRecipe(data, openBtnId, containerId, closeBtnId) {
        data.drinks.forEach((elem) => {
            // console.log(elem, data, `#${openBtnId}${elem.idDrink}`, `#${containerId}${elem.idDrink}`, `#${closeBtnId}${elem.idDrink}`);
            // console.log($(`#${openBtnId}${elem.idDrink}`), $(`#${containerId}${elem.idDrink}`),$(`#${closeBtnId}${elem.idDrink}`));
            
            $(`#${openBtnId}${elem.idDrink}`).click(function () {
                $(`#${containerId}${elem.idDrink}`).addClass('visible-recipe');
                $(document.body).addClass('recipe-open');

                console.log('open');
            });
            $(`#${closeBtnId}${elem.idDrink}`).click(function () {
                $(`#${containerId}${elem.idDrink}`).removeClass('visible-recipe');
                $(document.body).removeClass('recipe-open');

                console.log('close');
            });
        });
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
}