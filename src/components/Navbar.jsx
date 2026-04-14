import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="apple-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          TuIT Store
        </Link>
        <Link to="/about-us">Giới thiệu</Link>
        <Link to="/">Trang chủ</Link>

        <div className="nav-search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="nav-search-input"
          />
        </div>

        <span className="nav-icon">🛍️</span>
      </div>
    </nav>
  );
};

export default Navbar;
