class FetchIngredientById {
    async getCurrent(value) {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${value}`
        );

        const data = await response.json();

        // console.log(data);

        return data;
    }
}

export default FetchIngredientById;