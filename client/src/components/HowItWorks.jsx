import React from 'react'

export default function HowItWorks({ onLearnMore }) {
  return (
    <section className="container how-ai-works-section" id="how-it-works">
      <div className="section-header">
        <div className="section-title-wrap">
          <h2 className="section-title">How Travelora AI Plans Your Journey</h2>
          <i className="fa-solid fa-brain" style={{ color: '#1a73e8', fontSize: '17px' }}></i>
        </div>
        <a
          href="#how-it-works"
          className="view-all-link"
          onClick={(e) => {
            e.preventDefault()
            onLearnMore && onLearnMore()
          }}
        >
          Explore Full AI Engine Architecture &rarr;
        </a>
      </div>

      <div className="how-ai-grid">
        <div className="how-ai-card">
          <span className="how-step-num">01</span>
          <div className="how-icon-box icon-blue">
            <i className="fa-solid fa-sliders"></i>
          </div>
          <h4>Neural Preference Matching</h4>
          <p>
            Input your pace, budget, dietary tastes, and bucket-list dreams. Our AI cross-references your style against millions of real traveler experiences.
          </p>
        </div>

        <div className="how-ai-card">
          <span className="how-step-num">02</span>
          <div className="how-icon-box icon-orange">
            <i className="fa-solid fa-network-wired"></i>
          </div>
          <h4>Multi-Vector Route Optimization</h4>
          <p>
            AI scans real-time flight paths, venue opening hours, crowd heatmaps, and train timetables to craft the ultimate efficient itinerary.
          </p>
        </div>

        <div className="how-ai-card">
          <span className="how-step-num">03</span>
          <div className="how-icon-box icon-purple">
            <i className="fa-solid fa-compass"></i>
          </div>
          <h4>Autonomous 24/7 Live Guardian</h4>
          <p>
            Dynamic rerouting if rain occurs or flights get delayed. Instant offline sync, calendar export, and hidden local gems right in your pocket.
          </p>
        </div>
      </div>
    </section>
  )
}
