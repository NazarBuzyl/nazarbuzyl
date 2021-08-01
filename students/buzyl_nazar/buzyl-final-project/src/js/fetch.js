class Fetch {
  async getCurrent(input) {
    const myKey = "735e51cf1b3946c9b78111ece9d6caae";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

export default Fetch;