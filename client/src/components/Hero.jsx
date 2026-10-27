import React from 'react'

export default function Hero({ onPlanClick, onSampleClick }) {
  return (
    <header className="hero">
      <div className="container" style={{ position: 'relative', width: '100%' }}>
        <div className="hero-content">
          <div className="ai-hero-pill">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            Next-Gen AI Travel Engine v2.4
          </div>
          <h1 className="hero-title">
            Your Dream Journey,
            <br />
            Crafted by <span className="memories">AI Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            Tell our AI your vibe, dates, and budget. Get hyper-personalized day-by-day itineraries, smart transit routes, and secret local gems in seconds.
          </p>

          <div className="hero-btns">
            <button className="btn-primary-pill" onClick={onPlanClick}>
              <i className="fa-solid fa-wand-magic-sparkles"></i> Generate AI Itinerary &rarr;
            </button>
            <button className="btn-white-pill" onClick={onSampleClick}>
              <i className="fa-solid fa-compass" style={{ color: 'var(--primary)' }}></i> Explore Sample Trips
            </button>
          </div>

          <div className="trusted-box">
            <div className="avatar-group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
              />
            </div>
            <span className="trusted-text">Over 250,000+ AI Journeys Planned</span>
          </div>
        </div>

        {/* Floating AI Itinerary Card */}
        <div className="hero-ai-card">
          <div className="ai-card-top">
            <span className="ai-live-tag">
              <span className="ai-live-dot"></span> AI Generated
            </span>
            <span className="ai-match-badge">99% Match</span>
          </div>
          <div className="ai-card-title">Kyoto &amp; Tokyo, Japan</div>
          <div className="ai-card-sub">
            <i className="fa-solid fa-clock"></i> 7 Days • Foodie &amp; Culture
          </div>

          <div className="ai-card-metrics">
            <div className="ai-metric-item">
              <div className="val">2.8s</div>
              <div className="lbl">Speed</div>
            </div>
            <div className="ai-metric-item">
              <div className="val">₹1,49,999</div>
              <div className="lbl">Optimized</div>
            </div>
            <div className="ai-metric-item">
              <div className="val">14</div>
              <div className="lbl">Gems</div>
            </div>
          </div>

          <div className="ai-card-route">
            <i className="fa-solid fa-route"></i>
            <span>Shinjuku &rarr; Gion &rarr; Arashiyama &rarr; Shibuya</span>
          </div>

          <button className="btn-preview-plan" onClick={onSampleClick}>
            <i className="fa-solid fa-wand-magic-sparkles"></i> Preview AI Itinerary
          </button>
        </div>
      </div>
    </header>
  )
}
