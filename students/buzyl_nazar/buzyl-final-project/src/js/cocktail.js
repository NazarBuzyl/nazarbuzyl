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

const popCocktailId = [11000, 11007, 17196];
let popCocktailData = [];

popCocktailId.forEach((elem, index) => {
    ftCocktailById.getCurrent(popCocktailId[index]).then((data) => {
        popCocktailData.push(data);
        htmlPopCocktail.populateUI(data);
    });
})

console.log(popCocktailData);

searchCocktail.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) getInfoCocktail();
});
btnCocktail.addEventListener("click", getInfoCocktail);

function getInfoCocktail() {
    const currentVal = searchCocktail.value;

    ftCocktail.getCurrent(currentVal).then((data) => {
        htmlCoCatalog.populateUI(data);
        htmlCoCatalog.clearUI();
    });
    searchCocktail.value = '';
}
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||