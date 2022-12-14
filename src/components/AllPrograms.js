import React from "react";
import { Link } from "react-router-dom";
import "./AllPrograms.css";

export default function VsiProgrami() {
  return (
    <div className="AllPrograms">
      <div className="AllProgramsNavigation">
        <ul>
          <li>
            <a href="#trening1">Trening 3x tedensko</a>
          </li>
          <li>
            <a href="#trening2">Trening 2x tedensko</a>
          </li>
          <li>
            <a href="#trening3">Trening v paru 3x tedensko</a>
          </li>
          <li>
            <a href="#trening4">Trening v paru 2x tedensko</a>
          </li>
          <li>
            <a href="#trening5">Online sodelovanje</a>
          </li>
          <li>
            <a href="#trening6">Hibridni program</a>
          </li>
          <li>
            <a href="#trening7">Posamezna ura treninga</a>
          </li>
          <li>
            <a href="#trening8">12-tedenski individualizirani trening</a>
          </li>
        </ul>
      </div>
      <div className="AllPrograms-layout">
        <div className="AllPrograms-card" id="trening1">
          <h2>Trening 3x tedensko</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen prvi posvet</li>
            <li>3x tedensko trening pod vodstvom osebnega trenerja</li>
            <li>Individualiziran program treninga</li>
            <li>Prehranski coaching</li>
            <li>24/7 podpora preko aplikacije Wapp</li>
            <li>*veljavnost 4 tedne</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>300€</span>
          </p>
          <p>
            Treningi potekajo v Cleverfit Maribor; najsodobnejšem fitnesu v
            Mariboru.
          </p>
          <p>
            <span>Fitnes karta ni všteta v ceno.</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening1.jpg"
              alt="trening 3x tedensko"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening2">
          <h2>Trening 2x tedensko</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen prvi posvet</li>
            <li>2x tedensko trening pod vodstvom osebnega trenerja</li>
            <li>Individualiziran program treninga</li>
            <li>Prehranski coaching</li>
            <li>24/7 podpora preko aplikacije Wapp</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>230€</span>
          </p>
          <p>
            Treningi potekajo v Cleverfit Maribor; najsodobnejšem fitnesu v
            Mariboru.
          </p>
          <p>
            <span>Fitnes karta ni všteta v ceno.</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening2.jpg"
              alt="trening 2x tedensko"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening3">
          <h2>Trening v paru 3x tedensko</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen prvi posvet</li>
            <li>3x tedensko trening v paru pod vodstvom osebnega trenerja</li>
            <li>Individualiziran program treninga</li>
            <li>Prehranski coaching</li>
            <li>24/7 podpora preko aplikacije Wapp</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>380€</span>
          </p>
          <p>
            Treningi potekajo v Cleverfit Maribor; najsodobnejšem fitnesu v
            Mariboru.
          </p>
          <p>
            <span>Fitnes karta ni všteta v ceno.</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening3.jpg"
              alt="trening v paru"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening4">
          <h2>Trening v paru 2x tedensko</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen prvi posvet</li>
            <li>2x tedensko trening v paru pod vodstvom osebnega trenerja</li>
            <li>Individualiziran program treninga</li>
            <li>Prehranski coaching</li>
            <li>24/7 podpora preko aplikacije Wapp</li>
            <li>*veljavnost 4 tedne</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>320€</span>
          </p>
          <p>
            Treningi potekajo v Cleverfit Maribor; najsodobnejšem fitnesu v
            Mariboru.
          </p>
          <p>
            <span>Fitnes karta ni všteta v ceno.</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening4.jpg"
              alt="trening v paru"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening5">
          <h2>Online sodelovanje</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen prvi posvet</li>
            <li>Individualiziran program treninga</li>
            <li>Prehranski coaching</li>
            <li>24/7 podpora preko aplikacije Wapp</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>90€</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/background.jpg"
              alt="online sodelovanje"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening6">
          <h2>Hibridni program</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen prvi posvet</li>
            <li>1x tedensko trening pod vodstvom osebnega trenerja</li>
            <li>Individualiziran program treninga</li>
            <li>Prehranski coaching</li>
            <li>24/7 podpora preko aplikacije Wapp</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>150€</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening5.jpg"
              alt="hibridni program"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening7">
          <h2>Posamezna ura treninga</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>1x trening pod vodstvom osebnega trenerja</li>
            <li>Korekcija pri izvedbi vaj</li>
            <li>
              Svetovanje pri sestavi trening programa in programa prehrane
            </li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>35€</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening6.jpg"
              alt="posamezna ura treninga"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
        <div className="AllPrograms-card" id="trening8">
          <h2>12-tedenski individualiziran trening</h2>
          <h3>Paket zajema:</h3>
          <ul>
            <li>Brezplačen posvet</li>
            <li>Ocena trenutnega stanja</li>
            <li>12-tedenski individualiziran trening program</li>
          </ul>
          <br></br>
          <p>
            Cena paketa = <span>70€</span>
          </p>
          <Link to="/kontakt">
            <button className="allPrograms-button">Rezerviraj termin</button>
          </Link>
          <div className="allPrograms-background">
            <img
              src="./images/trening7.jpg"
              alt="posvet"
              className="AllPrograms-img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
