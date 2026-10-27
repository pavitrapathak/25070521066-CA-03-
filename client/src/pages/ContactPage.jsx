import React, { useState } from 'react'

export default function ContactPage({ onNavigate }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Trip Booking Assistance')
  const [message, setMessage] = useState('')
  const [submittedTicket, setSubmittedTicket] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const ticketId = 'TCK-' + Math.floor(10000 + Math.random() * 90000)
    setSubmittedTicket({
      id: ticketId,
      name,
      email,
      subject
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="contact-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-headset"></i> 24/7 Global Concierge
        </div>
        <h1 className="page-title">We&apos;re Here to Help Every Mile of the Way</h1>
        <p className="page-subtitle">
          Have a question about an upcoming trip, need corporate group travel planning, or want to speak with
          our human concierge team? Reach out below.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Contact Info Col */}
        <div className="contact-info-col">
          <div className="contact-card-modern">
            <div className="contact-icon-box">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div>
              <h4>24/7 VIP Phone Concierge</h4>
              <p>Direct assistance for travelers on active itineraries.</p>
              <div className="contact-highlight">+1 (800) 123-4567</div>
            </div>
          </div>

          <div className="contact-card-modern">
            <div className="contact-icon-box">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>
            <div>
              <h4>Email Support</h4>
              <p>Average response time under 15 minutes.</p>
              <div className="contact-highlight">support@travelora.com</div>
            </div>
          </div>

          <div className="contact-card-modern">
            <div className="contact-icon-box">
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <div>
              <h4>Global Headquarters</h4>
              <p>Travelora Technologies Inc.</p>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                123 Travelora Plaza, Floor 14<br />
                New York, NY 10001, USA
              </div>
            </div>
          </div>

          <div className="contact-faq-callout">
            <i className="fa-solid fa-circle-question" style={{ color: '#1565d8', fontSize: '20px' }}></i>
            <div>
              <strong>Looking for instant answers?</strong>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 6px 0' }}>
                Browse our comprehensive help center.
              </p>
              <button
                className="quick-chip"
                onClick={() => onNavigate('faqs')}
                style={{ padding: '6px 12px', fontSize: '11.5px' }}
              >
                Visit FAQ &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Col */}
        <div className="contact-form-col">
          {submittedTicket ? (
            <div className="contact-success-box">
              <div className="success-confetti-circle">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3>Message Dispatched to Concierge</h3>
              <p style={{ color: '#64748b', fontSize: '14px', maxWidth: '450px', margin: '0 auto 16px auto' }}>
                Support ticket <strong>{submittedTicket.id}</strong> has been logged for{' '}
                <strong>{submittedTicket.email}</strong>. Our travel specialist team will review and reply
                shortly.
              </p>
              <button className="quick-chip" onClick={() => setSubmittedTicket(null)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="generator-input-card">
              <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Send Us a Message</h3>

              <div className="booking-form-grid">
                <div className="input-box auth-input">
                  <label>Your Name</label>
                  <div className="input-inner">
                    <i className="fa-regular fa-user"></i>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-box auth-input">
                  <label>Email Address</label>
                  <div className="input-inner">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-box auth-input" style={{ gridColumn: 'span 2' }}>
                  <label>Inquiry Topic</label>
                  <div className="input-inner">
                    <i className="fa-solid fa-tag"></i>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option>Trip Booking Assistance</option>
                      <option>Flight Re-routing or Delay Inquiry</option>
                      <option>Custom VIP / Group Corporate Itinerary</option>
                      <option>Partnership &amp; Hotel Listing</option>
                      <option>Feedback or General Question</option>
                    </select>
                  </div>
                </div>

                <div className="input-box auth-input" style={{ gridColumn: 'span 2' }}>
                  <label>Your Message / Trip Details</label>
                  <div className="input-inner">
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your destination, dates, or what we can assist with..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'vertical', fontFamily: 'inherit' }}
                    />
                  </div>
                </div>

                <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn-book-now" style={{ padding: '12px 28px' }}>
                    <i className="fa-regular fa-paper-plane"></i> Send Message
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
