import React, { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const apiKey = `643117d305e4aacd0326ef49eaebd406
`;

  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity(``);
        });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={getWeather}
        />

        {typeof weather.main != "undefined" ? (
          <div className="weather-container">
            <div className="location">
              <i class="fa-solid fa-city"></i>
              {weather.name} , {weather.sys.country}
            </div>
            <div className="temp">
              <i class="fa-solid fa-sun"></i>
              {Math.round(weather.main.temp * 1.8 + 32)}°F
            </div>
            <div className="weather">
              <i class="fa-solid fa-cloud"></i>
              {weather.weather[0].main}
            </div>
            <div className="wind">
              <i class="fa-solid fa-wind"></i>
              {weather.wind.speed} m/s
            </div>
          </div>
        ) : (
          <div className="weather-container">
            <h1>React Weather App</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
