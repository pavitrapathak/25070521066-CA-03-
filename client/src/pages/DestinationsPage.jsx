import React, { useState } from 'react'
import { destinationsData } from '../data/destinationsData.js'

export default function DestinationsPage({
  onSelectDestination,
  onAddToWishlist,
  wishlist = [],
  initialContinent = 'All'
}) {
  const [selectedContinent, setSelectedContinent] = useState(initialContinent)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModalDest, setActiveModalDest] = useState(null)

  const continents = ['All', 'Europe', 'Asia', 'America', 'Africa', 'Australia']

  const filtered = destinationsData.filter((d) => {
    const matchesContinent =
      selectedContinent === 'All' || d.continent.toLowerCase() === selectedContinent.toLowerCase()
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesContinent && matchesSearch
  })

  const isSaved = (destId) => wishlist.some((item) => item.id === destId)

  return (
    <div className="destinations-page container">
      {/* Page Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-earth-americas"></i> Global Exploration Hub
        </div>
        <h1 className="page-title">Explore Trending World Destinations</h1>
        <p className="page-subtitle">
          Browse verified destinations with AI crowd heatmaps, seasonal weather predictions, and 1-click
          itinerary synthesizers.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="destinations-filter-toolbar">
        {/* Continent Pills */}
        <div className="continent-pills-row">
          {continents.map((c) => (
            <button
              key={c}
              className={`continent-pill ${selectedContinent === c ? 'active' : ''}`}
              onClick={() => setSelectedContinent(c)}
            >
              {c === 'All' ? '🌐 All World' : c}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="dest-search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search destination, country or vibe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="spotlight-clear-btn" onClick={() => setSearchQuery('')}>
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="destinations-catalog-grid">
        {filtered.map((dest) => {
          const saved = isSaved(dest.id)
          return (
            <div key={dest.id} className="catalog-card">
              <div className="catalog-img-wrap">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <span className={`badge-pill ${dest.badgeColor} catalog-badge`}>{dest.badge}</span>
                <button
                  className={`catalog-fav-btn ${saved ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onAddToWishlist(dest)
                  }}
                  title={saved ? 'Remove from Wishlist' : 'Save to Wishlist'}
                >
                  <i className={saved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                </button>
                <div className="catalog-continent-tag">{dest.continent}</div>
              </div>

              <div className="catalog-content">
                <div className="catalog-header-row">
                  <div>
                    <h3 className="catalog-title">{dest.name}</h3>
                    <div className="catalog-rating-row">
                      <span className="rating-stars">
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <strong>{dest.rating}</strong>
                      <span className="catalog-reviews">({dest.reviewsCount} reviews)</span>
                    </div>
                  </div>
                  <div className="catalog-price-box">
                    <span className="price-label">Starting from</span>
                    <span className="price-val">{dest.price}</span>
                  </div>
                </div>

                <p className="catalog-desc">{dest.description}</p>

                {/* Highlights tags */}
                <div className="catalog-tags-row">
                  {dest.highlights.slice(0, 3).map((h, i) => (
                    <span key={i} className="catalog-tag">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="catalog-actions-row">
                  <button
                    className="quick-chip"
                    onClick={() => setActiveModalDest(dest)}
                  >
                    <i className="fa-regular fa-eye"></i> View Guide
                  </button>
                  <button
                    className="btn-book-now"
                    onClick={() => onSelectDestination(dest.prompt)}
                  >
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Plan AI Trip
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="drawer-empty-state" style={{ padding: '60px 20px' }}>
          <i className="fa-solid fa-compass" style={{ fontSize: '42px', color: '#cbd5e1' }}></i>
          <h4 style={{ marginTop: '16px' }}>No destinations match your filter</h4>
          <p>Try searching for a different keyword or selecting "All World".</p>
          <button className="quick-chip" onClick={() => { setSelectedContinent('All'); setSearchQuery(''); }}>
            Reset Filters
          </button>
        </div>
      )}

      {/* Destination Guide Modal */}
      {activeModalDest && (
        <div
          className="ai-modal-backdrop show"
          onClick={(e) => {
            if (e.target.classList.contains('ai-modal-backdrop')) setActiveModalDest(null)
          }}
        >
          <div className="ai-modal">
            <div className="ai-modal-header">
              <div className="ai-modal-title-box">
                <i className="fa-solid fa-location-dot" style={{ color: '#1565d8' }}></i>
                <h3>{activeModalDest.name} — Destination Guide</h3>
              </div>
              <button className="ai-modal-close" onClick={() => setActiveModalDest(null)}>
                &times;
              </button>
            </div>

            <div className="ai-modal-body">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <span className="badge-pill badge-blue">{activeModalDest.continent}</span>
                  <span style={{ marginLeft: '10px', fontSize: '13px', color: '#64748b' }}>
                    <i className="fa-solid fa-calendar-check" style={{ color: '#10b981' }}></i> Best Season: {activeModalDest.bestSeason}
                  </span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>
                  From {activeModalDest.price}
                </div>
              </div>

              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155' }}>
                {activeModalDest.description}
              </p>

              <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '20px 0 10px 0' }}>
                Top AI Curated Highlights:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {activeModalDest.highlights.map((h, i) => (
                  <div key={i} style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-check" style={{ color: '#10b981' }}></i> {h}
                  </div>
                ))}
              </div>

              <div className="ai-modal-footer" style={{ marginTop: '24px' }}>
                <button
                  className="quick-chip"
                  onClick={() => {
                    onAddToWishlist(activeModalDest)
                    alert('Saved to Wishlist!')
                  }}
                >
                  <i className="fa-regular fa-heart" style={{ color: '#ef4444' }}></i> Save to Wishlist
                </button>
                <button
                  className="btn-book-now"
                  onClick={() => {
                    setActiveModalDest(null)
                    onSelectDestination(activeModalDest.prompt)
                  }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles"></i> Generate Custom AI Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
