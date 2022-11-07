import React from "react";
import "./Programi.css";

export default function Programi() {
  return (
    <div className="programi">
      <h2>Treniraj z mano</h2>
      <p className="programi-opis">
        Ponudim ti lahko individualne ali skupinske treninge, ter treninge za
        sportnike. Lahko izbiras tudi med on-line programi. Izbira programa je
        tvoja
      </p>
      <div className="programi-card">
        <img
          src="./images/madison.jpg"
          alt="joga"
          className="programi-img"
        ></img>
        <h3>Testiranje strukturnega ravnovesja</h3>
        <p>
          S testiranjem strukturnega ravnovesja ugotovimo neravnovesja med
          mišicami in posledično dobimo možnost izboljšanja le tega.
        </p>
        <button className="programi-btn">Vec o programih</button>
      </div>
      <div className="programi-card">
        <img
          src="./images/workout.jpg"
          alt="joga"
          className="programi-img"
        ></img>
        <h3>Osebni trening – 2 x tedensko</h3>
        <p>
          Osebni trening 2x tedensko s trenerjem v fitnesu. Paket zajema:
          začetni sestanek in priprava načrta za dosego cilja, individualni
          program vadbe, oblikovanje in svetovanje jedilnika skozi celotno
          obdobje sodelovanja, e-knjiga Kaj naj jem.
        </p>
        <button className="programi-btn">Vec o programih</button>
      </div>
      <div className="programi-card">
        <img
          src="./images/workout2.jpg"
          alt="joga"
          className="programi-img"
        ></img>
        <h3>Osebni trening – 3 x tedensko</h3>
        <p>
          Osebni trening s trenerjem 3x tedensko v fitnesu. Paket zajema:
          začetni sestanek in priprava načrta za dosego cilja, individualni
          program vadbe, oblikovanje in svetovanje jedilnika skozi celotno
          obdobje sodelovanja e-knjiga Kaj naj jem.
        </p>
        <button className="programi-btn">Vec o programih</button>
      </div>
    </div>
  );
}
