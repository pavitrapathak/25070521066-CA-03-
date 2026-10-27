import React, { useState } from 'react'
import { dealsData } from '../data/dealsData.js'

export default function DealsPage({ onSelectDeal, onBookTrip, onAddToWishlist, wishlist = [] }) {
  const [filterTag, setFilterTag] = useState('All')
  const [copiedCode, setCopiedCode] = useState('')

  const handleCopyCode = (code) => {
    navigator.clipboard?.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(''), 2500)
  }

  const isSaved = (dealId) => wishlist.some((item) => item.id === dealId)

  return (
    <div className="deals-page container">
      {/* Page Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-bolt" style={{ color: '#ff9800' }}></i> Exclusive Member Rates
        </div>
        <h1 className="page-title">Top Handpicked AI Travel Deals</h1>
        <p className="page-subtitle">
          Save up to 35% on flights, boutique hotels, high-speed rail passes, and VIP excursions bundled into
          unified autonomous travel packages.
        </p>
      </div>

      {/* Promo Banner */}
      <div className="deals-promo-banner">
        <div className="deals-promo-text">
          <span className="badge-pill badge-orange" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Flash Promotion
          </span>
          <h3>Get an extra ₹12,000 off any multi-day international itinerary</h3>
          <p>Valid on all packages booked this week. Use coupon code at checkout.</p>
        </div>
        <div className="deals-coupon-box">
          <span className="coupon-code">TRAVELORA25</span>
          <button className="btn-copy-coupon" onClick={() => handleCopyCode('TRAVELORA25')}>
            {copiedCode === 'TRAVELORA25' ? (
              <>
                <i className="fa-solid fa-check"></i> Copied!
              </>
            ) : (
              <>
                <i className="fa-regular fa-copy"></i> Copy Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* Deals Catalog Grid */}
      <div className="deals-page-grid" style={{ marginTop: '30px' }}>
        {dealsData.map((deal) => {
          const saved = isSaved(deal.id)
          return (
            <div key={deal.id} className="deal-package-card">
              <div className="deal-pkg-img-wrap">
                <img src={deal.image} alt={deal.title} loading="lazy" />
                <span className={`badge-pill ${deal.badgeColor} deal-pkg-badge`}>{deal.badge}</span>
                <span className="deal-discount-pill">-{deal.discountPercent}% OFF</span>
                <button
                  className={`catalog-fav-btn ${saved ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onAddToWishlist(deal)
                  }}
                  title={saved ? 'Remove from Wishlist' : 'Save to Wishlist'}
                >
                  <i className={saved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                </button>
              </div>

              <div className="deal-pkg-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className="deal-pkg-dest">{deal.destination}</span>
                    <h3 className="deal-pkg-title">{deal.title}</h3>
                  </div>
                  <div className="deal-pkg-pricing">
                    <span className="deal-pkg-old">₹{deal.oldPrice?.toLocaleString('en-IN')}</span>
                    <span className="deal-pkg-new">₹{deal.newPrice?.toLocaleString('en-IN')}</span>
                    <span className="deal-pkg-unit">/ person</span>
                  </div>
                </div>

                <div className="deal-pkg-duration">
                  <i className="fa-regular fa-clock" style={{ color: '#1565d8' }}></i> {deal.duration} &bull;{' '}
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>
                    <i className="fa-solid fa-fire"></i> {deal.expiresInHours}h left
                  </span>
                </div>

                <p className="deal-pkg-desc">{deal.description}</p>

                {/* Inclusions */}
                <div className="deal-inclusions-list">
                  {deal.includes.map((inc, i) => (
                    <div key={i} className="inclusion-item">
                      <i className="fa-solid fa-check" style={{ color: '#10b981' }}></i>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="deal-pkg-actions">
                  <button
                    className="quick-chip"
                    onClick={() => onSelectDeal(deal)}
                  >
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Preview AI Plan
                  </button>
                  <button
                    className="btn-book-now"
                    onClick={() => onBookTrip && onBookTrip(deal)}
                  >
                    <i className="fa-solid fa-plane-circle-check"></i> Book Deal Now
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
