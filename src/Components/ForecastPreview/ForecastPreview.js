import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return <div className="hour">{hour}:00</div>;
  }
  function icon() {
    return <WeatherIcon code={props.data.weather[0].icon} />;
  }

  function temperatureMax() {
    let temperature = Math.round(props.data.main.temp_max);
    return <strong>{temperature}°</strong>;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.main.temp_min);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastPreview col">
      {hours()}
      {icon()}
      {temperatureMax()}/{temperatureMin()}
    </div>
  );
}
