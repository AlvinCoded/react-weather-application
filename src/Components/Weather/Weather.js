import React, { useState } from "react";
import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
import Temperature from "../Temperature/Temperature";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import WeatherForecast2 from "../WeatherForecast-2/WeatherForecast2";
import Loading from "../Loading/Loading";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [unit, setUnit] = useState("metric");
  // let unit = "metric";
  let city = props.city;

  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function setCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      cloudiness: response.data.clouds.all,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function searchByCity(city) {
    const apiKey = '895284fb2d2c50a520ea537456963d9c';
    let url = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${url}q=${city}&appid=${apiKey}&units=${unit}`;

    // axios.get(apiUrl).then(showTemperature).catch(console.clear);
    axios
      .get(apiUrl)
      .then(showTemperature)
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
          // alert("🌏 Please make sure city name is entered correctly");
          createPopup('🌏 Please make sure city name is entered correctly');
  
          function createPopup(text) {
            let el = document.createElement('DIV');
            el.classList.add('popup-remove-frm-fav');
            el.innerHTML = text;
            document.body.appendChild(el);
            setTimeout(() => {
              el.remove();
            },5000);
          }
        }
      });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <SearchForm
              showTemperature={showTemperature}
              searchByCity={searchByCity}
              unit={unit}
            />
            <Temperature
              details={weatherData}
              unit={unit}
              setCelsius={setCelsius}
              setFahrenheit={setFahrenheit}
            />
            <WeatherForecast city={weatherData.city} unit={unit} />
            <WeatherForecast2 coord={weatherData.coord} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    searchByCity(city);
    return (
      <div className="Weather">
        
        <div className="row">
          <div className="col">
            <SearchForm
              showTemperature={showTemperature}
              searchByCity={searchByCity}
              unit={unit}
            />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}
