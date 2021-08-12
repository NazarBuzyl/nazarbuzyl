class FetchAirPollution {
    async getCurrent(lat, lon) {
        const myKey = "735e51cf1b3946c9b78111ece9d6caae";
    
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${myKey}`,
        );
          
        const data = await response.json();
    
        // console.log(data);
    
        return data;
      }
}

export default FetchAirPollution;