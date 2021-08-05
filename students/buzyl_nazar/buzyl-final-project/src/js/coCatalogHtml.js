class CoCatalogHtml {
    constructor() {
        this.uiContainerCoCatalog = document.getElementById("cocktailCatalog");
        this.uiContainerCoPopDrink = document.getElementById("cocktailPoDrink");
        this.cocktail;
    }
    populateUI(data) {
        console.log(data);
        data.drinks.forEach((elem, index) => {
            this.uiContainerCoCatalog.innerHTML += `
            <div class="col-3 co-catalog__item">
                <div class="co-catalog__visibility-part visibility-part">
                    <img src="" alt="" class="visibility-part__img">
                    <h3 class="visibility-part__name">${elem.strDrink}</h3>
                </div>
                <div class="co-catalog__hover-info hover-info">
                    <div class="hover-info__item">
                        <img class="hover-info__icon" src="" alt="">
                        <p class="hover-info__text"></p>
                    </div>
                    <div class="hover-info__item">
                        <img class="hover-info__icon" src="" alt="">
                        <p class="hover-info__text"></p>
                    </div>
                    <div class="hover-info__btn-block">
                        <button class="hover-info__btn">see recipe</button>
                    </div>
                </div>
            </div>
       `;
            console.log(elem);
        })

    }
    clearUI() {
        uiContainerCoCatalog.innerHTML = "";
    }
}

export default CoCatalogHtml;