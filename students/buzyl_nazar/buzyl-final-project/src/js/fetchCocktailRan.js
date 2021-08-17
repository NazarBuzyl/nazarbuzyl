class FetchCocktailRan {
    async getCurrent() {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        );

        const data = await response.json();

        // console.log(data);

        return data;
    }
}

export default FetchCocktailRan;