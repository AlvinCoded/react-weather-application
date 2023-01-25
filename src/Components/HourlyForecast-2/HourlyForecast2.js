import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./HourlyForecast2.css";

function HourlyForecast2(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return <div className="hour">{hour}:00</div>;
  }
  function icon() {
    return <WeatherIcon code={props.data.weather[0].icon} />;
  }

  function temperature() {
    let temperature = Math.round(props.data.temp);
    return (
      <div className="temperature">
        <strong>{temperature}°</strong>
      </div>
    );
  }

  return (
    <div className="HourlyForecast2 col">
      {hours()}
      {icon()}
      {temperature()}
    </div>
  );
}

export default HourlyForecast2;
