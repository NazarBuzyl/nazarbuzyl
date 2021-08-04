import FetchCocktail from "./fetchCocktail";
import WeatherHtml from './weatherHtml';

// Cocktail
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const ftCocktail = new FetchCocktail();

const searchCocktail = document.getElementById("searchCocktail");
const btnCocktail = document.getElementById("submitCocktail");

searchCocktail.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) getInfoCocktail();
});
btnCocktail.addEventListener("click", getInfoCocktail);

function getInfoCocktail() {
    const currentVal = searchCocktail.value;

    ftCocktail.getCurrent(currentVal).then((data) => {
        // initMap(cordsCity);
        // weHtml.populateUI(data);
        // weHtml.saveToLS(data);
    });
    searchCocktail.value = '';
}
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
