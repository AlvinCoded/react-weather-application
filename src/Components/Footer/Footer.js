import {React, useState, useEffect} from "react";
import "./Footer.css";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    function handleColorModeChange() {
        setIsDarkMode(!isDarkMode);
        console.log('switch touched!');
    }
    useEffect(() => {
    document.body.classList.add(isDarkMode ? 'dark-preview' : 'white-preview');
    document.body.classList.remove(isDarkMode ? 'white-preview' : 'dark-preview');
  }, [isDarkMode]);
  return (
    <div className="Footer">
      <footer>
        <div>
          <a href="https://linkedin.com/in/alvin-panford" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/AlvinCoded" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <small>Built and Designed by Alvin Panford.</small>
      </footer>
      <div className="switch-container">
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            <label className="switch btn-color-mode-switch">
                <input type="checkbox" name="color_mode" id="color_mode" value="1" onChange={handleColorModeChange} checked={isDarkMode} />
                <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
            </label>
            <i className="fa fa-moon-o" aria-hidden="true"></i>
        </div>
    </div>
  );
}
