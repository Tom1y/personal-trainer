import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  function toggler() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  }

  return (
    <>
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
              <Link to="/" onClick={toggler}>
                Domov
              </Link>
            </li>
            <li>
              <Link to="/jaz" onClick={toggler}>
                O meni{" "}
              </Link>
            </li>
            <li>
              <Link to="/programi" onClick={toggler}>
                Treniraj z mano
              </Link>
            </li>
            <li>
              <Link to="/masaze" onClick={toggler}>
                Masaže
              </Link>
            </li>
            {/* <li>
              <Link to="/clanki" onClick={toggler}>
                Članki
              </Link>
            </li> */}
            <li>
              <Link to="/kontakt" onClick={toggler}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
