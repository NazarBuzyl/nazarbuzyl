class FetchCocktailById {
    async getCurrent(id) {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const data = await response.json();

        // console.log(data);

        return data;
    }
}

export default FetchCocktailById;