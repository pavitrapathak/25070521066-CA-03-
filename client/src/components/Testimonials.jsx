import React, { useState } from 'react'

export default function Testimonials() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 4000)
      setEmail('')
    }
  }

  return (
    <section className="container feedback-newsletter-section">
      <div className="feedback-grid">
        {/* Testimonials */}
        <div>
          <div className="section-header" style={{ marginBottom: '16px' }}>
            <div className="section-title-wrap">
              <h2 className="section-title" style={{ fontSize: '20px' }}>
                What Travelers Say About Travelora AI
              </h2>
              <i className="fa-solid fa-sparkles" style={{ color: '#ff5722', fontSize: '13px' }}></i>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button className="slider-nav-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="slider-nav-btn">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="testimonial-cards">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="testimonial-text">
                Travelora AI created a 10-day Japan itinerary down to exact Shinkansen seats and secret ramen spots. Unbelievable precision!
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                  alt="Sophia"
                />
                <div>
                  <div className="author-name">Sophia Williams</div>
                  <div className="author-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="testimonial-text">
                The live weather rerouting saved our Swiss Alps hike by shifting the mountain pass to a clear sunny morning. Genius!
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
                  alt="James"
                />
                <div>
                  <div className="author-name">James Anderson</div>
                  <div className="author-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="testimonial-text">
                I typed &apos;peaceful coastal villages with great seafood and walking trails&apos; and got a dreamy Amalfi route in 3 seconds!
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                  alt="Olivia"
                />
                <div>
                  <div className="author-name">Olivia Martinez</div>
                  <div className="author-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="newsletter-card">
          <h3>
            Get Exclusive Offers
            <br />
            &amp; Travel Inspiration
          </h3>
          <p>Subscribe to our newsletter</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
          {subscribed && (
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#a7f3d0', fontWeight: 700 }}>
              ✓ You are subscribed to AI Travel Inspiration!
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
