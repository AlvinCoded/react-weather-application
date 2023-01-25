import React, { useState, useEffect } from "react";
import "./WeatherTemperature.css";


export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState(props.unit);
  let [temperature, setTemperature] = useState(props.temperature);
  let setCelsius = props.setCelsius;
  let setFahrenheit = props.setFahrenheit;

  useEffect(() => {
    setTemperature(props.temperature);
  }, [props.temperature]);

  function getFahrenheit(event) {
    event.preventDefault();
/* Converting the temperature from Celsius to Fahrenheit. */
    temperature = (temperature * 9) / 5 + 32;
    setTemperature(temperature);
    setUnit("imperial");
    setFahrenheit(event);
  }

  function getCelsius(event) {
    event.preventDefault();
/* Converting the temperature from Fahrenheit to Celsius. */
    temperature = ((temperature - 32) * 5) / 9;
    setTemperature(temperature);
    setUnit("metric");
    setCelsius(event);
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(temperature)}</span>
        <span className="units">
          <button href="#" className="active">
            °C
          </button>
          |
          <button href="#" onClick={getFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else if (unit === "imperial") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(temperature)}</span>
        <span className="units">
          <button href="#" onClick={getCelsius}>
            °C
          </button>{" "}
          |
          <button href="#" className="active">
            °F
          </button>
        </span>
      </div>
    );
  }
}
