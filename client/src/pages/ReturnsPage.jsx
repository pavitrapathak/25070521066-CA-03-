import React from 'react'

export default function ReturnsPage({ onNavigate }) {
  return (
    <div className="legal-page container">
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-arrow-rotate-left"></i> Peace of Mind
        </div>
        <h1 className="page-title">Cancellations &amp; Refund Policy</h1>
        <p className="page-subtitle">Transparent refund tiers, 24-hour full refund cooling-off, and automated delay credits.</p>
      </div>

      <div className="legal-content-card">
        <h3>1. 24-Hour Zero-Fee Cancellation Window</h3>
        <p>
          Every booking made on Travelora AI comes with a complimentary <strong>24-hour cooling-off guarantee</strong>.
          If your plans change or you entered passenger details incorrectly, cancel within 24 hours of confirmation
          for a 100% full refund back to your original payment method with zero penalty fees.
        </p>

        <h3>2. Cancellation Timeline &amp; Refund Tiers</h3>
        <div className="refund-tiers-table">
          <div className="tier-row header">
            <span>Notice Period Prior to Departure</span>
            <span>Standard Refund Eligibility</span>
            <span>With AI Shield Protection</span>
          </div>
          <div className="tier-row">
            <span>Within 24 Hours of Booking</span>
            <strong style={{ color: '#10b981' }}>100% Full Cash Refund</strong>
            <strong style={{ color: '#10b981' }}>100% Full Cash Refund</strong>
          </div>
          <div className="tier-row">
            <span>30+ Days Prior to Departure</span>
            <span>85% Refund (less carrier fees)</span>
            <strong style={{ color: '#10b981' }}>100% Cash / Travel Credit</strong>
          </div>
          <div className="tier-row">
            <span>14 to 29 Days Prior to Departure</span>
            <span>50% Travel Credit</span>
            <strong style={{ color: '#10b981' }}>90% Refund</strong>
          </div>
          <div className="tier-row">
            <span>Less than 48 Hours Prior</span>
            <span>Subject to Carrier Discretion</span>
            <span>Instant Re-booking Voucher</span>
          </div>
        </div>

        <h3 style={{ marginTop: '28px' }}>3. How to Initiate a Refund</h3>
        <p>
          You can request a cancellation directly through the{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('help')
            }}
            style={{ color: '#1565d8', fontWeight: 600, textDecoration: 'underline' }}
          >
            Booking Help Center
          </a>{' '}
          by entering your Reference Code, or by messaging our 24/7 Concierge. Approved refunds process
          automatically to your card within 3-5 business days.
        </p>
      </div>
    </div>
  )
}
