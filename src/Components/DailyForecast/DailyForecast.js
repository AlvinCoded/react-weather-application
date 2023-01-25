import React from "react";
import DailyForecastPreview from "../DailyForecastPreview/DailyForecastPreview";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let data = props.data; //array of 40 items, with forecast data every 3-hour

  function formatDay(timestamp) {
    let time = new Date(timestamp);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[time.getDay()];

    return day;
  }

  function frequent(number) {
    //let count = 0;
    let sortedNumber = number.sort();
    let start = number[0],
      item;
    for (let i = 0; i < sortedNumber.length; i++) {
      if (
        start === sortedNumber[i] ||
        sortedNumber[i] === sortedNumber[i + 1]
      ) {
        item = sortedNumber[i];
      }
    }
    return item;
  }

  //Getting the list of the next 5-Days
  let timeEvery3hour = [];
  let timeEveryDay = [];
  let time5days = [];

  for (let i = 0; i < data.length; i++) {
    timeEvery3hour.push(data[i].dt);
  }
  //console.log(timeEvery3hour);

  for (let i = 0; i < 5; i++) {
    timeEveryDay[i] = timeEvery3hour.splice(8);
    time5days.push(Math.max(...timeEvery3hour));
    timeEvery3hour = timeEveryDay[i];
  }
  // console.log(time5days);

  let newTime5days = [];
  for (let i = 0; i < 5; i++) {
    newTime5days.push(formatDay(time5days[i] * 1000));
  }
  //console.log(newTime5days);

  //Getting the icons for the next 5-days
  let iconEvery3hour = [];
  let iconsPerDay = [];
  let icon5days = [];

  for (let i = 0; i < data.length; i++) {
    iconEvery3hour.push(data[i].weather[0].icon);
  }
  // console.log(iconEvery3hour);

  for (let i = 0; i < 5; i++) {
    iconsPerDay[i] = iconEvery3hour.splice(8);
    icon5days.push(frequent(iconEvery3hour));
    iconEvery3hour = iconsPerDay[i];
  }
  //console.log(icon5days);

  //Maximum Temperature within 5-days
  let tempMax5days = [];
  let tempMaxDay = [];
  let tempMax = [];

  for (let i = 0; i < data.length; i++) {
    tempMax.push(data[i].main.temp_max);
  }

  for (let j = 0; j < 5; j++) {
    //console.log(tempMax);
    tempMaxDay[j] = tempMax.splice(8);
    //console.log(tempMaxDay[j]);
    //console.log(tempMax);
    tempMax5days.push(Math.round(Math.max(...tempMax)));
    //console.log(tempMax5days);
    tempMax = tempMaxDay[j];
  }
  // console.log(`Maximum temperature in 5-days: ${tempMax5days}`);

  //Minimum Temperature within 5-days
  let tempMin5days = [];
  let tempMinDay = [];
  let tempMin = [];

  for (let i = 0; i < data.length; i++) {
    tempMin.push(data[i].main.temp_min);
  }

  for (let j = 0; j < 5; j++) {
    //console.log(tempMin);
    tempMinDay[j] = tempMin.splice(8);
    //console.log(tempMinDay[j]);
    //console.log(tempMin);
    tempMin5days.push(Math.round(Math.min(...tempMin)));
    //console.log(tempMin5days);
    tempMin = tempMinDay[j];
  }
  // console.log(`Minimum temparature in 5-days: ${tempMin5days}`);

  return (
    <div className="DailyForecastPreview row">
      <DailyForecastPreview
        days={newTime5days[0]}
        icons={icon5days[0]}
        maxTemp={tempMax5days[0]}
        minTemp={tempMin5days[0]}
      />
      <DailyForecastPreview
        days={newTime5days[1]}
        icons={icon5days[1]}
        maxTemp={tempMax5days[1]}
        minTemp={tempMin5days[1]}
      />
      <DailyForecastPreview
        days={newTime5days[2]}
        icons={icon5days[2]}
        maxTemp={tempMax5days[2]}
        minTemp={tempMin5days[2]}
      />
      <DailyForecastPreview
        days={newTime5days[3]}
        icons={icon5days[3]}
        maxTemp={tempMax5days[3]}
        minTemp={tempMin5days[3]}
      />
      <DailyForecastPreview
        days={newTime5days[4]}
        icons={icon5days[4]}
        maxTemp={tempMax5days[4]}
        minTemp={tempMin5days[4]}
      />
    </div>
  );
}
