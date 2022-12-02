import React from "react";
import { Link } from "react-router-dom";
import "./Program.css";

export default function Programi() {
  return (
    <div className="programi" id="trening">
      <h2>Treniraj z mano</h2>
      <p className="programi-opis">
        Ponudim ti lahko individualne ali skupinske treninge, ter treninge za
        sportnike. Lahko izbiras tudi med on-line programi. Izbira programa je
        tvoja
      </p>
      <Link to="/programi">
        <button className="programi-btn">Seznam vseh programov</button>
      </Link>
      <div className="program-cards">
        <div className="programi-card">
          <img
            src="./images/trening1.jpg"
            alt="trening"
            className="programi-img"
          ></img>
          <h3>Trening 3x tedensko</h3>
          <p>
            Osebni trening s trenerjem 3x tedensko v fitnesu. Paket zajema:
            Brezplačen prvi posvet, individualiziran program treninga,
            prehranski coaching in 24/7 podporo preko aplikacije Wapp
          </p>
          <Link to="/programi">
            <button className="programi-btn">Vec o programih</button>
          </Link>
        </div>
        <div className="programi-card">
          <img
            src="./images/trening2.jpg"
            alt="trening"
            className="programi-img"
          ></img>
          <h3>Trening 2x tedensko</h3>
          <p>
            Osebni trening s trenerjem 2x tedensko v fitnesu. Paket zajema:
            Brezplačen prvi posvet, individualiziran program treninga,
            prehranski coaching in 24/7 podporo preko aplikacije Wapp
          </p>
          <Link to="/programi">
            <button className="programi-btn">Vec o programih</button>
          </Link>
        </div>
        <div className="programi-card">
          <img
            src="./images/trening3.jpg"
            alt="trening"
            className="programi-img"
          ></img>
          <h3>Trening v paru 3x tedensko</h3>
          <p>
            Osebni trening v paru s trenerjem 3x tedensko v fitnesu. Paket
            zajema: Brezplačen prvi posvet, individualiziran program treninga,
            prehranski coaching in 24/7 podporo preko aplikacije Wapp
          </p>
          <Link to="/programi">
            <button className="programi-btn">Vec o programih</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
