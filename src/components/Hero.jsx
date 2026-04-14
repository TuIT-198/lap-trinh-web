import React from "react";
import "./Hero.css";

const Hero = () => {
  // Hàm xử lý cuộn trang
  const scrollToProducts = () => {
    const element = document.getElementById("product-store");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title"> Đỉnh cao công nghệ </h1>
        <p className="hero-subtitle">
          Thiết kế tuyệt mỹ - Hiệu năng vượt trội.
        </p>
        <button className="hero-btn" onClick={scrollToProducts}>
          Mua ngay tại TuIT Store để nhận ưu đãi đặc biệt!
        </button>
      </div>
    </div>
  );
};

export default Hero;
