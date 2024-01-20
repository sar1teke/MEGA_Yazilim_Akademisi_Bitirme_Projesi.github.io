// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../style.css'; // Yeni stil dosyasını ekleyin

const Footer = () => {
  return (
    <footer className="bg-success text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Adres</h4>
            <p>Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA</p>
          </div>
          <div className="col-md-4">
            <h4>Sosyal Medya</h4>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://www.facebook.com/Meram.Belediyesi" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/uretkenakademi/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>İletişim</h4>
            <p>Email: bizimmeram@meram.bel.tr</p>
            <p>Telefon: 444 3 042</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
