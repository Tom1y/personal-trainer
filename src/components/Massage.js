import React from "react";
import "./Massage.css";
import { Link } from "react-router-dom";

export default function Massage() {
  return (
    <div className="massage-backgorund">
      <div className="massage">
        <div className="massage-card">
          <h2>Masaze</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic
            enim incidunt, voluptas porro rerum minima a cum pariatur officiis
            non. Repudiandae nostrum ut, porro odit aspernatur incidunt voluptas
            enim.
          </p>
          <Link to="/masaze">
            <button className="massage-btn">Vec o masazah</button>
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
