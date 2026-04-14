import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Về TuIT Store</h1>
        <p>
          Định hình phong cách sống công nghệ. Mang tương lai đến tận tay bạn.
        </p>
      </section>
      <section className="about-story">
        <h2>Sứ mệnh của chúng tôi</h2>
        <p>
          Bắt đầu từ một niềm đam mê mãnh liệt với công nghệ, TuIT Store ra đời
          với mong muốn không chỉ là nơi bán lẻ các sản phẩm công nghệ tiên tiến
          nhất, mà còn là điểm đến tin cậy để trải nghiệm sự hoàn mỹ. Chúng tôi
          cam kết cung cấp những thiết bị đột phá, giúp bạn làm việc thông minh
          hơn, giải trí tuyệt vời hơn và kết nối dễ dàng hơn.
        </p>
      </section>

      <section className="values-grid">
        <div className="value-card">
          <div className="value-icon">💎</div>
          <h3>Chất lượng tuyệt đối</h3>
          <p>
            100% sản phẩm chính hãng, nguyên seal. Được kiểm định nghiêm ngặt
            trước khi giao đến tay khách hàng.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">🚀</div>
          <h3>Giao hàng siêu tốc</h3>
          <p>
            Hệ thống kho bãi thông minh giúp tối ưu hóa thời gian vận chuyển.
            Nhận hàng chỉ trong 2 giờ tại nội thành.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">🤝</div>
          <h3>Hỗ trợ tận tâm</h3>
          <p>
            Đội ngũ chuyên gia kỹ thuật luôn sẵn sàng hỗ trợ bạn 24/7. Bảo hành
            nhanh chóng, đổi trả dễ dàng.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
