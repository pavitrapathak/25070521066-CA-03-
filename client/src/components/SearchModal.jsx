import React, { useState, useEffect, useRef } from 'react'
import { destinationsData } from '../data/destinationsData.js'
import { dealsData } from '../data/dealsData.js'
import { sampleItineraries } from '../data/itineraries.js'

export default function SearchModal({
  isOpen,
  onClose,
  onSelectDestination,
  onSelectDeal,
  onSelectPlan,
  onNavigate
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const q = query.toLowerCase().trim()

  const matchedDestinations = q
    ? destinationsData.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.continent.toLowerCase().includes(q)
      )
    : destinationsData.slice(0, 4)

  const matchedDeals = q
    ? dealsData.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.destination.toLowerCase().includes(q)
      )
    : dealsData.slice(0, 3)

  const itinerariesList = Object.values(sampleItineraries)
  const matchedPlans = q
    ? itinerariesList.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.destination?.toLowerCase().includes(q) ||
          p.vibe?.toLowerCase().includes(q)
      )
    : itinerariesList.slice(0, 3)

  return (
    <div
      className="search-modal-backdrop"
      onClick={(e) => {
        if (e.target.classList.contains('search-modal-backdrop')) onClose()
      }}
    >
      <div className="search-spotlight-modal">
        {/* Search Input Bar */}
        <div className="spotlight-input-row">
          <i className="fa-solid fa-magnifying-glass spotlight-search-icon"></i>
          <input
            ref={inputRef}
            type="text"
            className="spotlight-input"
            placeholder="Search destinations, AI itineraries, deals, or cities (e.g. Kyoto, Alps, Paris, Safari)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="spotlight-clear-btn" onClick={() => setQuery('')}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
          <span className="spotlight-esc-badge">ESC</span>
        </div>

        {/* Results Container */}
        <div className="spotlight-results">
          {/* Section: Destinations */}
          {matchedDestinations.length > 0 && (
            <div className="spotlight-section">
              <div className="spotlight-section-title">
                <i className="fa-solid fa-location-dot"></i> Destinations
              </div>
              <div className="spotlight-items-grid">
                {matchedDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="spotlight-item"
                    onClick={() => {
                      onClose()
                      onSelectDestination(dest.prompt)
                    }}
                  >
                    <img src={dest.image} alt={dest.name} className="spotlight-thumb" />
                    <div className="spotlight-info">
                      <div className="spotlight-item-name">{dest.name}</div>
                      <div className="spotlight-item-sub">
                        {dest.continent} &bull; Starting from {dest.price} &bull; ⭐ {dest.rating}
                      </div>
                    </div>
                    <span className="spotlight-action-tag">Generate Plan &rarr;</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Deals */}
          {matchedDeals.length > 0 && (
            <div className="spotlight-section">
              <div className="spotlight-section-title">
                <i className="fa-solid fa-tags"></i> Top Deals & Packages
              </div>
              <div className="spotlight-items-grid">
                {matchedDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="spotlight-item"
                    onClick={() => {
                      onClose()
                      onSelectDeal(deal)
                    }}
                  >
                    <img src={deal.image} alt={deal.title} className="spotlight-thumb" />
                    <div className="spotlight-info">
                      <div className="spotlight-item-name">{deal.title}</div>
                      <div className="spotlight-item-sub">
                        <span className="deal-old-price">₹{deal.oldPrice?.toLocaleString('en-IN')}</span>{' '}
                        <strong style={{ color: '#ff5722' }}>₹{deal.newPrice?.toLocaleString('en-IN')}</strong> &bull; {deal.duration}
                      </div>
                    </div>
                    <span className="spotlight-action-tag">Book Deal &rarr;</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: AI Sample Itineraries */}
          {matchedPlans.length > 0 && (
            <div className="spotlight-section">
              <div className="spotlight-section-title">
                <i className="fa-solid fa-wand-magic-sparkles"></i> AI Pre-Crafted Journeys
              </div>
              <div className="spotlight-items-grid">
                {matchedPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="spotlight-item"
                    onClick={() => {
                      onClose()
                      onSelectPlan(plan)
                    }}
                  >
                    <img src={plan.image} alt={plan.title} className="spotlight-thumb" />
                    <div className="spotlight-info">
                      <div className="spotlight-item-name">{plan.title}</div>
                      <div className="spotlight-item-sub">
                        {plan.match} &bull; {plan.vibe}
                      </div>
                    </div>
                    <span className="spotlight-action-tag">Preview Itinerary &rarr;</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Quick Links */}
          <div className="spotlight-quick-links">
            <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Quick jump:</span>
            <button
              className="quick-chip"
              onClick={() => {
                onClose()
                onNavigate('destinations')
              }}
            >
              All Destinations
            </button>
            <button
              className="quick-chip"
              onClick={() => {
                onClose()
                onNavigate('deals')
              }}
            >
              Top Deals
            </button>
            <button
              className="quick-chip"
              onClick={() => {
                onClose()
                onNavigate('planner')
              }}
            >
              AI Trip Planner
            </button>
            <button
              className="quick-chip"
              onClick={() => {
                onClose()
                onNavigate('faqs')
              }}
            >
              FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
