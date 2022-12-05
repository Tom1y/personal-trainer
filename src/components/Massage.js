import React from "react";
import "./Massage.css";
import { Link } from "react-router-dom";

export default function Massage() {
  return (
    <div className="massage-backgorund">
      <div className="massage">
        <div className="massage-card">
          <h2>Masaže</h2>
          <p>
            Zraven osebnih treningov, vam lahko ponudim tudi več vrst odličnih
            masaž.
          </p>
          <p>
            S klikom na spodnji gumb preverite, katere masaže vam ponujam in si
            rezervirajte termin.
          </p>
          <Link to="/masaze">
            <button className="massage-btn">Ponudba masaž</button>
          </Link>
        </div>
        <img
          src="./images/blaz6.jpg"
          alt="massage"
          className="massage-img"
        ></img>
      </div>
    </div>
  );
}
