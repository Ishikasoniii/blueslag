import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-orange">Blue</span>
          <span className="logo-white">slag</span>
          <span className="logo-subtext">Technology</span>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="/frontend/src/Allpage.jsx">Home</a></li>
          <li><a href="#about">About</a></li>
         
  <li><a href="/frontend/src/component/card.jsx">How We Work</a></li>
          <li><a href="/frontend/src/component/slider.jsx">Why us</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="/frontend/src/component/faq.jsx">FAQ</a></li>
        </ul>

        <a href="tel:93022132190" className="login-btn">Call Us</a>
      </div>
    </nav>
  );
}
