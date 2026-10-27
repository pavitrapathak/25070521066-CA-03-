import React, { useState, useEffect } from 'react'

export default function AiItineraryModal({ isOpen, onClose, plan, isLoading, onBookTrip }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0)

  useEffect(() => {
    setActiveDayIdx(0)
  }, [plan])

  if (!isOpen) return null

  return (
    <div
      className={`ai-modal-backdrop ${isOpen ? 'show' : ''}`}
      onClick={(e) => {
        if (e.target.classList.contains('ai-modal-backdrop')) {
          onClose()
        }
      }}
    >
      <div className="ai-modal">
        {/* Header */}
        <div className="ai-modal-header">
          <div className="ai-modal-title-box">
            <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#ff5722' }}></i>
            <h3>{isLoading ? 'Generating Your AI Journey...' : plan?.title || 'AI Itinerary Plan'}</h3>
          </div>
          <button className="ai-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="ai-modal-body">
          {isLoading ? (
            <div className="ai-loading-box">
              <div className="ai-spinner"></div>
              <div className="ai-step-text">🧠 Synthesizing travel style, pace, and preferences...</div>
              <div className="ai-step-sub">
                Evaluating 12,000+ flight routes, opening hours, crowd heatmaps, and local weather patterns
              </div>
            </div>
          ) : plan ? (
            <>
              {/* Result Summary Bar */}
              <div className="ai-result-hero">
                <div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '6px', alignItems: 'center' }}>
                    <span className="ai-match-badge">{plan.match}</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#10b981' }}>
                      <i className="fa-solid fa-bolt"></i> Verified Autonomous Route
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    {plan.vibe}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                    <i className="fa-solid fa-cloud-sun" style={{ color: '#f59e0b' }}></i> {plan.weather} &bull;{' '}
                    <i className="fa-solid fa-person-walking" style={{ color: '#10b981' }}></i> {plan.pace}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
                    Estimated Budget
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary)' }}>
                    {plan.budget?.split(' ')[0]}
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>All-inclusive estimate</div>
                </div>
              </div>

              {/* Day Tabs */}
              <div className="ai-day-tabs">
                {plan.days?.map((day, idx) => (
                  <button
                    key={idx}
                    className={`ai-day-btn ${activeDayIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveDayIdx(idx)}
                  >
                    {day.label.split(':')[0]}
                  </button>
                ))}
              </div>

              {/* Active Day Timeline */}
              <div>
                {plan.days?.[activeDayIdx]?.events?.map((ev, i) => (
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

              {/* Footer Actions */}
              <div className="ai-modal-footer">
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    className="quick-chip"
                    onClick={() => alert(`Trip exported! Calendar (.ics) file generated for ${plan.title}`)}
                    style={{ padding: '8px 14px', fontSize: '12px' }}
                  >
                    <i className="fa-solid fa-calendar-check" style={{ color: 'var(--primary)' }}></i> Add to Calendar
                  </button>
                  <button
                    className="quick-chip"
                    onClick={() => alert('Offline sync enabled! Itinerary saved to local cache.')}
                    style={{ padding: '8px 14px', fontSize: '12px' }}
                  >
                    <i className="fa-solid fa-mobile-screen-button" style={{ color: '#10b981' }}></i> Send to Phone
                  </button>
                </div>
                <button
                  className="btn-book-now"
                  onClick={() => {
                    onClose()
                    onBookTrip && onBookTrip(plan)
                  }}
                  style={{ padding: '10px 22px', fontSize: '13px' }}
                >
                  <i className="fa-solid fa-plane-circle-check"></i> Book Complete Trip
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
