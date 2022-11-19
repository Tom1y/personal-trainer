import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <h2>Kontaktiraj me!</h2>
        <p>
          Če te zanima kaj več, ali bi se rad pridružil moji ekipi, me
          kontaktiraj s klikom spodaj.
        </p>
        <button>Piši mi</button>
      </div>
    </div>
  );
}
