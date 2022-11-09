import React from "react";
import "./Massage.css";
import { Link } from "react-router-dom";

export default function Massage() {
  return (
    <div className="massage">
      <h2>Masaze</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic enim
        incidunt, voluptas porro rerum minima a cum pariatur officiis non.
        Repudiandae nostrum ut, porro odit aspernatur incidunt voluptas enim.
      </p>
      <img
        src="./images/massage.jpg"
        alt="massage"
        className="massage-img"
      ></img>
      <Link to="/masaze">
        <button className="massage-btn">Vec o masazah</button>
      </Link>
    </div>
  );
}
