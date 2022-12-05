import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="main" id="oMeni">
      <div className="quote-background">
        <h1 className="quote">
          "Trdno sem prepričan, da čisto vsak lahko doseže svoje fitnes cilje.
          Vse, kar potrebuješ, je volja in ustrezno vodstvo. Za prvo moraš
          poskrbeti sam, za drugo pa sem tukaj jaz."
        </h1>
      </div>
      <div className="oMeni">
        <div className="opis">
          <h2>Nekaj besed o meni</h2>
          <p>
            Nikoli nisem bil dober športnik. Če sem popolnoma iskren, nikoli
            nisem niti maral športne vzgoje v šoli in verjetno sem bil eden
            najslabših nogometašev v zgodovini NK Središče ob Dravi. Edino, kar
            me je zanimalo, so bile borilne veščine. Zato sem v najstniških
            letih začel trenirati aikido, kickbox in tajski boks, ampak tudi tam
            sem bil čisto povprečen. Če bi mi nekdo takrat rekel da bom osebni
            trener, bi ga vprašal po zdravju.
          </p>
          <p>
            Nato pa sem se pri 19. letih zaradi nizke samozavesti in slabe
            samopodobe odločil, da bom pričel trenirati v fitnesu in se tako
            prvič srečal z bodybuildingom – to pa me je popolnoma prevzelo...
          </p>

          <Link to="/jaz">
            <button className="main-btn">Preberi si več o meni</button>
          </Link>
        </div>
        <img
          src="./images/blaz2.jpg"
          alt="fit oseba"
          className="main-img"
        ></img>
      </div>
    </div>
  );
}
