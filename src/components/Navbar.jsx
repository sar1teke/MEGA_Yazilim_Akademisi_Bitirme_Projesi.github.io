// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container text-center">
      <a className="navbar-brand" href="https://www.meram.bel.tr/" target='_blank'>
        <img src="https://www.meram.bel.tr/upload/medya/MUHTAR_3.jpg" alt="Logo" className="logo" />
      </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.meram.bel.tr/" target='_blank'>
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.meram.bel.tr/fotograflarla-meram" target='_blank'>
                Foto Galeri
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.meram.bel.tr/baskan" target='_blank'>
                Profil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
