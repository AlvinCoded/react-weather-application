import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./ForecastPreview2.css";

export default function ForecastPreview2(props) {
  function days() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return <div className="days">{day}</div>;
  }

  function icon() {
    return <WeatherIcon code={props.data.weather[0].icon} />;
  }

  function temperatureMax() {
    let temperature = Math.round(props.data.temp.max);
    return <strong>{temperature}°</strong>;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div className="ForecastPreview2 col">
      {days()}
      {icon()}
      {temperatureMax()}/{temperatureMin()}
    </div>
  );
}
