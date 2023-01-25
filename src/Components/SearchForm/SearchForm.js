import React, { useState } from "react";
import axios from "axios";

function SearchForm(props) {
  let [city, setCity] = useState();
  let showTemperature = props.showTemperature;
  let searchByCity = props.searchByCity;
  let unit = props.unit;

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      searchByCity(city);
    } else {
      createPopup('Please enter a city!');
  
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
  }

  function changeCity(event) {
    setCity(event.target.value.trim());
  }

  function currentPosition(position) {
/* A way to hide the API key from the public. */
    const apiKey = '895284fb2d2c50a520ea537456963d9c';
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let url = "https://api.openweathermap.org/data/2.5/weather?";

    let apiUrl = `${url}lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="search-it">
            <div id="search">
              <input type="search" id="search-box" placeholder="Search Location..."  autoFocus="on" autoComplete="off" onChange={changeCity}/>
              <button type="submit" id="button"><i className="fa fa-search"></i></button>
              <div className="spinner"><i className="fa fa-spinner"></i></div>
            </div>
            <i
              className="fas fa-map-marker-alt"
              onClick={showCurrentLocation}
            ></i>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
