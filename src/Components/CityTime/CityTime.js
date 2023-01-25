import React from "react";
import "./CityTime.css";

export default function CityTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  let hour = props.date.getHours();

  let amPm = "";
  if (hour < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  if (hour < 10) {
    hour = `0${hour}`;
  } else if (hour >= 10 && hour <= 12) {
    hour = `${hour}`;
  } else if (hour > 12 && hour < 22) {
    hour = hour - 12;
    hour = `0${hour}`;
  } else {
    hour = hour - 12;
  }

  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div className="CityTime">
      <div className="col">
        <div className="card ">
          <div className="card-body ">
            <h2>
              {props.city}, {props.country}
            </h2>
            <ul className="datetime">
              <li id="last-update">Last updated:</li>
              <li id="day">{day}</li>
              <li id="date">
                {date} {month} {year}
              </li>
              <li>
                <span id="clock">
                  {hour}:{minute}
                </span>{" "}
                <span id="amPm">{amPm}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
