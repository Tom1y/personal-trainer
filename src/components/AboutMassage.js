import React from "react";
import "./AboutMassage.css";

export default function AboutMassage() {
  return (
    <div className="aboutMassage">
      <div className="massage-background-white">
        <h2>Masaže</h2>
        <h3>Delna Klasična masaža:</h3>
        <ul>
          <li>Klasična, srednje močna sprostitvena masaža</li>
          <li>
            Cilj masaže je sproščanje mišičnega in živčnega sistema, izboljšanje
            prekrvavitve in limfnega sistema
          </li>
          <li>Primerna za vse</li>
          <li>Stranka se sama odloči ali se masira hrbet ali noge</li>
          <li>Trajanje 30 minut</li>
        </ul>
        <p>
          Cena = <b>30€</b>
        </p>
      </div>
      <div className="massage-background-black">
        <h3>Klasična masaža celega telesa:</h3>
        <ul>
          <li>Klasična, srednje močna sprostitvena masaža</li>
          <li>
            Cilj masaže je sproščanje mišičnega in živčnega sistema, izboljšanje
            prekrvavitve in limfnega sistema
          </li>
          <li>Primerna za vse</li>
          <li>Masaža hrbta in nog</li>
          <li>Trajanje 40 minut</li>
        </ul>
        <p>
          Cena = <b>40€</b>
        </p>
      </div>
      <div className="massage-background-white">
        <h3>Športna masaža</h3>
        <ul>
          <li>
            Športna masaža, prilagojena posamezniku in specifikam njegovega
            športa
          </li>
          <li>
            Cilj masaže je zmanjšanje možnosti za poškodbe, izboljšanje priprave
            in regeneracije
          </li>
          <li>Namenjena vsem, ki se kakor koli ukvarjajo s športom</li>
          <li>Trajanje 40 minut</li>
        </ul>
        <p>
          Cena = <b>40€</b>
        </p>
      </div>
      <div className="massage-background-black">
        <h3>Terapevtska »Deep Tissue« protibolečinska masaža</h3>
        <ul>
          <li>
            Zmerno močna terapevtska in protibolečinska masaža globokih tkiv
          </li>
          <li>Cilj masaže je odpravljanje bolečin in zategnjenosti mišic</li>
          <li>Namenjena ljudem z bolečinami in mišičnimi vozlji</li>
          <li>Trajanje 30-40 minut</li>
        </ul>
        <p>
          Cena = <b>40€</b>
        </p>
      </div>
      <div className="massage-background-white">
        <h3>Limfna drenaža po metodi Vodder</h3>
        <ul>
          <li>
            Nežna ročna tehnika, katere namen je spodbujanje limfnega sistema
          </li>
          <li>
            Cilj limfne drenaže je pospešiti odvajanje odpadnih snovi in odvečne
            tekočine po telesu
          </li>
          <li>
            Namenjena ljudem po poškodbah in operacijah (za zmanjšanje oteklin),
            ljudem ki imajo težave z zatekanjem nog, celulitom,…
          </li>
          <li>Trajanje 30-40 minut</li>
        </ul>
        <p>
          Cena = <b>30€</b>
        </p>
      </div>
      <div className="massage-background-black">
        <h3>Masaža na dom</h3>
        <ul>
          <li>Masaža na dom po dogovoru</li>
        </ul>
        <p>
          Cena = <b>50€</b>
        </p>
      </div>
    </div>
  );
}
