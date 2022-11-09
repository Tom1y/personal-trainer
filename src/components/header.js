import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="main" id="oMeni">
      <h1 className="quote">
        "Izzivi nas navdihujejo, zato je potrebno biti na njih dobro
        pripravljen."
      </h1>
      <div className="oMeni">
        <div>
          <h2>Nekaj besed o meni</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim
            in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
            cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
            eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
            porttitor, facilisis luctus, metus
          </p>
          <Link to="/jaz">
            <button className="main-btn">O meni</button>
          </Link>
        </div>
        <img
          src="./images/arnold.jpg"
          alt="fit oseba"
          className="main-img"
        ></img>
      </div>
    </div>
  );
}
