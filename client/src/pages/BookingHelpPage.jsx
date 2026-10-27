import React, { useState } from 'react'

export default function BookingHelpPage({ onNavigate, userBookings = [] }) {
  const [lookupRef, setLookupRef] = useState('')
  const [searchedBooking, setSearchedBooking] = useState(null)
  const [notFound, setNotFound] = useState(false)

  const handleLookup = (e) => {
    e.preventDefault()
    setNotFound(false)
    const cleanRef = lookupRef.trim().toUpperCase()
    const found = userBookings.find((b) => b.referenceCode.toUpperCase() === cleanRef)
    if (found) {
      setSearchedBooking(found)
    } else {
      // Demo fallback mock
      if (cleanRef.startsWith('TRV')) {
        setSearchedBooking({
          referenceCode: cleanRef,
          tripTitle: 'Kyoto & Tokyo, Japan — 7-Day AI Itinerary',
          dates: '7 Days • Foodie & Culture',
          travelers: '2 Adults',
          totalAmount: 1850,
          passenger: 'Alex Rivera'
        })
      } else {
        setNotFound(true)
        setSearchedBooking(null)
      }
    }
  }

  return (
    <div className="help-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-life-ring"></i> Travel Support Center
        </div>
        <h1 className="page-title">Booking Help &amp; Live Trip Status</h1>
        <p className="page-subtitle">
          Manage your confirmed bookings, download replacement e-tickets, request itinerary schedule adjustments,
          or check live flight telemetry.
        </p>
      </div>

      {/* Booking Lookup Card */}
      <div className="generator-input-card" style={{ maxWidth: '720px', margin: '0 auto 40px auto' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#1565d8' }}></i> Find Your Booking
        </h3>
        <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '16px' }}>
          Enter your 6-digit Travelora reference code (e.g. <strong>TRV-894120</strong>) found on your confirmation
          email.
        </p>

        <form onSubmit={handleLookup} style={{ display: 'flex', gap: '10px' }}>
          <div className="input-inner" style={{ flex: 1 }}>
            <i className="fa-solid fa-ticket"></i>
            <input
              type="text"
              placeholder="e.g. TRV-123456"
              value={lookupRef}
              onChange={(e) => setLookupRef(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-book-now">
            Lookup Status
          </button>
        </form>

        {notFound && (
          <div className="booking-not-found" style={{ marginTop: '14px', color: '#ef4444', fontSize: '13px' }}>
            <i className="fa-solid fa-circle-exclamation"></i> Reference code not found. Please try typing{' '}
            <strong>TRV-894120</strong> or check your confirmation email.
          </div>
        )}

        {searchedBooking && (
          <div className="confirmed-ticket-card" style={{ marginTop: '20px' }}>
            <div className="ticket-top">
              <div>
                <span className="ticket-label">FOUND BOOKING</span>
                <div className="ticket-ref">{searchedBooking.referenceCode}</div>
              </div>
              <span className="booking-status-tag">Active &amp; Confirmed</span>
            </div>
            <div className="ticket-middle">
              <div>
                <span className="ticket-label">JOURNEY</span>
                <div className="ticket-val">{searchedBooking.tripTitle}</div>
              </div>
              <div>
                <span className="ticket-label">PASSENGERS</span>
                <div className="ticket-val">{searchedBooking.travelers} ({searchedBooking.passenger})</div>
              </div>
            </div>
            <div className="success-actions-row" style={{ marginTop: '14px' }}>
              <button
                className="quick-chip"
                onClick={() => alert(`Downloaded latest e-Ticket PDF for ${searchedBooking.referenceCode}`)}
              >
                <i className="fa-solid fa-file-pdf" style={{ color: '#ef4444' }}></i> Download e-Tickets
              </button>
              <button
                className="quick-chip"
                onClick={() => alert(`Contacting 24/7 concierge for rescheduling ${searchedBooking.referenceCode}`)}
              >
                <i className="fa-solid fa-arrows-rotate" style={{ color: '#1565d8' }}></i> Reschedule Dates
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Self Service Guides */}
      <div className="help-guides-grid">
        <div className="help-guide-card">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <h4>How to Add Your Itinerary to Apple/Google Wallet</h4>
          <p>Learn how to save your boarding passes, hotel codes, and train QR tickets for offline access.</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              alert('Follow instructions sent in your confirmation email: click "Add to Apple/Google Wallet" from your phone.')
            }}
          >
            Read Guide &rarr;
          </a>
        </div>

        <div className="help-guide-card">
          <i className="fa-solid fa-calendar-xmark"></i>
          <h4>How to Cancel or Request a Full Refund</h4>
          <p>All bookings have a 24-hour zero-penalty window. Check our refund timeline calculator.</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('returns')
            }}
          >
            Refund Policy &rarr;
          </a>
        </div>

        <div className="help-guide-card">
          <i className="fa-solid fa-shield-virus"></i>
          <h4>Filing an AI Travel Shield Claim</h4>
          <p>Instant photo upload for flight delays, lost baggage, or hospital receipts with payout in 48h.</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              alert('Opening Travelora Shield Claims portal...')
            }}
          >
            Submit Claim &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
