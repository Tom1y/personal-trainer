import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="kontakt">
      <div className="footer-info">
        <h2>Kontaktiraj me!</h2>
        <p>
          Če te zanima kaj več, ali bi se rad pridružil moji ekipi, me
          kontaktiraj s klikom spodaj.
        </p>
        <button>
          <a href="mailto:horvat.tomi1@gmail.com">Kontakt</a>
        </button>
      </div>
    </div>
  );
}
