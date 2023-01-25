import React, { useState, useEffect } from "react";
import ForecastPreview from "../ForecastPreview/ForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let unit = props.unit;

  useEffect(() => {
    setLoaded(false);
  }, [props.city, props.unit]);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function checkForecast() {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    let link = "https://api.openweathermap.org/data/2.5/forecast?";
    let apiUrl = `${link}q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>3-hour Forecast</p>
                </div>
              </div>
              <div className="row">
                {forecast.list.slice(0, 5).map(function (forecastItem, index) {
                  return <ForecastPreview data={forecastItem} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    checkForecast();
    return null;
  }
}
