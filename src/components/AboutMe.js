import React from "react";
import "./AboutMe.css";

export default function Omeni() {
  return (
    <div className="AboutMe">
      <div className="aboutMe-background">
        <div>
          <h1>O meni</h1>
          <p>
            Nikoli nisem bil dober športnik. Če sem popolnoma iskren, nikoli
            nisem niti maral športne vzgoje v šoli in verjetno sem bil eden
            najslabših nogometašev v zgodovini NK Središče ob Dravi. Edino, kar
            me je zanimalo, so bile borilne veščine. Zato sem v najstniških
            letih začel trenirati aikido, kickbox in tajski boks, ampak tudi tam
            sem bil čisto povprečen. Če bi mi nekdo takrat rekel da bom osebni
            trener, bi ga vprašal po zdravju.
          </p>
        </div>
        <img src="./images/blaz3.jpg" alt="blaz" className="aboutMe-img"></img>
      </div>

      <p>
        Nato pa sem se pri 19. letih zaradi nizke samozavesti in slabe
        samopodobe odločil, da bom pričel trenirati v fitnesu in se tako prvič
        srečal z bodybuildingom – to pa me je popolnoma prevzelo. Ure in ure sem
        preživel za knjigami in videi o treningih, anatomiji, biomehaniki,
        prehrani in vse to preizkušal na sebi v fitnesu. Po končanem študiju sem
        opravil še vrsto tečajev za masaže in delal kot maser. Svoje znanje o
        treningu in prehrani sem leta 2021 še formaliziral z mednarodno IFPA
        licenco za osebnega trenerja in se takoj zaposlil kot osebni trener.
        Skozi delo z več kot X strankami sem pridobil neprecenljive praktične
        izkušnje.
      </p>
      <br />
      <p>
        Svoje znanje še naprej nadgrajujem s številnimi nadaljevalnimi tečaji in
        seminarji.
      </p>
      <br />
      <p>
        Trdno sem prepričan, da čisto vsak lahko doseže svoje fitnes cilje. Vse,
        kar potrebuješ, je volja in ustrezno vodstvo. Za prvo moraš poskrbeti
        sam, za drugo pa sem tukaj jaz.
      </p>

      <h2>Izobraževanja</h2>
      <div className="education">
        <div className="education-card">
          <h4 className="fitnes-list">Fitnes:</h4>
          <ul className="list">
            <li>IFPA mednarodno licenciran osebni trener</li>
            <li>IFPA specialist športne prehrane</li>
            <li>FemFit pred in po po-porodna vadba</li>
            <li>
              Clean health Fitness institute Dr. Layne Norton's Science of
              Nutrition
            </li>
            <li>
              Clean health Fitness institute Dr. Layne Norton's Advanced
              Nutrition for Fat Loss
            </li>
          </ul>
          <img
            src="./images/massage1.jpg"
            alt="trening"
            className="education-img"
          ></img>
        </div>
        <div className="education-card">
          <h4 className="fitnes-list">Masaže:</h4>
          <ul className="list">
            <li>Tečaj klasične masaže</li>
            <li>Tečaj športne masaže</li>
            <li>Tečaj ročne limfne drenaže po dr. Vodnarju</li>
            <li>Deep tissue in Trigger point masaža</li>
          </ul>
          <img
            src="./images/massage2.jpg"
            alt="trening"
            className="education-img"
          ></img>
        </div>
      </div>
    </div>
  );
}
