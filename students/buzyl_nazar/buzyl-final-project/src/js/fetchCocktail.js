class FetchCocktail {
    async getCurrent(input) {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
        );

        const data = await response.json();

        // console.log(data);

        return data;
    }
}

export default FetchCocktail;