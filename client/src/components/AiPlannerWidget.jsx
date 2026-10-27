import React, { useState } from 'react'

export default function AiPlannerWidget({ onGenerateTrip, plannerRef }) {
  const [activeTab, setActiveTab] = useState('ai')
  const [dest, setDest] = useState('Kyoto & Tokyo, Japan')
  const [style, setStyle] = useState('🥢 Foodie & Nightlife')
  const [duration, setDuration] = useState('7 Days • Autumn')
  const [budget, setBudget] = useState('💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)')
  const [travelers, setTravelers] = useState('2 Adults')

  const handleQuickPrompt = (d, s, du, b) => {
    setDest(d)
    setStyle(s)
    setDuration(du)
    setBudget(b)
    onGenerateTrip({ destination: d, style: s, duration: du, budget: b, travelers })
  }

  const handleGenerate = () => {
    onGenerateTrip({ destination: dest, style, duration, budget, travelers })
  }

  return (
    <section className="container search-widget-wrapper" id="ai-planner" ref={plannerRef}>
      <div className="search-widget">
        {/* Tabs */}
        <div className="search-tabs">
          <button
            className={`search-tab ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#ff5722' }}></i> AI Trip Generator
          </button>
          <button
            className={`search-tab ${activeTab === 'route' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('route')
              setDest('Paris -> Zurich -> Rome')
            }}
          >
            <i className="fa-solid fa-route"></i> Multi-City Route Optimizer
          </button>
          <button
            className={`search-tab ${activeTab === 'classic' ? 'active' : ''}`}
            onClick={() => setActiveTab('classic')}
          >
            <i className="fa-solid fa-plane"></i> Direct Flights &amp; Stays
          </button>
        </div>

        {/* AI Form Inputs */}
        {activeTab !== 'classic' ? (
          <div className="search-fields">
            {/* Destination */}
            <div className="input-box">
              <label>Where to?</label>
              <div className="input-inner">
                <i className="fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="e.g. Kyoto, Switzerland, Iceland..."
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                />
              </div>
            </div>

            {/* Trip Style / Vibe */}
            <div className="input-box">
              <label>Trip Style / Vibe</label>
              <div className="input-inner">
                <i className="fa-solid fa-palette"></i>
                <select value={style} onChange={(e) => setStyle(e.target.value)}>
                  <option>🥢 Foodie &amp; Nightlife</option>
                  <option>⛰ Adventure &amp; Scenic</option>
                  <option>⛪ Art &amp; Deep Culture</option>
                  <option>🕉 Relax &amp; Wellness</option>
                  <option>👪 Family Friendly</option>
                  <option>💎 Ultra Luxury</option>
                </select>
              </div>
            </div>

            {/* Duration */}
            <div className="input-box">
              <label>Duration &amp; Season</label>
              <div className="input-inner">
                <i className="fa-regular fa-calendar"></i>
                <input
                  type="text"
                  placeholder="e.g. 7 Days"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
            </div>

            {/* Budget */}
            <div className="input-box">
              <label>Target Budget</label>
              <div className="input-inner">
                <i className="fa-solid fa-wallet"></i>
                <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                  <option>💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)</option>
                  <option>💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)</option>
                  <option>💎 ₹4,00,000+ (Ultra Luxury)</option>
                  <option>🎒 Under ₹75,000 (Budget Explorer)</option>
                </select>
              </div>
            </div>

            {/* Travelers */}
            <div className="input-box">
              <label>Travelers</label>
              <div className="input-inner">
                <i className="fa-solid fa-user-group"></i>
                <input
                  type="text"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                />
              </div>
            </div>

            {/* Generate button */}
            <button className="btn-search btn-ai-sparkle" onClick={handleGenerate}>
              <i className="fa-solid fa-wand-magic-sparkles"></i> Plan Journey
            </button>
          </div>
        ) : (
          /* Classic Booking Inputs */
          <div className="search-fields">
            <div className="input-box">
              <label>From</label>
              <div className="input-inner">
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" defaultValue="New York (NYC)" />
              </div>
            </div>
            <div className="input-box">
              <label>To</label>
              <div className="input-inner">
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" defaultValue="Paris, France" />
              </div>
            </div>
            <div className="input-box">
              <label>Check-in</label>
              <div className="input-inner">
                <input type="text" defaultValue="May 20, 2025" />
                <i className="fa-regular fa-calendar"></i>
              </div>
            </div>
            <div className="input-box">
              <label>Check-out</label>
              <div className="input-inner">
                <input type="text" defaultValue="May 27, 2025" />
                <i className="fa-regular fa-calendar"></i>
              </div>
            </div>
            <div className="input-box">
              <label>Travelers</label>
              <div className="input-inner">
                <input type="text" defaultValue="2 Adults, 1 Child" />
                <i className="fa-solid fa-user-group"></i>
              </div>
            </div>
            <button className="btn-search">Search Now</button>
          </div>
        )}

        {/* Quick AI Prompts Bar */}
        <div className="ai-quick-prompts">
          <span className="ai-prompt-label">
            <i className="fa-solid fa-bolt" style={{ color: '#ff9800' }}></i> Quick AI Prompts:
          </span>
          <button
            className="quick-chip"
            onClick={() =>
              handleQuickPrompt(
                'Kyoto & Tokyo, Japan',
                '🥢 Foodie & Nightlife',
                '7 Days • Autumn',
                '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
              )
            }
          >
            🇯🇵 7-Day Japan Ramen &amp; Temples
          </button>
          <button
            className="quick-chip"
            onClick={() =>
              handleQuickPrompt(
                'Swiss Alps & Lakes',
                '⛰ Adventure & Scenic',
                '5 Days • Summer',
                '💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)'
              )
            }
          >
            🇨🇭 5-Day Swiss Glaciers &amp; Scenic Trains
          </button>
          <button
            className="quick-chip"
            onClick={() =>
              handleQuickPrompt(
                'Amalfi Coast & Rome',
                '⛪ Art & Deep Culture',
                '8 Days • Spring',
                '💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)'
              )
            }
          >
            🇮🇹 Amalfi Coast &amp; Historic Rome
          </button>
          <button
            className="quick-chip"
            onClick={() =>
              handleQuickPrompt(
                'Bali & Nusa Penida',
                '🕉 Relax & Wellness',
                '10 Days • Tropical',
                '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
              )
            }
          >
            🏝️ Bali Wellness &amp; Waterfall Quest
          </button>
        </div>
      </div>
    </section>
  )
}
