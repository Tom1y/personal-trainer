import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="main" id="oMeni">
      <h1 className="quote">
        "Izzivi nas navdihujejo, zato je potrebno biti na njih dobro
        pripravljen."
      </h1>
      <div className="oMeni">
        <div>
          <h2>Nekaj besed o meni</h2>
          <p>
            Moje ime je Blaž Podgoršek. Star sem 27 let. Z fitnesom se ukvarjam
            ze x let
          </p>
          <p>
            Trdno sem prepričan, da čisto vsak lahko doseže svoje fitnes cilje.
            Vse, kar potrebuješ, je volja in ustrezno vodstvo. Za prvo moraš
            poskrbeti sam, za drugo pa sem tukaj jaz.
          </p>
          <Link to="/jaz">
            <button className="main-btn">Preberi si več o meni</button>
          </Link>
        </div>
        <img
          src="./images/arnold.jpg"
          alt="fit oseba"
          className="main-img"
        ></img>
      </div>
    </div>
  );
}
