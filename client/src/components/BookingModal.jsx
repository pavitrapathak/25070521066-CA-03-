import React, { useState } from 'react'

export default function BookingModal({
  isOpen,
  onClose,
  tripItem,
  onBookingConfirmed
}) {
  const [step, setStep] = useState(1)
  const [travelerName, setTravelerName] = useState('Alex Rivera')
  const [email, setEmail] = useState('alex.rivera@example.com')
  const [phone, setPhone] = useState('+1 (555) 349-8201')
  const [travelersCount, setTravelersCount] = useState(2)

  // Add-ons
  const [addInsurance, setAddInsurance] = useState(true)
  const [addEsim, setAddEsim] = useState(true)
  const [addLounge, setAddLounge] = useState(false)

  // Payment
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 9842')
  const [expiry, setExpiry] = useState('08/28')
  const [cvv, setCvv] = useState('831')
  const [promoCode, setPromoCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(0)
  const [confirmedBooking, setConfirmedBooking] = useState(null)

  if (!isOpen || !tripItem) return null

  // Calculate pricing
  const basePrice = tripItem.newPrice
    ? tripItem.newPrice
    : tripItem.price
    ? parseInt(String(tripItem.price).replace(/[^0-9]/g, '')) || 65000
    : 65000

  const insuranceCost = addInsurance ? 3499 * travelersCount : 0
  const esimCost = addEsim ? 1499 * travelersCount : 0
  const loungeCost = addLounge ? 4999 * travelersCount : 0

  const subtotal = basePrice * travelersCount + insuranceCost + esimCost + loungeCost
  const finalTotal = Math.max(0, subtotal - discountApplied)

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase().includes('25') || promoCode.toUpperCase().includes('GREECE')) {
      const discount = Math.round(subtotal * 0.15)
      setDiscountApplied(discount)
      alert(`Promo code applied! ₹${discount.toLocaleString('en-IN')} discount added to your trip.`)
    } else {
      alert('Invalid code. Try using code TRAVELORA25 or GREECE30.')
    }
  }

  const handleCompleteBooking = (e) => {
    e.preventDefault()
    const refCode = 'TRV-' + Math.floor(100000 + Math.random() * 900000)
    const newBooking = {
      id: Date.now(),
      referenceCode: refCode,
      tripTitle: tripItem.title || tripItem.name || 'AI Custom Journey',
      dates: tripItem.duration || '7 Days Journey',
      travelers: `${travelersCount} Travelers`,
      totalAmount: finalTotal,
      passenger: travelerName,
      email: email
    }
    setConfirmedBooking(newBooking)
    setStep(3)
    if (onBookingConfirmed) {
      onBookingConfirmed(newBooking)
    }
  }

  return (
    <div
      className="booking-modal-backdrop"
      onClick={(e) => {
        if (e.target.classList.contains('booking-modal-backdrop')) onClose()
      }}
    >
      <div className="booking-modal">
        {/* Header */}
        <div className="booking-modal-header">
          <div className="booking-header-title">
            <i className="fa-solid fa-plane-circle-check" style={{ color: '#1565d8' }}></i>
            <div>
              <h3>
                {step === 3
                  ? 'Booking Confirmed!'
                  : `Book Journey: ${tripItem.title || tripItem.name || 'Custom Plan'}`}
              </h3>
              <p className="booking-header-subtitle">
                {step === 1 && 'Step 1 of 2: Traveler Details & Protection'}
                {step === 2 && 'Step 2 of 2: Secure Payment & Final Review'}
                {step === 3 && 'Instant E-Tickets, Calendar Sync & 24/7 AI Concierge Ready'}
              </p>
            </div>
          </div>
          <button className="ai-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="booking-modal-body">
          {/* STEP 1: TRAVELER & EXTRAS */}
          {step === 1 && (
            <div className="booking-step-grid">
              <div className="booking-left-col">
                <h4 className="booking-section-heading">
                  <i className="fa-solid fa-user"></i> Primary Traveler
                </h4>
                <div className="booking-form-grid">
                  <div className="input-box auth-input">
                    <label>Full Name (as on Passport)</label>
                    <div className="input-inner">
                      <input
                        type="text"
                        value={travelerName}
                        onChange={(e) => setTravelerName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="input-box auth-input">
                    <label>Email (for E-Tickets & Boarding Passes)</label>
                    <div className="input-inner">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="input-box auth-input">
                    <label>Mobile Number (for WhatsApp Concierge)</label>
                    <div className="input-inner">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="input-box auth-input">
                    <label>Number of Travelers</label>
                    <div className="input-inner">
                      <select
                        value={travelersCount}
                        onChange={(e) => setTravelersCount(parseInt(e.target.value))}
                      >
                        <option value={1}>1 Solo Explorer</option>
                        <option value={2}>2 Travelers (Couple/Friends)</option>
                        <option value={3}>3 Travelers</option>
                        <option value={4}>4 Travelers (Family Package)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <h4 className="booking-section-heading" style={{ marginTop: '24px' }}>
                  <i className="fa-solid fa-wand-magic-sparkles"></i> Autonomous AI Trip Add-Ons
                </h4>

                <div className="addon-options-list">
                  <label className={`addon-card ${addInsurance ? 'selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={addInsurance}
                      onChange={(e) => setAddInsurance(e.target.checked)}
                    />
                    <div className="addon-info">
                      <div className="addon-title-row">
                        <strong>AI Travel Shield &amp; Medical Guarantee</strong>
                        <span className="addon-price">+₹3,499 / traveler</span>
                      </div>
                      <p>100% refund on flight delays, medical emergencies & baggage loss.</p>
                    </div>
                  </label>

                  <label className={`addon-card ${addEsim ? 'selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={addEsim}
                      onChange={(e) => setAddEsim(e.target.checked)}
                    />
                    <div className="addon-info">
                      <div className="addon-title-row">
                        <strong>Global Unlimited 5G eSIM</strong>
                        <span className="addon-price">+₹1,499 / traveler</span>
                      </div>
                      <p>Instant digital QR activation upon airport touchdown in 160+ countries.</p>
                    </div>
                  </label>

                  <label className={`addon-card ${addLounge ? 'selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={addLounge}
                      onChange={(e) => setAddLounge(e.target.checked)}
                    />
                    <div className="addon-info">
                      <div className="addon-title-row">
                        <strong>VIP Airport Lounge &amp; Chauffeur Transfer</strong>
                        <span className="addon-price">+₹4,999 / traveler</span>
                      </div>
                      <p>Complimentary food, drinks, fast-track security and private airport Mercedes transfer.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="booking-summary-card">
                <img
                  src={tripItem.image || 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80'}
                  alt="Trip Preview"
                  className="summary-thumb"
                />
                <h5 className="summary-trip-title">{tripItem.title || tripItem.name}</h5>
                <p className="summary-trip-sub">
                  {tripItem.duration || 'Custom Multi-Day Journey'} &bull; {travelersCount} Traveler(s)
                </p>

                <div className="summary-breakdown">
                  <div className="summary-row">
                    <span>Base Fare ({travelersCount}x ₹{basePrice.toLocaleString('en-IN')})</span>
                    <strong>₹{(basePrice * travelersCount).toLocaleString('en-IN')}</strong>
                  </div>
                  {addInsurance && (
                    <div className="summary-row">
                      <span>Travel Insurance</span>
                      <span>+₹{insuranceCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addEsim && (
                    <div className="summary-row">
                      <span>5G International eSIM</span>
                      <span>+₹{esimCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addLounge && (
                    <div className="summary-row">
                      <span>VIP Airport Lounge</span>
                      <span>+₹{loungeCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="summary-divider"></div>
                  <div className="summary-row total-row">
                    <span>Estimated Total</span>
                    <span className="total-amount">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button className="btn-book-now" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setStep(2)}>
                  Proceed to Payment &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PAYMENT & PROMO */}
          {step === 2 && (
            <form onSubmit={handleCompleteBooking} className="booking-step-grid">
              <div className="booking-left-col">
                <h4 className="booking-section-heading">
                  <i className="fa-solid fa-credit-card"></i> Payment Method
                </h4>

                <div className="payment-method-selector">
                  <button
                    type="button"
                    className={`payment-tab-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <i className="fa-solid fa-credit-card"></i> Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    className={`payment-tab-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <i className="fa-solid fa-mobile-screen"></i> UPI / GPay / PhonePe
                  </button>
                  <button
                    type="button"
                    className={`payment-tab-btn ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('netbanking')}
                  >
                    <i className="fa-solid fa-building-columns"></i> Net Banking
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="booking-form-grid" style={{ marginTop: '16px' }}>
                    <div className="input-box auth-input" style={{ gridColumn: 'span 2' }}>
                      <label>Card Number</label>
                      <div className="input-inner">
                        <i className="fa-regular fa-credit-card"></i>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="input-box auth-input">
                      <label>Expiry Date</label>
                      <div className="input-inner">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="input-box auth-input">
                      <label>Security Code (CVV)</label>
                      <div className="input-inner">
                        <input
                          type="text"
                          placeholder="CVV"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Promo Code Box */}
                <div className="promo-box" style={{ marginTop: '20px' }}>
                  <div className="input-inner" style={{ flex: 1 }}>
                    <i className="fa-solid fa-tag"></i>
                    <input
                      type="text"
                      placeholder="Have a promo code? (e.g. TRAVELORA25)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>
                  <button type="button" className="quick-chip" onClick={handleApplyPromo}>
                    Apply Code
                  </button>
                </div>

                <div className="payment-security-note">
                  <i className="fa-solid fa-lock" style={{ color: '#10b981' }}></i>
                  <span>256-Bit SSL Encrypted. PCI-DSS Certified. 24-Hour Free Cancellation.</span>
                </div>
              </div>

              {/* Final Summary */}
              <div className="booking-summary-card">
                <h5 className="summary-trip-title">{tripItem.title || tripItem.name}</h5>
                <p className="summary-trip-sub">Lead Traveler: {travelerName}</p>

                <div className="summary-breakdown">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discountApplied > 0 && (
                    <div className="summary-row" style={{ color: '#10b981' }}>
                      <span>Promo Discount</span>
                      <span>-₹{discountApplied.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="summary-divider"></div>
                  <div className="summary-row total-row">
                    <span>Total Charged</span>
                    <span className="total-amount">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <button
                    type="button"
                    className="btn-outline-sm"
                    style={{ flex: 1 }}
                    onClick={() => setStep(1)}
                  >
                    &larr; Back
                  </button>
                  <button
                    type="submit"
                    className="btn-book-now"
                    style={{ flex: 2, justifyContent: 'center' }}
                  >
                    Confirm &amp; Pay ₹{finalTotal.toLocaleString('en-IN')}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS / CONFIRMATION */}
          {step === 3 && confirmedBooking && (
            <div className="booking-success-box">
              <div className="success-confetti-circle">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3>Pack Your Bags! Your Trip is Confirmed</h3>
              <p className="success-subtitle">
                A confirmation with your e-tickets, hotel booking vouchers, and autonomous AI live itinerary
                has been dispatched to <strong>{confirmedBooking.email}</strong>.
              </p>

              <div className="confirmed-ticket-card">
                <div className="ticket-top">
                  <div>
                    <span className="ticket-label">BOOKING REFERENCE</span>
                    <div className="ticket-ref">{confirmedBooking.referenceCode}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="ticket-label">TOTAL PAID</span>
                    <div className="ticket-price">₹{confirmedBooking.totalAmount.toLocaleString('en-IN')}</div>
                  </div>
                </div>
                <div className="ticket-middle">
                  <div>
                    <span className="ticket-label">DESTINATION / PACKAGE</span>
                    <div className="ticket-val">{confirmedBooking.tripTitle}</div>
                  </div>
                  <div>
                    <span className="ticket-label">PASSENGERS</span>
                    <div className="ticket-val">{confirmedBooking.travelers} ({confirmedBooking.passenger})</div>
                  </div>
                </div>
              </div>

              <div className="success-actions-row">
                <button
                  className="quick-chip"
                  onClick={() => alert(`Calendar invite (.ics) generated and downloaded for ${confirmedBooking.tripTitle}`)}
                >
                  <i className="fa-solid fa-calendar-arrow-down" style={{ color: '#1565d8' }}></i> Download Calendar (.ics)
                </button>
                <button
                  className="quick-chip"
                  onClick={() => alert(`Boarding Pass PDF and Hotel Vouchers downloaded for Reference ${confirmedBooking.referenceCode}`)}
                >
                  <i className="fa-solid fa-file-pdf" style={{ color: '#ef4444' }}></i> Download E-Tickets PDF
                </button>
                <button
                  className="btn-book-now"
                  onClick={onClose}
                >
                  Done &amp; Explore More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
