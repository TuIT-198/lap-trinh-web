import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="apple-nav">
      <div className="nav-container">
        <span className="nav-logo"></span>
        <a href="#store">Cửa hàng</a>
        <a href="#mac">Mac</a>
        <a href="#ipad">iPad</a>
        <a href="#iphone">iPhone</a>
        <a href="#watch">Watch</a>
        <a href="#airpods">AirPods</a>
        <span className="nav-icon">🔍</span>
        <span className="nav-icon">🛍️</span>
      </div>
    </nav>
  );
};

export default Navbar;
