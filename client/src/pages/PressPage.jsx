import React, { useState } from 'react'

export default function PressPage() {
  const [inquiryName, setInquiryName] = useState('')
  const [inquiryOutlet, setInquiryOutlet] = useState('')
  const [inquiryEmail, setInquiryEmail] = useState('')
  const [inquiryMsg, setInquiryMsg] = useState('')
  const [sent, setSent] = useState(false)

  const pressArticles = [
    {
      source: 'TechCrunch',
      logo: 'fa-solid fa-newspaper',
      date: 'September 2026',
      title: 'Travelora Raises ₹180 Crore ($22M) Series A to Replace 20-Tab Vacation Planning with Multi-Modal AI',
      quote: '"Travelora is fundamentally rethinking travel from the ground up by combining autonomous itinerary generation with real-time rail and airline API execution."'
    },
    {
      source: 'Forbes',
      logo: 'fa-solid fa-award',
      date: 'August 2026',
      title: 'How Travelora AI is Solving the Over-Tourism Epidemic with Dynamic Routing',
      quote: '"By nudging travelers towards hidden local gems and avoiding peak crowd bottlenecks, Travelora delivers better vacations while easing strain on historic cities."'
    },
    {
      source: 'Bloomberg Technology',
      logo: 'fa-solid fa-chart-line',
      date: 'June 2026',
      title: 'The AI Travel Assistant That Actually Books Your Flights and Trains in Seconds',
      quote: '"Unlike generic LLM chats that hallucinate closed attractions, Travelora tests every recommendation against real-time operational feeds."'
    }
  ]

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setInquiryName('')
      setInquiryOutlet('')
      setInquiryEmail('')
      setInquiryMsg('')
      alert('Press inquiry received. Our communications team will respond within 24 hours.')
    }, 1000)
  }

  return (
    <div className="press-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-bullhorn"></i> Newsroom &amp; Media Kit
        </div>
        <h1 className="page-title">Press &amp; Editorial Coverage</h1>
        <p className="page-subtitle">
          Read what global publications, industry analysts, and technology journalists are saying about
          Travelora AI.
        </p>
      </div>

      {/* Featured Press Grid */}
      <div className="press-cards-grid">
        {pressArticles.map((art, i) => (
          <div key={i} className="press-card">
            <div className="press-source-row">
              <span className="press-source-badge">{art.source}</span>
              <span className="press-date">{art.date}</span>
            </div>
            <h3 className="press-card-title">{art.title}</h3>
            <p className="press-card-quote">{art.quote}</p>
            <div style={{ marginTop: '16px' }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert(`Opening complete coverage archive for ${art.source}`)
                }}
                className="deal-link"
              >
                Read Article &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Assets Box */}
      <div className="press-kit-box" style={{ marginTop: '50px' }}>
        <div className="press-kit-info">
          <i className="fa-solid fa-folder-open" style={{ fontSize: '32px', color: '#1565d8' }}></i>
          <div>
            <h3>Official Press Kit &amp; Media Assets</h3>
            <p>Download high-resolution SVG logos, product mockups, and executive photography.</p>
          </div>
        </div>
        <button
          className="btn-book-now"
          onClick={() => alert('Media Kit (.ZIP) download initiated with brand guidelines, vector logos, and executive headshots.')}
        >
          <i className="fa-solid fa-download"></i> Download Press Kit (.ZIP)
        </button>
      </div>

      {/* Media Inquiries Form */}
      <div className="press-inquiry-box" style={{ marginTop: '40px' }}>
        <h3>Media &amp; Press Inquiries</h3>
        <p>Are you a journalist or podcaster writing about travel technology, autonomous AI, or tourism?</p>

        <form onSubmit={handleInquirySubmit} className="booking-form-grid" style={{ marginTop: '20px' }}>
          <div className="input-box auth-input">
            <label>Your Name</label>
            <div className="input-inner">
              <input
                type="text"
                required
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                placeholder="Sarah Miller"
              />
            </div>
          </div>

          <div className="input-box auth-input">
            <label>Media Outlet / Publication</label>
            <div className="input-inner">
              <input
                type="text"
                required
                value={inquiryOutlet}
                onChange={(e) => setInquiryOutlet(e.target.value)}
                placeholder="The Wall Street Journal / BBC"
              />
            </div>
          </div>

          <div className="input-box auth-input" style={{ gridColumn: 'span 2' }}>
            <label>Work Email</label>
            <div className="input-inner">
              <input
                type="email"
                required
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                placeholder="sarah@media.com"
              />
            </div>
          </div>

          <div className="input-box auth-input" style={{ gridColumn: 'span 2' }}>
            <label>Inquiry Details &amp; Deadline</label>
            <div className="input-inner">
              <textarea
                rows={3}
                required
                value={inquiryMsg}
                onChange={(e) => setInquiryMsg(e.target.value)}
                placeholder="Please include story angle and timeline..."
                style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn-book-now" disabled={sent}>
              {sent ? 'Sending...' : 'Send Press Inquiry &rarr;'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
