class FetchCity {
    async getCurrent() {

        const response = await fetch("https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city");

        const data = await response.json();

        console.log(data);

        return data;
    }
}

export default FetchCity;

// , {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a363042794mshc61dbcfa085f4dfp12d85djsn66a5a41f14bf",
//         "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com"
//     }
// }