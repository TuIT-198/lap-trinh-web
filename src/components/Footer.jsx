import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="apple-footer">
      <div className="footer-container">
        <div className="footer-contact">
          <p>
            <strong>Cần hỗ trợ?</strong> Hãy liên hệ với chúng tôi chuyên gia
            của chúng tôi.
          </p>
          <div className="contact-links">
            <p>
              📞 Điện thoại: <a href="tel:0392868631">0392 868 631</a>(Mr. Tus)
            </p>
            <p>
              ✉️ Email:{" "}
              <a href="mailto:congtuu198@gmail.com">congtuu198@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>Bản quyền © 2026 TuIT store (Clone). Bảo lưu mọi quyền.</p>
          <div className="footer-legal">
            <a href="#privacy">Chính sách bảo mật</a> |
            <a href="#terms">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
