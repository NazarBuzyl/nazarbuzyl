import $ from 'jquery';
import FetchCocktail from "./fetchCocktail";
import FetchCocktailById from "./fetchCocktailById";
import CoPopDrinksHtml from "./coPopDrinksHtml";
import CoCatalogHtml from "./coCatalogHtml";

// Cocktail
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const ftCocktail = new FetchCocktail();
const ftCocktailById = new FetchCocktailById();
const htmlPopCocktail = new CoPopDrinksHtml();
const htmlCoCatalog = new CoCatalogHtml();

const searchCocktail = document.getElementById("searchCocktail");
const btnCocktail = document.getElementById("submitCocktail");

const popCocktailId = [11000, 11007, , 17196];
const defaultOpenBtnRecipe = 'openBtnRecipe';
const defaultCloseBtnRecipe = 'closeBtnRecipe';
const defaultIdRecipe = 'coRecipeContainer';


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
        htmlCoCatalog.clearUI();
        htmlCoCatalog.populateUI(data);
        addEventBtnRecipe(data, defaultOpenBtnRecipe, defaultIdRecipe, defaultCloseBtnRecipe);
    });
    searchCocktail.value = '';
}

popCocktailId.forEach((elem, index) => {
    ftCocktailById.getCurrent(popCocktailId[index]).then((data) => {
        htmlPopCocktail.populateUI(data);
        addEventBtnRecipe(data, `${defaultOpenBtnRecipe}Pop`, `${defaultIdRecipe}Pop`, `${defaultCloseBtnRecipe}Pop`);
    });
})

// Cards Cocktail
function addEventBtnRecipe(data, openBtnId, containerId, closeBtnId) {
    // console.log(data);
    data.drinks.forEach((elem, index) => {
        // console.log(elem, data, `#${openBtnId}${elem.idDrink}`, `#${containerId}${elem.idDrink}`, `#${closeBtnId}${elem.idDrink}`);
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
    // console.log(data);
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||