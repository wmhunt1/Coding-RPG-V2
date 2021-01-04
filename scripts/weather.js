function displayWeatherInfo() {

    var city = "Boston"
    // This line grabs the input from the textbox
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(response.city.name + ", " + response.city.country)
        console.log("Weather: " + response.list[0].weather[0].main)
    });
}