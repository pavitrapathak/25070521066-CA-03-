import React, { useState } from 'react'

export default function HowItWorksPage({ onPlanClick }) {
  const [simulatorScenario, setSimulatorScenario] = useState('rain')

  return (
    <div className="how-it-works-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-microchip"></i> System Architecture
        </div>
        <h1 className="page-title">How Travelora Autonomous Travel Works</h1>
        <p className="page-subtitle">
          From vague daydreaming to confirmed flights, bullet trains, and local reservations — in under 3
          seconds. Here is the engineering behind next-generation journey intelligence.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="architecture-grid">
        <div className="arch-step-card">
          <div className="arch-step-number">01</div>
          <div className="arch-icon-wrap" style={{ background: '#eff6ff', color: '#1565d8' }}>
            <i className="fa-solid fa-sliders"></i>
          </div>
          <h3>Neural Preference Synthesis</h3>
          <p>
            Traditional search queries demand dates, airport codes, and specific hotel names. Travelora takes
            natural language prompts: <em>"A cozy autumn food trip in Japan under ₹1,50,000"</em> and decomposes it
            into spatial, dietary, budget, and walking pace constraints.
          </p>
          <div className="arch-metric">
            <i className="fa-solid fa-bolt"></i> Synthesizes in 1.4s
          </div>
        </div>

        <div className="arch-step-card">
          <div className="arch-step-number">02</div>
          <div className="arch-icon-wrap" style={{ background: '#fef3c7', color: '#d97706' }}>
            <i className="fa-solid fa-cloud-sun-rain"></i>
          </div>
          <h3>Dynamic Crowd &amp; Weather Engine</h3>
          <p>
            Our geo-spatial neural graph ingests live satellite weather models and pedestrian crowd density
            heatmaps. If afternoon thunderstorms hit Interlaken or Fushimi Inari gets swamped by tour buses,
            your schedule automatically re-sequences.
          </p>
          <div className="arch-metric">
            <i className="fa-solid fa-users"></i> 70% fewer queues
          </div>
        </div>

        <div className="arch-step-card">
          <div className="arch-step-number">03</div>
          <div className="arch-icon-wrap" style={{ background: '#ecfdf5', color: '#10b981' }}>
            <i className="fa-solid fa-credit-card"></i>
          </div>
          <h3>1-Click Unified Autonomous Booking</h3>
          <p>
            No more opening 15 browser tabs with separate confirmations. Our booking engine interfaces directly
            with IATA airline protocols, boutique hotel APIs, and national rail passes (JR Pass, Swiss Pass,
            Eurail) with a single receipt.
          </p>
          <div className="arch-metric">
            <i className="fa-solid fa-shield-check"></i> 100% Guaranteed Price
          </div>
        </div>

        <div className="arch-step-card">
          <div className="arch-step-number">04</div>
          <div className="arch-icon-wrap" style={{ background: '#fdf2f8', color: '#db2777' }}>
            <i className="fa-solid fa-headset"></i>
          </div>
          <h3>24/7 AI Journey Concierge</h3>
          <p>
            While on the road, access your dedicated AI concierge via WhatsApp or in-app chat. Need an emergency
            translation for a food allergy, train platform navigation, or dinner reservations? Just send a voice note.
          </p>
          <div className="arch-metric">
            <i className="fa-solid fa-clock"></i> &lt; 2s response time
          </div>
        </div>
      </div>

      {/* Interactive Simulator */}
      <div className="simulator-section-box" style={{ marginTop: '50px' }}>
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 24px auto' }}>
          <span className="badge-pill badge-purple">Interactive Live Simulator</span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, marginTop: '8px' }}>
            Test the AI Concierge Real-Time Re-routing
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px' }}>
            Click a scenario below to watch how Travelora autonomously protects your journey when real-world
            disruptions happen.
          </p>
        </div>

        <div className="simulator-buttons-row">
          <button
            className={`simulator-toggle-btn ${simulatorScenario === 'rain' ? 'active' : ''}`}
            onClick={() => setSimulatorScenario('rain')}
          >
            🌦 Scenario A: Sudden Rain in Kyoto at 2:00 PM
          </button>
          <button
            className={`simulator-toggle-btn ${simulatorScenario === 'delay' ? 'active' : ''}`}
            onClick={() => setSimulatorScenario('delay')}
          >
            🚊 Scenario B: Bullet Train Delayed by 40 mins
          </button>
          <button
            className={`simulator-toggle-btn ${simulatorScenario === 'crowd' ? 'active' : ''}`}
            onClick={() => setSimulatorScenario('crowd')}
          >
            👫 Scenario C: Massive Crowd Spike at Colosseum
          </button>
        </div>

        <div className="simulator-chat-display">
          <div className="chat-bubble-user">
            {simulatorScenario === 'rain' && (
              <>
                <i className="fa-solid fa-cloud-rain" style={{ color: '#38bdf8' }}></i>
                <div>
                  <strong>Weather Alert Triggered:</strong> Heavy rain detected at Gion outdoor walking district.
                </div>
              </>
            )}
            {simulatorScenario === 'delay' && (
              <>
                <i className="fa-solid fa-triangle-exclamation" style={{ color: '#f59e0b' }}></i>
                <div>
                  <strong>Transit Alert Triggered:</strong> Shinkansen Nozomi 42 running 40 mins late due to track maintenance.
                </div>
              </>
            )}
            {simulatorScenario === 'crowd' && (
              <>
                <i className="fa-solid fa-users" style={{ color: '#ef4444' }}></i>
                <div>
                  <strong>Crowd Heatmap Alert:</strong> Colosseum wait times exceed 95 minutes.
                </div>
              </>
            )}
          </div>

          <div className="chat-bubble-ai">
            <div className="ai-agent-avatar">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div className="ai-agent-message">
              <div className="ai-agent-name">Travelora Autonomous Concierge &bull; Live</div>
              {simulatorScenario === 'rain' && (
                <p>
                  "I noticed sudden rainfall forecasted at 2:15 PM in Gion. I have rearranged your afternoon:
                  swapped your outdoor canal stroll with a private <strong>Matcha Tea Ceremony &amp; Pottery Workshop at Kennin-ji</strong> (fully dry &amp; indoor).
                  Your taxi will pick you up at 2:05 PM at your current location!"
                </p>
              )}
              {simulatorScenario === 'delay' && (
                <p>
                  "No need to worry about missing dinner. I automatically notified <strong>Kyoto Kitcho Restaurant</strong> to push your table reservation from 7:30 PM to 8:15 PM,
                  and informed your hotel front desk about your delayed luggage arrival."
                </p>
              )}
              {simulatorScenario === 'crowd' && (
                <p>
                  "Colosseum line is currently backing up. I have re-routed your ticket to the <strong>VIP Gladiator Gate (Fast Track Gate 3)</strong> where wait times are under 3 minutes.
                  Follow the walking map below!"
                </p>
              )}
              <div className="ai-resolved-badge">
                <i className="fa-solid fa-check-double"></i> Autonomous Re-routing Confirmed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="how-it-works-cta" style={{ textAlign: 'center', marginTop: '60px' }}>
        <h3>Ready to experience frictionless travel?</h3>
        <p>Let our AI synthesize your dream getaway right now.</p>
        <button className="btn-book-now" style={{ margin: '14px auto 0 auto' }} onClick={onPlanClick}>
          <i className="fa-solid fa-wand-magic-sparkles"></i> Launch AI Trip Planner
        </button>
      </div>
    </div>
  )
}
