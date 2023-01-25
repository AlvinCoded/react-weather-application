import React from "react";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import "./DailyForecastPreview.css";

export default function DailyForecastPreview(props) {
  let days = props.days;
  let code = props.icons;
  let maxTemp = props.maxTemp;
  let minTemp = props.minTemp;
  return (
    <div className="DailyForecastPreview col">
      {days}
      <WeatherIcon code={code} />
      <span className="temperature">
        <strong>{maxTemp}°</strong>/{minTemp}°
      </span>
    </div>
  );
}
