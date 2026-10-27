import React from 'react'
import { sampleItineraries } from '../data/itineraries.js'

export default function SampleTripsPage({
  onSelectPlan,
  onBookTrip,
  onAddToWishlist,
  wishlist = []
}) {
  const plansList = Object.values(sampleItineraries)
  const isSaved = (planId) => wishlist.some((item) => item.id === planId)

  return (
    <div className="sample-trips-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-compass"></i> Verified Autonomous Journeys
        </div>
        <h1 className="page-title">Curated AI Sample Itineraries</h1>
        <p className="page-subtitle">
          Explore complete, tested day-by-day travel master plans crafted by our AI. Every itinerary includes
          verified opening times, scenic transit legs, and secret local recommendations.
        </p>
      </div>

      {/* Grid */}
      <div className="sample-trips-grid">
        {plansList.map((plan) => {
          const saved = isSaved(plan.id)
          return (
            <div key={plan.id} className="sample-trip-card">
              <div className="sample-card-media">
                <img src={plan.image} alt={plan.title} loading="lazy" />
                <span className="sample-match-badge">{plan.match}</span>
                <button
                  className={`catalog-fav-btn ${saved ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onAddToWishlist(plan)
                  }}
                  title={saved ? 'Remove from Wishlist' : 'Save to Wishlist'}
                >
                  <i className={saved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                </button>
              </div>

              <div className="sample-card-body">
                <h3 className="sample-card-title">{plan.title}</h3>
                <div className="sample-card-vibe">{plan.vibe}</div>

                <div className="sample-metrics-row">
                  <div className="sample-metric-tag">
                    <i className="fa-solid fa-cloud-sun" style={{ color: '#f59e0b' }}></i>
                    <span>{plan.weather.split('•')[0]}</span>
                  </div>
                  <div className="sample-metric-tag">
                    <i className="fa-solid fa-person-walking" style={{ color: '#10b981' }}></i>
                    <span>{plan.pace.split('(')[0]}</span>
                  </div>
                  <div className="sample-metric-tag">
                    <i className="fa-regular fa-calendar" style={{ color: '#1565d8' }}></i>
                    <span>{plan.days?.length || 5} Days Plan</span>
                  </div>
                </div>

                <div className="sample-price-row">
                  <span className="sample-price-label">All-Inclusive Estimate</span>
                  <span className="sample-price-value">{plan.budget.split(' ')[0]}</span>
                </div>

                <div className="sample-card-actions">
                  <button
                    className="quick-chip"
                    onClick={() => onSelectPlan(plan)}
                  >
                    <i className="fa-solid fa-wand-magic-sparkles"></i> View Day-by-Day
                  </button>
                  <button
                    className="btn-book-now"
                    onClick={() => onBookTrip && onBookTrip(plan)}
                  >
                    <i className="fa-solid fa-plane-circle-check"></i> Book Itinerary
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
