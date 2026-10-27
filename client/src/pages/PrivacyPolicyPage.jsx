import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page container">
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-lock"></i> Trust &amp; Security
        </div>
        <h1 className="page-title">Privacy &amp; Data Protection Policy</h1>
        <p className="page-subtitle">Last Updated: October 2026 &bull; Effective Globally</p>
      </div>

      <div className="legal-content-card">
        <h3>1. Our Commitment to Your Privacy</h3>
        <p>
          At Travelora Technologies Inc. ("Travelora", "we", "our"), we respect your privacy and are committed
          to protecting your personal information. This Privacy Policy details how we collect, process, and secure
          your data when you use our autonomous AI travel engine, website, and concierge services.
        </p>

        <h3>2. Information We Collect</h3>
        <p>We collect information you explicitly provide to us when creating itineraries and booking travel:</p>
        <ul>
          <li>
            <strong>Identity Data:</strong> Full name, passport/ID numbers, date of birth, and nationality required
            by international airline and border authorities.
          </li>
          <li>
            <strong>Contact Data:</strong> Email address, mobile telephone number for flight dispatch alerts, and
            billing address.
          </li>
          <li>
            <strong>Travel Preference Data:</strong> Dietary requirements, walking pace, budget constraints, and
            trip vibe preferences used by our neural engine to synthesize personalized routes.
          </li>
          <li>
            <strong>Payment Data:</strong> All financial transactions are tokenized via PCI-DSS Level 1 certified
            payment processors (Stripe, Apple Pay, PayPal). We never store raw credit card numbers.
          </li>
        </ul>

        <h3>3. How AI Models Use Your Data</h3>
        <p>
          Your personal identifying information (PII) is <strong>never</strong> used to train public LLM weights.
          Travel prompts are anonymized and stripped of identifying telemetry prior to feeding into route
          optimization models.
        </p>

        <h3>4. Your Rights under GDPR and CCPA</h3>
        <p>
          You retain full rights to request access to your stored data, rectify inaccuracies, or exercise your
          "Right to be Forgotten" (complete account and data deletion) by emailing{' '}
          <strong>privacy@travelora.com</strong>.
        </p>
      </div>
    </div>
  )
}
