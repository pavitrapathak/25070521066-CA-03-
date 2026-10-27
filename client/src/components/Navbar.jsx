import React, { useState } from 'react'

export default function Navbar({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenWishlist,
  onOpenAuth,
  wishlistCount = 0,
  currentUser = null
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNav = (pageKey) => {
    onNavigate(pageKey)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-item">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>Autonomous AI Travel Planner</span>
          </div>
          <div className="top-bar-item">
            <i className="fa-solid fa-route"></i>
            <span>Custom Day-by-Day Itineraries in 3s</span>
          </div>
          <div className="top-bar-item">
            <i className="fa-solid fa-brain"></i>
            <span>Real-Time Weather &amp; Budget Prediction</span>
          </div>
          <div className="top-bar-item" onClick={() => handleNav('contact')} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-headset"></i>
            <span>24/7 AI Journey Concierge</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              handleNav('home')
            }}
          >
            <div className="logo-icon">
              <i className="fa-solid fa-plane"></i>
            </div>
            <div className="logo-text">
              <span className="logo-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                Travelora{' '}
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #ff5722, #1565d8)',
                    color: '#fff',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    letterSpacing: '0.5px'
                  }}
                >
                  AI
                </span>
              </span>
              <span className="logo-subtitle">Autonomous Journey Intelligence</span>
            </div>
          </a>

          {/* Navigation Links */}
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a
                href="#home"
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('home')
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#planner"
                className={`nav-link ${currentPage === 'planner' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('planner')
                }}
              >
                AI Planner
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className={`nav-link ${currentPage === 'how-it-works' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('how-it-works')
                }}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#sample-trips"
                className={`nav-link ${currentPage === 'sample-trips' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('sample-trips')
                }}
              >
                Sample Trips
              </a>
            </li>
            <li>
              <a
                href="#destinations"
                className={`nav-link ${currentPage === 'destinations' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('destinations')
                }}
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#deals"
                className={`nav-link ${currentPage === 'deals' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('deals')
                }}
              >
                Deals
              </a>
            </li>
          </ul>

          {/* Action items */}
          <div className="nav-actions">
            {/* Search Icon */}
            <button
              className="action-icon-btn"
              onClick={onOpenSearch}
              title="Search destinations, deals & plans"
              aria-label="Search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* Wishlist Icon with badge */}
            <button
              className="action-icon-btn"
              onClick={onOpenWishlist}
              title="Saved Wishlist"
              aria-label="Wishlist"
              style={{ position: 'relative' }}
            >
              <i className={wishlistCount > 0 ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} style={{ color: wishlistCount > 0 ? '#ef4444' : 'inherit' }}></i>
              {wishlistCount > 0 && <span className="nav-badge-count">{wishlistCount}</span>}
            </button>

            {/* User Profile / Auth Icon */}
            <button
              className="action-icon-btn"
              onClick={onOpenAuth}
              title={currentUser ? `Profile: ${currentUser.name}` : 'Sign In / Account'}
              aria-label="Account"
            >
              {currentUser ? (
                <span className="nav-user-avatar">{currentUser.name.charAt(0)}</span>
              ) : (
                <i className="fa-regular fa-user"></i>
              )}
            </button>

            {/* CTA button */}
            <button className="btn-book-now" onClick={() => handleNav('planner')}>
              <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '11px' }}></i>
              Plan with AI
            </button>

            {/* Mobile hamburger toggle */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
