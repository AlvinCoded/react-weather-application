import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Footer from "../Footer/Footer";
import background from "../images/react-logo.png";
// import logo from "./images/react-logo.png";

// let background = {
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: `url(${require("./images/background/10n@2x.png")} )`,
// };

export default function App() {
  let imageUrl = background;

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: '20rem'
      }}
    >
      <div className="container">
        <div className="weather-page">
          <div className="weather-app">
            <Header />
            <Weather city="accra" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
