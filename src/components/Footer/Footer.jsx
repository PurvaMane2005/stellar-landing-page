import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { rating, feedback });
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="footer">
      {/* Inline Feedback Section */}
      <div className="inline-feedback">
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`star-btn ${star <= (hover || rating) ? 'active' : ''}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            >
              ★
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="feedback-input-form">
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts..."
            className="feedback-input"
          />
        </form>
      </div>

      <div className="footer-container">
        <div className="footer-header">
          <h1 className="footer-title">stellar.</h1>
          <p className="footer-subtitle">
            Beautifully hard-crafted components to help you build amazing pages.
          </p>

          <div className="language-section">
            <label htmlFor="language-select" className="language-label">Language</label>
            <div className="language-select-wrapper">
              <select id="language-select" className="language-select">
                <option value="en-uk">English (UK)</option>
                <option value="cs">Cestina</option>
                <option value="da">Dansk</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
              <span className="dropdown-icon">▼</span>
            </div>
          </div>

          <div className="social-section">
            <p className="social-label">Social</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h3 className="link-heading">PRODUCT</h3>
            <ul className="link-list">
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h3 className="link-heading">ABOUT</h3>
            <ul className="link-list">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h3 className="link-heading">CONTACT</h3>
            <ul className="link-list">
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Email</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© Copyright 2020 Tails. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
