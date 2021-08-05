class CoPopDrinksHtml {
    constructor() {
        this.uiContainerCoPopDrink = document.getElementById("cocktailPoDrink");
        this.cocktail;
    }
    populateUI(data) {
        this.uiContainerCoPopDrink.innerHTML += `
             <div class="co-pop-drink__item">
                <div class="co-pop-drink__visibility-part visibility-part">
                    <div class="co-pop-drink__image-area">
                        <img src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}" class="visibility-part__img">
                        <div class="co-pop-drink__hover-info hover-info">
                            <div class="hover-info__item">
                                <img class="hover-info__icon" src="" alt="">
                                <p class="hover-info__text">${data.drinks[0].strAlcoholic}</p>
                            </div>
                            <div class="hover-info__item">
                                <img class="hover-info__icon" src="" alt="">
                                <p class="hover-info__text">${data.drinks[0].strGlass}</p>
                            </div>
                            <div class="hover-info__btn-block">
                                <button class="hover-info__btn">see recipe</button>
                            </div>
                        </div>
                    </div>    
                    <h3 class="visibility-part__name">${data.drinks[0].strDrink}</h3>
                </div>
            </div>
        `;
    }
    
}

export default CoPopDrinksHtml;