import React from "react";
import "./Header.css";
import logo from "../images/react-logo.png";

export default function Header() {
  return (
    <div className="Header row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <img src={logo} alt="logo react" />
            <h1>Weather App</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
