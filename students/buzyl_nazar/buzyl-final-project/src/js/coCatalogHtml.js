class CoCatalogHtml {
    constructor() {
        this.uiContainerCoCatalog = document.getElementById("cocktailCatalog");
        this.uiContainerCoPopDrink = document.getElementById("cocktailPoDrink");
        this.cocktail;
    }
    populateUI(data) {
        this.uiContainerCoCatalog.innerHTML += `
        <div class="col-12">
            <h2 class="co-catalog__title cocktail__h2">Catalog on request</h2>
        </div>
        `
        data.drinks.forEach((elem, index) => {
            this.uiContainerCoCatalog.innerHTML += `
            <div class="col-3 col-lg-4 col-sm-6 col-vsm-12 co-catalog__item">
                <div class="co-catalog__visibility-part visibility-part">
                    <div class="co-catalog__image-area">
                        <img src="${elem.strDrinkThumb}" alt="${elem.strDrink}"
                            class="visibility-part__img">
                        <div class="co-catalog__hover-info hover-info">
                            <div class="hover-info__item">
                                <svg class="hover-info__bottle-icon hover-info__icon" viewBox="0 0 497.2 497.2"
                                    style="enable-background:new 0 0 497.2 497.2;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path
                                                d="M277.8,134.4V6.8h-0.4c0-4-3.2-6.8-6.8-6.8h-44.4c-4,0-6.8,3.2-6.8,6.8v128c-44,15.2-47.2,63.2-46,72.8V396v0.4v0.4v58.4
                                        c0,23.2,18.8,42,42,42h66.4c23.2,0,42-18.8,42-42v-248C325,197.6,321.8,149.6,277.8,134.4z M233,13.6h30.4v18.8H233V13.6z
                                        M281.4,483.2H215c-10.4,0-19.6-6-24.4-14.4h115.2C301,477.2,291.8,483.2,281.4,483.2z M309.4,454.8H187v-51.6h122.4V454.8z
                                        M309.4,389.2H187V251.6h122.4V389.2z M309.4,205.6c0,0.4,0,0.8,0,1.6V238H187v-30.8c0-0.4,0-0.8,0-1.2c0-0.4-1.6-48,40.8-59.2
                                        c3.2-0.8,5.2-3.6,5.2-6.8V46.4h30.4V140c0,3.2,2,6,5.2,6.8C311,158,309.8,205.2,309.4,205.6z" />
                                        </g>
                                    </g>
                                </svg>
                                <p class="hover-info__text-alcko hover-info__text">
                                    ${elem.strAlcoholic}
                                </p>
                            </div>
                            <div class="hover-info__item">
                                <svg class="hover-info__glass-icon hover-info__icon"
                                    viewBox="0 0 512.096 512.096" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path
                                            d="m416.437 261.902c0-18.514-4.024-36.322-11.962-52.928-15.537-32.507-17.875-68.606-6.583-101.648 2.313-6.769 5.954-13.47 1.315-19.957-2.335-3.265-6.126-5.214-10.143-5.214h-62.113l4.99-24.268c.769-3.738 2.931-6.976 6.087-9.119l51.514-34.966c3.427-2.326 4.32-6.99 1.994-10.417-2.326-3.427-6.99-4.32-10.417-1.994l-51.515 34.966c-6.408 4.35-10.795 10.923-12.355 18.509l-5.611 27.289h-76.749l37.695-37.628c2.25-2.236 3.501-5.339 3.435-8.515-.066-3.165-1.442-6.202-3.77-8.329-41.667-38.118-105.635-36.706-145.631 3.215-.003.003-.005.006-.008.008-.001.001-.001.001-.002.002s-.002.002-.003.003c-39.992 39.93-41.4 103.784-3.184 145.398 2.132 2.305 5.162 3.666 8.311 3.731.081.002.161.002.242.002 3.075 0 6.071-1.231 8.261-3.409l49.001-48.909c5.28 27.417 1.7 56.152-10.535 82.527-2.894 6.239-5.273 12.759-7.073 19.381-1.086 3.997 1.274 8.118 5.271 9.204 3.998 1.084 8.118-1.274 9.204-5.271 1.578-5.808 3.666-11.528 6.205-17.002 15.644-33.723 18.522-70.979 8.281-105.513-1.007-3.395-3.376-10.411-4.571-13.897 2.912-.703 109.402.738 112.535 0l-11.651 56.665c-7.811 3.703-14.741 7.215-24.15 9.438-11.775 2.782-24.044 2.736-37.505-.137-3.409-.728-6.991.006-9.832 2.015-2.839 2.006-4.726 5.135-5.176 8.584-2.208 16.881-7.029 33.422-14.328 49.166-5.69 12.284-8.575 25.413-8.575 39.022 0 51.634 42.415 93.641 94.55 93.641s94.55-42.007 94.55-93.641c0-14.006-3.04-27.462-9.034-39.997-1.835-3.835-3.545-7.775-5.082-11.71-1.507-3.859-5.858-5.767-9.714-4.257-3.858 1.507-5.765 5.856-4.257 9.714 1.671 4.278 3.529 8.56 5.522 12.726 5.021 10.497 7.566 21.776 7.566 33.524 0 43.362-35.686 78.641-79.55 78.641s-79.55-35.278-79.55-78.641c0-11.417 2.417-22.424 7.184-32.715 7.557-16.299 12.673-33.4 15.224-50.871 14.516 2.763 28.449 2.607 41.453-.464 6.477-1.527 11.927-3.563 16.945-5.751l-21.063 102.436c-.834 4.058 1.778 8.022 5.835 8.857.51.104 1.018.155 1.519.155 3.485 0 6.609-2.443 7.338-5.991l23.283-113.237c6.112-2.595 12.718-4.782 21.296-5.935 4.796-.642 9.717-.888 14.656-.737.339 7.652 1.18 15.35 2.503 22.915.713 4.081 4.597 6.814 8.68 6.096 4.08-.713 6.81-4.6 6.096-8.68-1.335-7.634-2.133-15.414-2.373-23.121-.202-6.532-5.29-11.729-11.834-12.091-6.629-.365-13.265-.113-19.722.751-5.964.802-11.105 2.025-15.741 3.486l10.251-49.855h61.649l-1.818 5.321c-12.568 36.778-9.996 76.897 7.245 112.967 6.964 14.57 10.495 30.202 10.495 46.459 0 59.906-49.143 108.644-109.548 108.644-28.545 0-55.57-10.828-76.097-30.49-20.459-19.598-32.311-45.882-33.373-74.011-.156-4.139-3.61-7.343-7.778-7.212-4.139.157-7.368 3.639-7.211 7.778 1.209 32.041 14.7 61.971 37.986 84.277 17.849 17.097 40.018 28.309 63.97 32.639v81.729c0 1.332-.739 2.531-1.928 3.129l-43.644 21.937c-4.786 2.4-7.267 7.715-6.034 12.925s5.833 8.85 11.186 8.85h125.84c5.358 0 9.962-3.641 11.195-8.853 1.233-5.208-1.248-10.522-6.028-12.919l-43.651-21.936c-1.194-.602-1.936-1.803-1.936-3.133v-81.735c57.974-10.544 102.05-61.064 102.05-121.618zm-284.29-214.87 46.933 46.837.483 1.431-67.146-7.532c2.909-14.648 9.494-28.704 19.73-40.736zm-.011 116.493c-14.943-17.563-22.036-39.311-21.409-60.853l74.054 8.307zm56.44-81.37-45.811-45.717c12.062-10.218 26.152-16.79 40.835-19.69l7.364 65.408h-2.388zm25.08 0h-7.597l-7.553-67.09c21.58-.627 43.368 6.446 60.968 21.353zm126.387 414.941h-96.306l30.458-15.309c6.286-3.16 10.191-9.495 10.191-16.531v-79.94c2.489.147 4.99.229 7.502.229 2.518 0 5.016-.083 7.498-.23v79.941c0 7.028 3.902 13.36 10.192 16.531z" />
                                    </g>
                                </svg>
                                <p class="hover-info__text">
                                    <span class="hover-info__span">Glass type |</span>
                                    ${elem.strGlass}
                                </p>
                            </div>
                            <div class="hover-info__btn-block">
                                <button id="openBtnRecipe${elem.idDrink}" class="hover-info__btn recipe-btn">see recipe</button>
                            </div>
                        </div>
                    </div>
                    <h3 class="visibility-part__name">${elem.strDrink}</h3>
                </div>
                <div class="co-recipe" id="coRecipeContainer${elem.idDrink}">
                    <div class="co-recipe__container">
                        <h4 class="co-recipe__name">${elem.strDrink}</h4>
                        <div class="co-recipe__info-container">
                            <img src="${elem.strDrinkThumb}" alt="${elem.strDrink}" class="co-recipe__img">
                            <div class="co-recipe__info-block">
                                <div class="co-recipe__ing-block">
                                    <h5 class="co-recipe__title">INGREDIENTS</h5>
                                    <ul class="co-recipe__ing-list" id="CoRecipeIng${elem.idDrink}">
                                    </ul>
                                </div>
                                <div class="co-recipe__instruction-block">
                                    <h5 class="co-recipe__title">INSTRUCTIONS</h5>
                                    <p class="co-recipe__instruction">${elem.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                        <button id="closeBtnRecipe${elem.idDrink}" class="co-recipe__close-btn"></button>
                    </div>
                </div>
            </div>
            `;
            this.populateIngList(elem);
        })
    }
    clearUI() {
        this.uiContainerCoCatalog.innerHTML = "";
    }
    populateIngList(data) {
        const uiContainerRecipe = document.getElementById(`CoRecipeIng${data.idDrink}`);
        for (let i = 1; i < 16; i++) {
            // console.log(data[`strIngredient${i}`], uiContainerRecipe, i);
            if (data[`strIngredient${i}`] === null) return;
            if (data[`strMeasure${i}`] === null) {
                uiContainerRecipe.innerHTML += `
                <li class="co-recipe__ing">${data[`strIngredient${i}`]}
                </li>
                `;
                continue;
            }
            uiContainerRecipe.innerHTML += `
                <li class="co-recipe__ing">
                    <span class="co-recipe__ing-qty">
                        ${data[`strMeasure${i}`]}
                    </span>${data[`strIngredient${i}`]}
                </li>
            `;
        }
    }
}

export default CoCatalogHtml;