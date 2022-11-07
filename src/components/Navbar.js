import React from "react";
import "./Navbar.css";

export default function Navbar() {
  function toggler() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="./images/Logo(1).svg" alt="logo" className="logo-img"></img>
        <h3 className="navbar-title">Blaž Podgoršek</h3>
      </div>
      <div>
        <a href="#home" className="toggle-button" onClick={toggler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#home">O meni</a>
          </li>
          <li>
            <a href="#home">Treniraj z mano</a>
          </li>
          <li>
            <a href="#home">Masaže</a>
          </li>
          <li>
            <a href="#home">Članki</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
