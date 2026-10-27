import React from 'react'

export default function TopDeals({ onSelectDeal, onViewAllDeals }) {
  return (
    <section className="container top-deals-section" id="deals">
      <div className="deals-layout">
        {/* Left Promotional Card */}
        <div className="deals-banner-card">
          <div>
            <h3>
              Top Deals
              <br />
              This Week
            </h3>
            <p>
              Limited time offers
              <br />
              Save up to 35%!
            </p>
            <a
              href="#deals"
              className="btn-white-sm"
              onClick={(e) => {
                e.preventDefault()
                onViewAllDeals ? onViewAllDeals() : onSelectDeal && onSelectDeal({
                  dest: 'Greece & Mediterranean Islands',
                  style: '⛰ Adventure & Scenic',
                  duration: '5 Days / 4 Nights',
                  budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
                })
              }}
            >
              Grab Deals &rarr;
            </a>
          </div>
          <div className="deals-graphic">
            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80"
              alt="Airplane Globe Graphic"
              style={{ borderRadius: '8px', filter: 'brightness(1.1)' }}
            />
          </div>
        </div>

        {/* Package 1: Greece */}
        <div
          className="deal-card"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            onSelectDeal &&
            onSelectDeal({
              dest: 'Greece & Mediterranean Islands',
              style: '⛪ Art & Deep Culture',
              duration: '5 Days / 4 Nights',
              budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
            })
          }
        >
          <div className="deal-img-box">
            <img
              src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80"
              alt="Greece"
            />
            <span className="deal-badge badge-blue">Best Seller</span>
          </div>
          <div className="deal-content">
            <div>
              <h4 className="deal-title">Greece Tour</h4>
              <div className="deal-duration">5 Days / 4 Nights</div>
              <div className="deal-price-row">
                <span className="deal-old-price">₹74,999</span>
                <span className="deal-new-price">₹52,499</span>
              </div>
            </div>
            <span className="deal-link">
              View Details &rarr;
            </span>
          </div>
        </div>

        {/* Package 2: Thailand */}
        <div
          className="deal-card"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            onSelectDeal &&
            onSelectDeal({
              dest: 'Thailand Tropical Escape',
              style: '🥢 Foodie & Nightlife',
              duration: '6 Days / 5 Nights',
              budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
            })
          }
        >
          <div className="deal-img-box">
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80"
              alt="Thailand"
            />
            <span className="deal-badge badge-orange">Hot Deal</span>
          </div>
          <div className="deal-content">
            <div>
              <h4 className="deal-title">Thailand Escape</h4>
              <div className="deal-duration">6 Days / 5 Nights</div>
              <div className="deal-price-row">
                <span className="deal-old-price">₹62,999</span>
                <span className="deal-new-price">₹44,999</span>
              </div>
            </div>
            <span className="deal-link">
              View Details &rarr;
            </span>
          </div>
        </div>

        {/* Package 3: Japan */}
        <div
          className="deal-card"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            onSelectDeal &&
            onSelectDeal({
              dest: 'Kyoto & Tokyo, Japan',
              style: '🥢 Foodie & Nightlife',
              duration: '7 Days • Autumn',
              budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
            })
          }
        >
          <div className="deal-img-box">
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80"
              alt="Japan"
            />
            <span className="deal-badge badge-purple">New Offer</span>
          </div>
          <div className="deal-content">
            <div>
              <h4 className="deal-title">Japan Discovery</h4>
              <div className="deal-duration">7 Days / 6 Nights</div>
              <div className="deal-price-row">
                <span className="deal-old-price">₹1,09,999</span>
                <span className="deal-new-price">₹74,999</span>
              </div>
            </div>
            <span className="deal-link">
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
