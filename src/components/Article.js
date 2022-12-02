import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

export default function Article() {
  return (
    <div className="Article">
      <div className="article-card">
        <h2>Zanimivosti</h2>
        <h3>Neka zanimiva tema</h3>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <Link to="/clanki">
          <button className="article-btn">Preberi vec</button>
        </Link>
      </div>
      <img src="/images/hrana.jpg" alt="prehrana" className="article-img"></img>
    </div>
  );
}
