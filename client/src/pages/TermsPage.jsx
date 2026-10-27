import React from 'react'

export default function TermsPage() {
  return (
    <div className="legal-page container">
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-file-contract"></i> Legal Agreements
        </div>
        <h1 className="page-title">Terms &amp; Conditions of Service</h1>
        <p className="page-subtitle">Last Updated: October 2026 &bull; Travelora Technologies Inc.</p>
      </div>

      <div className="legal-content-card">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By creating an account, generating an itinerary, or completing a booking via Travelora AI, you agree to
          be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree with any provision,
          please discontinue use of the platform.
        </p>

        <h3>2. Autonomous Travel Booking Engine</h3>
        <p>
          Travelora AI acts as an autonomous digital travel aggregator and technology facilitator between you and
          third-party providers (including licensed airlines, boutique hotels, rail networks, and activity
          operators). All bookings are subject to the specific fare rules and carriage terms of the underlying
          provider.
        </p>

        <h3>3. Accuracy of AI Recommendations</h3>
        <p>
          While our neural models evaluate verified schedules and opening hours in real time, unexpected local
          closures, weather emergencies, or sudden operational disruptions may occur. In such events, our 24/7 AI
          Concierge will provide automated alternative routing options without liability for acts of God.
        </p>

        <h3>4. Traveler Responsibilities</h3>
        <p>
          Travelers are solely responsible for ensuring valid passports (with at least 6 months remaining validity),
          international visas, vaccination documentation, and compliance with destination border regulations.
        </p>
      </div>
    </div>
  )
}
