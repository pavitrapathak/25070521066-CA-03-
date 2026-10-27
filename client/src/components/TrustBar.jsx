import React from 'react'

export default function TrustBar() {
  return (
    <section className="container trust-bar-section">
      <div className="trust-grid">
        <div className="trust-pill">
          <div className="trust-icon-box icon-orange">
            <i className="fa-solid fa-brain"></i>
          </div>
          <div className="trust-text">
            <h5>Neural Pricing</h5>
            <p>Price drop alerts</p>
          </div>
        </div>

        <div className="trust-pill">
          <div className="trust-icon-box icon-green">
            <i className="fa-solid fa-headset"></i>
          </div>
          <div className="trust-text">
            <h5>24/7 AI Concierge</h5>
            <p>Live journey help</p>
          </div>
        </div>

        <div className="trust-pill">
          <div className="trust-icon-box icon-red">
            <i className="fa-solid fa-arrows-rotate"></i>
          </div>
          <div className="trust-text">
            <h5>Smart Rerouting</h5>
            <p>Rain &amp; delay sync</p>
          </div>
        </div>

        <div className="trust-pill">
          <div className="trust-icon-box icon-teal">
            <i className="fa-solid fa-mobile-screen"></i>
          </div>
          <div className="trust-text">
            <h5>Offline Sync</h5>
            <p>Zero roaming worry</p>
          </div>
        </div>

        <div className="trust-pill">
          <div className="trust-icon-box icon-purple">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <div className="trust-text">
            <h5>Zero Traps</h5>
            <p>Local AI verified</p>
          </div>
        </div>
      </div>
    </section>
  )
}
