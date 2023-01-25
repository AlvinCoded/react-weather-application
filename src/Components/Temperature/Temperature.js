import React from "react";
import CityTime from "../CityTime/CityTime";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import "./Temperature.css";

export default function Temperature(props) {

  if (props.details) {
    return (
      <div className="Temperature">
        <div className="row">
          {/* Left Side */}
          <div className="col">
            <CityTime
              city={props.details.city}
              date={props.details.date}
              country={props.details.country}
            />
          </div>
          {/* Right Side */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                {/* upper part */}
                <div className="row">
                  <div className="col temperature-section">
                    <div className="clearfix">
                      <div className="float-left">
                        <WeatherIcon code={props.details.icon} />
                      </div>
                      <WeatherTemperature
                        temperature={props.details.temperature}
                        unit={props.unit}
                        setCelsius={props.setCelsius}
                        setFahrenheit={props.setFahrenheit}
                      />
                    </div>
                  </div>
                </div>

                {/* lower part */}
                <div className="row">
                  <div className="col">
                    <p className="description">{props.details.description}</p>
                    <ul className="weather">
                      <li>
                        Cloudiness:{" "}
                        <span>{Math.round(props.details.cloudiness)}</span>%
                      </li>
                      <li>
                        Feels like:{" "}
                        <span>{Math.round(props.details.feelsLike)}</span>°
                      </li>
                      <li>
                        Humidity:{" "}
                        <span>{Math.round(props.details.humidity)}</span>%
                      </li>
                      <li>
                        Wind: <span>{Math.round(props.details.wind)}</span>
                        m/s
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
