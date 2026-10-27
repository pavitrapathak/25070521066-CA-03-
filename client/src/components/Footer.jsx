import React from 'react'

export default function Footer({ onNavigate }) {
  const handlePageClick = (pageKey, extraParam) => (e) => {
    e.preventDefault()
    onNavigate(pageKey, extraParam)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Col 1: Brand */}
        <div>
          <a
            href="#home"
            className="logo"
            onClick={handlePageClick('home')}
          >
            <div className="logo-icon" style={{ width: '34px', height: '34px', fontSize: '16px' }}>
              <i className="fa-solid fa-plane"></i>
            </div>
            <div className="logo-text">
              <span className="logo-title" style={{ fontSize: '19px' }}>
                Travelora
              </span>
              <span className="logo-subtitle">Explore More. Worry Less.</span>
            </div>
          </a>
          <p className="footer-desc">
            Your trusted autonomous travel partner for unforgettable, crowd-optimized journeys worldwide.
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              title="Twitter (X)"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              title="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              title="Pinterest"
            >
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Col 2: Company */}
        <div className="footer-col">
          <h5>Company</h5>
          <ul className="footer-links">
            <li>
              <a href="#about" onClick={handlePageClick('about')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" onClick={handlePageClick('careers')}>
                Careers
                <span className="badge-pill badge-green" style={{ fontSize: '9px', padding: '1px 5px', marginLeft: '6px' }}>
                  Hiring
                </span>
              </a>
            </li>
            <li>
              <a href="#blog" onClick={handlePageClick('blog')}>
                Blog &amp; Guides
              </a>
            </li>
            <li>
              <a href="#press" onClick={handlePageClick('press')}>
                Press &amp; Media
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handlePageClick('contact')}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Support */}
        <div className="footer-col">
          <h5>Support</h5>
          <ul className="footer-links">
            <li>
              <a href="#faqs" onClick={handlePageClick('faqs')}>
                FAQs
              </a>
            </li>
            <li>
              <a href="#help" onClick={handlePageClick('help')}>
                Booking Help &amp; Status
              </a>
            </li>
            <li>
              <a href="#returns" onClick={handlePageClick('returns')}>
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#privacy" onClick={handlePageClick('privacy')}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" onClick={handlePageClick('terms')}>
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Top Destinations */}
        <div className="footer-col">
          <h5>Top Destinations</h5>
          <ul className="footer-links">
            <li>
              <a href="#destinations" onClick={handlePageClick('destinations', 'Europe')}>
                Europe (Alps, Paris, Italy)
              </a>
            </li>
            <li>
              <a href="#destinations" onClick={handlePageClick('destinations', 'Asia')}>
                Asia (Japan, Bali, Dubai)
              </a>
            </li>
            <li>
              <a href="#destinations" onClick={handlePageClick('destinations', 'America')}>
                America (New York, Hawaii)
              </a>
            </li>
            <li>
              <a href="#destinations" onClick={handlePageClick('destinations', 'Africa')}>
                Africa (Serengeti, Cape Town)
              </a>
            </li>
            <li>
              <a href="#destinations" onClick={handlePageClick('destinations', 'Australia')}>
                Australia (Sydney, Reef)
              </a>
            </li>
          </ul>
        </div>

        {/* Col 5: Contact */}
        <div className="footer-col">
          <h5>24/7 Concierge Desk</h5>
          <div
            className="contact-item"
            style={{ cursor: 'pointer' }}
            onClick={handlePageClick('contact')}
          >
            <i className="fa-solid fa-phone"></i>
            <span>+1 (800) 123-4567</span>
          </div>
          <div
            className="contact-item"
            style={{ cursor: 'pointer' }}
            onClick={handlePageClick('contact')}
          >
            <i className="fa-regular fa-envelope"></i>
            <span>info@travelora.com</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>123 Travelora Plaza, New York, USA</span>
          </div>
        </div>
      </div>

      {/* Copyright & Payment Bar */}
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>&copy; 2026 Travelora AI Technologies Inc. All rights reserved. Powered by Autonomous Travel Intelligence.</div>
          <div className="payment-icons">
            <span className="pay-badge" style={{ color: '#003087' }} title="Verified Visa Secure">
              VISA
            </span>
            <span className="pay-badge" style={{ color: '#eb001b' }} title="Mastercard Identity Check">
              <i className="fa-brands fa-cc-mastercard"></i>
            </span>
            <span className="pay-badge" style={{ color: '#00457c' }} title="PayPal Buyer Protection">
              PayPal
            </span>
            <span className="pay-badge" style={{ color: '#000000' }} title="Apple Pay 1-Click">
              <i className="fa-brands fa-apple-pay"></i>
            </span>
            <span className="pay-badge" style={{ color: '#4285f4' }} title="Google Pay Verified">
              <i className="fa-brands fa-google-pay"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
