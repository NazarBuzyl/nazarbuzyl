class FetchCocktailByIng {
    async getCurrent(value) {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}

export default FetchCocktailByIng;