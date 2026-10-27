import React, { useState } from 'react'
import { sampleItineraries } from '../data/itineraries.js'

export default function AiPlannerPage({ onGenerateTrip, onBookTrip, onAddToWishlist }) {
  const [activeTab, setActiveTab] = useState('generator')
  const [dest, setDest] = useState('Kyoto & Tokyo, Japan')
  const [style, setStyle] = useState('🥢 Foodie & Nightlife')
  const [duration, setDuration] = useState('7 Days')
  const [budget, setBudget] = useState('💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)')
  const [pace, setPace] = useState('Optimal (10,000 steps/day)')
  const [travelers, setTravelers] = useState('2 Adults')
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentPlan, setCurrentPlan] = useState(sampleItineraries.japan)
  const [activeDayIdx, setActiveDayIdx] = useState(0)

  // Multi-city states
  const [multiCities, setMultiCities] = useState(['Paris, France', 'Zurich, Switzerland', 'Milan, Italy', 'Rome, Italy'])
  const [newCity, setNewCity] = useState('')
  const [transitOptimized, setTransitOptimized] = useState(true)

  // Flights states
  const [flightOrigin, setFlightOrigin] = useState('New Delhi (DEL)')
  const [flightDest, setFlightDest] = useState('Tokyo (HND)')
  const [flightDate, setFlightDate] = useState('2026-11-12')
  const [searchedFlights, setSearchedFlights] = useState([
    {
      id: 'fl-1',
      airline: 'Japan Airlines (JAL)',
      flightNo: 'JL 005',
      route: 'JFK → HND',
      depart: '11:30 AM',
      arrive: '03:15 PM (+1d)',
      duration: '14h 45m',
      stops: 'Non-stop',
      price: '₹74,999',
      badge: 'Fastest Route',
      badgeColor: 'badge-blue'
    },
    {
      id: 'fl-2',
      airline: 'ANA All Nippon Airways',
      flightNo: 'NH 109',
      route: 'DEL → HND',
      depart: '04:45 PM',
      arrive: '08:40 PM (+1d)',
      duration: '9h 55m',
      stops: 'Non-stop',
      price: '₹69,999',
      badge: 'Best Value',
      badgeColor: 'badge-green'
    },
    {
      id: 'fl-3',
      airline: 'Air India / Singapore Airlines',
      flightNo: 'AI 306',
      route: 'DEL → HND',
      depart: '09:15 AM',
      arrive: '02:00 PM (+1d)',
      duration: '11h 45m',
      stops: '1 stop (SIN)',
      price: '₹59,999',
      badge: 'Cheapest',
      badgeColor: 'badge-purple'
    }
  ])

  const handleGenerateCustom = (e) => {
    e.preventDefault()
    setIsGenerating(true)
    setTimeout(() => {
      const lower = dest.toLowerCase()
      if (lower.includes('swiss') || lower.includes('alps') || lower.includes('zurich')) {
        setCurrentPlan(sampleItineraries.swiss)
      } else if (lower.includes('bali') || lower.includes('indonesia')) {
        setCurrentPlan(sampleItineraries.bali)
      } else if (lower.includes('italy') || lower.includes('rome') || lower.includes('amalfi')) {
        setCurrentPlan(sampleItineraries.amalfi)
      } else if (lower.includes('iceland') || lower.includes('aurora')) {
        setCurrentPlan(sampleItineraries.iceland)
      } else if (lower.includes('paris') || lower.includes('france')) {
        setCurrentPlan(sampleItineraries.paris)
      } else {
        // Dynamic plan
        setCurrentPlan({
          id: 'custom-' + Date.now(),
          title: `${dest} — Custom AI Autonomous Itinerary`,
          match: '98% Neural Match',
          destination: dest,
          vibe: `${style} • Handpicked Route`,
          budget: `${budget} (Estimated Total)`,
          pace: pace,
          weather: '⛅ 22°C • Ideal Travel Conditions',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
          days: [
            {
              day: 1,
              label: 'Day 1: Arrival, Check-in & Neighborhood Exploration',
              events: [
                {
                  time: '11:00 AM',
                  title: `Touchdown & Express Transfer in ${dest}`,
                  desc: 'Pick up luggage and take the smart autonomous rail link directly to your central hotel district.',
                  tip: 'AI Tip: Use contactless tap on metro turns to save 15%.'
                },
                {
                  time: '03:30 PM',
                  title: 'Local Historic Center Stroll & Artisan Cafes',
                  desc: `Acclimate yourself with scenic cobblestone squares, local bakeries, and photo viewpoints in ${dest}.`,
                  tip: 'Crowd tracker shows low density in late afternoon.'
                },
                {
                  time: '07:30 PM',
                  title: 'Welcome Dinner: Authentic Regional Gastronomy',
                  desc: 'Indulge in seasonal specialties and local wines at a recommended hidden family-run tavern.',
                  tip: 'Table reservation recommended 48 hours ahead.'
                }
              ]
            },
            {
              day: 2,
              label: 'Day 2: Iconic Landmarks & Secret Local Gems',
              events: [
                {
                  time: '09:00 AM',
                  title: 'VIP Morning Access to Top Cultural Landmark',
                  desc: 'Skip the standard 2-hour queue with Travelora pre-verified fast-track pass.',
                  tip: 'Best light for photography occurs before 10:30 AM.'
                },
                {
                  time: '02:00 PM',
                  title: 'Scenic Panorama Viewpoint & Local Craft Market',
                  desc: 'Enjoy elevated views across the city skyline followed by handmade souvenirs.',
                  tip: 'Support local artisans in the historic quarter.'
                }
              ]
            }
          ]
        })
      }
      setIsGenerating(false)
      setActiveDayIdx(0)
    }, 1000)
  }

  const handleAddCity = () => {
    if (newCity.trim() && !multiCities.includes(newCity.trim())) {
      setMultiCities([...multiCities, newCity.trim()])
      setNewCity('')
    }
  }

  const handleRemoveCity = (cityToRemove) => {
    setMultiCities(multiCities.filter((c) => c !== cityToRemove))
  }

  return (
    <div className="planner-page container">
      {/* Page Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-wand-magic-sparkles"></i> Autonomous AI Engine v2.4
        </div>
        <h1 className="page-title">AI Trip Intelligence Studio</h1>
        <p className="page-subtitle">
          Generate bespoke hour-by-hour itineraries, optimize complex multi-country transit routes, or inspect
          real-time flight and boutique stay pairings.
        </p>
      </div>

      {/* Tabs */}
      <div className="planner-main-tabs">
        <button
          className={`planner-tab-btn ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          <i className="fa-solid fa-wand-magic-sparkles"></i> 1. AI Trip Generator
        </button>
        <button
          className={`planner-tab-btn ${activeTab === 'multicity' ? 'active' : ''}`}
          onClick={() => setActiveTab('multicity')}
        >
          <i className="fa-solid fa-route"></i> 2. Multi-City Transit Optimizer
        </button>
        <button
          className={`planner-tab-btn ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          <i className="fa-solid fa-plane"></i> 3. Direct Flights &amp; Hotel Pairs
        </button>
      </div>

      {/* TAB 1: GENERATOR */}
      {activeTab === 'generator' && (
        <div className="planner-tab-content">
          <form onSubmit={handleGenerateCustom} className="generator-input-card">
            <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-sliders" style={{ color: '#1565d8' }}></i> Customize Your AI Journey Parameters
            </h3>

            <div className="generator-inputs-grid">
              <div className="input-box">
                <label>Destination (City or Region)</label>
                <div className="input-inner">
                  <i className="fa-solid fa-location-dot"></i>
                  <input
                    type="text"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    placeholder="e.g. Kyoto, Swiss Alps, Iceland, Paris..."
                    required
                  />
                </div>
              </div>

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

              <div className="input-box">
                <label>Trip Duration</label>
                <div className="input-inner">
                  <i className="fa-regular fa-calendar"></i>
                  <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option>3 Days (Weekend Escape)</option>
                    <option>5 Days (Highlights Tour)</option>
                    <option>7 Days (Comprehensive Week)</option>
                    <option>10 Days (Deep Immersion)</option>
                    <option>14 Days (Grand Odyssey)</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Target Budget</label>
                <div className="input-inner">
                  <i className="fa-solid fa-wallet"></i>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option>🎒 Under ₹75,000 (Budget Explorer)</option>
                    <option>💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)</option>
                    <option>💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)</option>
                    <option>💎 ₹4,00,000+ (Ultra Luxury)</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Daily Travel Pace</label>
                <div className="input-inner">
                  <i className="fa-solid fa-person-walking"></i>
                  <select value={pace} onChange={(e) => setPace(e.target.value)}>
                    <option>🕉 Relaxed (Late mornings &amp; relaxed cafes)</option>
                    <option>Optimal (10,000 steps/day • balanced)</option>
                    <option>⚡ High Energy (Pack every landmark &amp; viewpoint)</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Travelers</label>
                <div className="input-inner">
                  <i className="fa-solid fa-user-group"></i>
                  <select value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                    <option>1 Solo Explorer</option>
                    <option>2 Adults (Couple)</option>
                    <option>3-4 Friends</option>
                    <option>Family with Kids</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                type="submit"
                className="btn-book-now"
                style={{ padding: '12px 28px', fontSize: '14px' }}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Neural Engine Synthesizing...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Generate AI Itinerary
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Generated Result Display */}
          {currentPlan && (
            <div className="planner-result-card" style={{ marginTop: '30px' }}>
              <div className="planner-plan-header">
                <div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="ai-match-badge">{currentPlan.match}</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#10b981' }}>
                      <i className="fa-solid fa-circle-check"></i> Crowd &amp; Weather Validated
                    </span>
                  </div>
                  <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 8px 0' }}>{currentPlan.title}</h2>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', color: '#64748b', fontSize: '13px' }}>
                    <span>
                      <i className="fa-solid fa-cloud-sun" style={{ color: '#f59e0b' }}></i> {currentPlan.weather}
                    </span>
                    <span>
                      <i className="fa-solid fa-person-walking" style={{ color: '#10b981' }}></i> {currentPlan.pace}
                    </span>
                    <span>
                      <i className="fa-solid fa-coins" style={{ color: '#1565d8' }}></i> {currentPlan.budget}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    className="quick-chip"
                    onClick={() => {
                      onAddToWishlist && onAddToWishlist(currentPlan)
                      alert('Saved to your Wishlist!')
                    }}
                  >
                    <i className="fa-regular fa-heart" style={{ color: '#ef4444' }}></i> Save Trip
                  </button>
                  <button
                    className="btn-book-now"
                    onClick={() => onBookTrip && onBookTrip(currentPlan)}
                  >
                    <i className="fa-solid fa-plane-circle-check"></i> Book Complete Trip
                  </button>
                </div>
              </div>

              {/* Day Selector */}
              <div className="ai-day-tabs" style={{ marginTop: '24px' }}>
                {currentPlan.days?.map((d, idx) => (
                  <button
                    key={idx}
                    className={`ai-day-btn ${activeDayIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveDayIdx(idx)}
                  >
                    {d.label.split(':')[0]}
                  </button>
                ))}
              </div>

              {/* Active Day Events Timeline */}
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
                  {currentPlan.days?.[activeDayIdx]?.label}
                </h4>
                {currentPlan.days?.[activeDayIdx]?.events?.map((ev, i) => (
                  <div key={i} className="ai-timeline-item">
                    <div className="timeline-time">{ev.time}</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>{ev.title}</h5>
                      <p>{ev.desc}</p>
                      {ev.tip && (
                        <div className="ai-insider-tip">
                          <i className="fa-solid fa-lightbulb"></i> {ev.tip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: MULTI-CITY ROUTE OPTIMIZER */}
      {activeTab === 'multicity' && (
        <div className="planner-tab-content">
          <div className="generator-input-card">
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
              <i className="fa-solid fa-route" style={{ color: '#1565d8' }}></i> Smart Multi-City Transit Optimizer
            </h3>
            <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '20px' }}>
              Our Dijkstra neural graph evaluates thousands of train routes and flight connections to order your
              destinations for minimum travel fatigue and lowest transit cost.
            </p>

            <div className="multicity-city-chips-box">
              {multiCities.map((c, i) => (
                <div key={i} className="multicity-chip">
                  <span className="multicity-step-idx">{i + 1}</span>
                  <span>{c}</span>
                  {multiCities.length > 2 && (
                    <button className="multicity-del" onClick={() => handleRemoveCity(c)}>
                      &times;
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <input
                type="text"
                placeholder="Add another city (e.g. Venice, Amsterdam, Florence)..."
                className="spotlight-input"
                style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px 14px' }}
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleAddCity()
                  }
                }}
              />
              <button type="button" className="quick-chip" onClick={handleAddCity}>
                <i className="fa-solid fa-plus"></i> Add Stop
              </button>
            </div>
          </div>

          {/* Route Optimization Result */}
          <div className="planner-result-card" style={{ marginTop: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span className="badge-pill badge-green">99.2% Transit Efficiency</span>
                <h3 style={{ fontSize: '19px', marginTop: '8px' }}>Optimal Route Sequence</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Estimated Rail/Flight Pass</span>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)' }}>₹39,999 Total</div>
              </div>
            </div>

            <div className="multicity-route-visual">
              {multiCities.map((city, idx) => (
                <React.Fragment key={idx}>
                  <div className="multicity-node">
                    <div className="node-circle">{idx + 1}</div>
                    <div className="node-city">{city.split(',')[0]}</div>
                    <div className="node-stay">2 Nights</div>
                  </div>
                  {idx < multiCities.length - 1 && (
                    <div className="multicity-connector">
                      <div className="connector-line"></div>
                      <span className="connector-badge">
                        <i className="fa-solid fa-train"></i> ~3h 15m
                      </span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                className="btn-book-now"
                onClick={() =>
                  onBookTrip &&
                  onBookTrip({
                    title: `Multi-City Europe Grand Tour (${multiCities.length} Cities)`,
                    duration: `${multiCities.length * 2 + 1} Days`,
                    price: '₹1,59,999',
                    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
                  })
                }
              >
                <i className="fa-solid fa-ticket"></i> Book Unified Multi-City Passes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FLIGHTS & HOTELS */}
      {activeTab === 'flights' && (
        <div className="planner-tab-content">
          <div className="generator-input-card">
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>
              <i className="fa-solid fa-plane" style={{ color: '#1565d8' }}></i> Live AI Flight Radar &amp; Fare Predictor
            </h3>

            <div className="generator-inputs-grid">
              <div className="input-box">
                <label>Origin</label>
                <div className="input-inner">
                  <i className="fa-solid fa-plane-departure"></i>
                  <input
                    type="text"
                    value={flightOrigin}
                    onChange={(e) => setFlightOrigin(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-box">
                <label>Destination</label>
                <div className="input-inner">
                  <i className="fa-solid fa-plane-arrival"></i>
                  <input
                    type="text"
                    value={flightDest}
                    onChange={(e) => setFlightDest(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-box">
                <label>Departure Date</label>
                <div className="input-inner">
                  <i className="fa-regular fa-calendar"></i>
                  <input
                    type="date"
                    value={flightDate}
                    onChange={(e) => setFlightDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Flights list */}
          <div style={{ marginTop: '24px' }}>
            <h4 style={{ fontSize: '17px', marginBottom: '14px', fontWeight: 700 }}>
              Available Flights ({flightOrigin} &rarr; {flightDest})
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {searchedFlights.map((f) => (
                <div key={f.id} className="flight-deal-card">
                  <div className="flight-airline-col">
                    <i className="fa-solid fa-plane-up" style={{ color: '#1565d8', fontSize: '18px' }}></i>
                    <div>
                      <strong>{f.airline}</strong>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>Flight {f.flightNo}</div>
                    </div>
                  </div>

                  <div className="flight-times-col">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '16px', fontWeight: 700 }}>{f.depart}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{f.route.split('→')[0]}</div>
                    </div>
                    <div className="flight-duration-line">
                      <span style={{ fontSize: '10.5px', color: '#64748b' }}>{f.duration}</span>
                      <div className="flight-bar"></div>
                      <span style={{ fontSize: '10.5px', color: '#10b981', fontWeight: 600 }}>{f.stops}</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '16px', fontWeight: 700 }}>{f.arrive}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{f.route.split('→')[1]}</div>
                    </div>
                  </div>

                  <div className="flight-price-col">
                    <span className={`badge-pill ${f.badgeColor}`}>{f.badge}</span>
                    <div className="flight-price-amount">{f.price}</div>
                    <button
                      className="btn-book-now"
                      style={{ padding: '8px 16px', fontSize: '12px' }}
                      onClick={() =>
                        onBookTrip &&
                        onBookTrip({
                          title: `${f.airline} (${f.route})`,
                          duration: 'Roundtrip Ticket',
                          price: f.price,
                          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
                        })
                      }
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
