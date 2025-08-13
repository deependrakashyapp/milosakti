import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">🌱</div>
              <div className="logo-text">
                <span className="logo-title">Millo Shakti</span>
                <span className="logo-subtitle">Complete Hub of Organic, Millets & Natural Products</span>
              </div>
            </div>
            <p className="footer-description">
              140-year-old trustworthy and quality-focused, Millo Shakti is committed to ending malnutrition 
              and providing economic empowerment to farmers and women's self-help groups.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <ul className="footer-links">
              <li><a href="#">Fresh Vegetables</a></li>
              <li><a href="#">Organic Fruits</a></li>
              <li><a href="#">Herbs & Spices</a></li>
              <li><a href="#">Dairy Products</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>📍 Bareilly, Uttar Pradesh, India</p>
              <p>📞 +91 9412605731</p>
              <p>✉️ info@milloshakti.com</p>
              <p>🕒 Mon-Sat: 8AM-8PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Millo Shakti. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 