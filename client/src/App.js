import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const city = "Boston";
const currentWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";

function App() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    //getWeatherWithFetch();
    getWeatherWithAxios();
  }, []);

  // const getWeatherWithFetch = async () => {
  //   const response = await fetch(currentWeather);
  //   const jsonData = await response.json();
  //   setWeather(jsonData.list[0].weather[0].main);
  //   //this is correct but won't post it to {weather}
  //   console.log(jsonData.list[0].weather[0].main)
  // };

  const getWeatherWithAxios = async () => {
    const response = await axios.get(currentWeather);
    setWeather(response.data);
    console.log(response.data)
    //setWeather(response.data.list[0].weather[0].main)
    console.log(response.data.list[0].weather[0].main)
  };
  return (
    <div className="App">
      <h1>Coding RPG</h1>
      {/* {currentWeather} */}
      {/* {weather.data.list[0].weather[0].main} */}
      {/* {weather.data} */}
      {/* {weather} */}
    </div>
  );
}


export default App;
