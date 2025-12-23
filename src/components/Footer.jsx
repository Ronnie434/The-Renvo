import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleAppStoreClick = () => {
    window.open('https://testflight.apple.com/join/Sjk4tf75', '_blank');
  };

  return (
    <footer className="renvo-footer">
      <div className="renvo-footer-container">
        <div className="renvo-footer-grid">
          <div className="renvo-footer-brand">
            <span className="renvo-footer-logo">The Renvo<span className="renvo-footer-logo-dot">.</span></span>
            <p className="renvo-footer-description">Track, manage, and optimize your recurring expenses effortlessly.</p>
            <div className="renvo-footer-email">
              <a href="mailto:contact@therenvo.com">contact@therenvo.com</a>
            </div>
          </div>
          <div className="renvo-footer-links-section">
            <h4 className="renvo-footer-heading">Product</h4>
            <ul className="renvo-footer-links">
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><button onClick={handleAppStoreClick} className="renvo-footer-link-button">Download</button></li>
            </ul>
          </div>
          <div className="renvo-footer-links-section">
            <h4 className="renvo-footer-heading">Company</h4>
            <ul className="renvo-footer-links">
              <li><a href="#">About</a></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="renvo-footer-bottom">
          © 2025 The Renvo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;