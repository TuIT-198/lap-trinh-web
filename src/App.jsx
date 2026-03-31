import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Footer from "./components/Footer";

const PRODUCTS = [
  {
    id: 1,
    category: "iphone",
    name: "iPhone 15 Pro Max",
    price: "34.990.000đ",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600",
  },
  {
    id: 2,
    category: "mac",
    name: "MacBook Pro 14 M3",
    price: "39.990.000đ",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600",
  },
  {
    id: 3,
    category: "watch",
    name: "Apple Watch Ultra 2",
    price: "21.990.000đ",
    img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=600",
  },
  {
    id: 4,
    category: "ipad",
    name: "iPad Pro M4",
    price: "28.990.000đ",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600",
  },
  {
    id: 5,
    category: "iphone",
    name: "iPhone 15 Promax",
    price: "25.990.000đ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__5_2_1_1_1_1_2_1_1.jpg",
  },
  {
    id: 6,
    category: "mac",
    name: "iMac 24-inch",
    price: "36.990.000đ",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="modern-store">
      <Navbar />
      <Hero />

      <section className="bento-section">
        <div className="bento-grid">
          <div className="bento-item large-item dark-bg">
            <h2>Kỷ nguyên mới của Mac.</h2>
            <p>Chip M3 rực rỡ.</p>
            <img
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800"
              alt="Macbook"
            />
          </div>
          <div className="bento-item small-item light-bg">
            <h3>AirPods Pro</h3>
            <p>Âm thanh tuyệt đỉnh.</p>
            <img
              src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400"
              alt="AirPods"
            />
          </div>
          <div className="bento-item small-item dark-bg">
            <h3>Phụ kiện MagSafe</h3>
            <p>Gắn là dính.</p>
            <img
              src="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=400"
              alt="MagSafe"
            />
          </div>
        </div>
      </section>

      <section className="store-section">
        <h2 className="section-title">Khám phá sản phẩm</h2>

        <div className="filter-tabs">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            Tất cả
          </button>
          <button
            className={activeTab === "iphone" ? "active" : ""}
            onClick={() => setActiveTab("iphone")}
          >
            iPhone
          </button>
          <button
            className={activeTab === "mac" ? "active" : ""}
            onClick={() => setActiveTab("mac")}
          >
            Mac
          </button>
          <button
            className={activeTab === "ipad" ? "active" : ""}
            onClick={() => setActiveTab("ipad")}
          >
            iPad
          </button>
          <button
            className={activeTab === "watch" ? "active" : ""}
            onClick={() => setActiveTab("watch")}
          >
            Watch
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="btn-buy">Thêm vào giỏ</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
