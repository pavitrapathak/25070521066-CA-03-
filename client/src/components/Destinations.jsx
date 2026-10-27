import React, { useRef } from 'react'

const destinations = [
  {
    name: 'Paris, France',
    price: '₹41,999',
    rating: 4.8,
    badge: '-30%',
    badgeColor: 'badge-orange',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    prompt: {
      dest: 'Paris, France',
      style: '⛪ Art & Deep Culture',
      duration: '5 Days • Spring',
      budget: '💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)'
    }
  },
  {
    name: 'Bali, Indonesia',
    price: '₹49,999',
    rating: 4.7,
    badge: '-25%',
    badgeColor: 'badge-green',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    prompt: {
      dest: 'Bali & Nusa Penida',
      style: '🕉 Relax & Wellness',
      duration: '10 Days • Tropical',
      budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
    }
  },
  {
    name: 'Dubai, UAE',
    price: '₹74,999',
    rating: 4.9,
    badge: '-20%',
    badgeColor: 'badge-purple',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    prompt: {
      dest: 'Dubai, UAE',
      style: '💎 Ultra Luxury',
      duration: '6 Days • Winter',
      budget: '💎 ₹4,00,000+ (Ultra Luxury)'
    }
  },
  {
    name: 'Maldives',
    price: '₹66,999',
    rating: 4.9,
    badge: '-35%',
    badgeColor: 'badge-pink',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80',
    prompt: {
      dest: 'Maldives Overwater Retreat',
      style: '🕉 Relax & Wellness',
      duration: '7 Days • Summer',
      budget: '💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)'
    }
  },
  {
    name: 'Switzerland',
    price: '₹74,999',
    rating: 4.8,
    badge: '-25%',
    badgeColor: 'badge-blue',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
    prompt: {
      dest: 'Swiss Alps & Lakes',
      style: '⛰ Adventure & Scenic',
      duration: '5 Days • Summer',
      budget: '💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)'
    }
  }
]

export default function Destinations({ onSelectDestination, onViewAll }) {
  const gridRef = useRef(null)

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="container destinations-section" id="destinations">
      <div className="section-header">
        <div className="section-title-wrap">
          <h2 className="section-title">Popular Destinations</h2>
          <i className="fa-regular fa-paper-plane" style={{ color: '#1a73e8', fontSize: '15px' }}></i>
        </div>
        <a
          href="#destinations"
          className="view-all-link"
          onClick={(e) => {
            e.preventDefault()
            onViewAll && onViewAll()
          }}
        >
          View All Destinations &rarr;
        </a>
      </div>

      <div className="slider-container-relative">
        {/* Nav arrows */}
        <button className="slider-nav-btn slider-arrow-abs prev" onClick={scrollLeft} aria-label="Previous">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slider-nav-btn slider-arrow-abs next" onClick={scrollRight} aria-label="Next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <div className="destinations-grid" ref={gridRef}>
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="dest-card"
              onClick={() => onSelectDestination && onSelectDestination(dest.prompt)}
              style={{ cursor: 'pointer' }}
            >
              <img src={dest.image} alt={dest.name} />
              <div className="dest-overlay">
                <div className="badge-row">
                  <span className={`badge-pill ${dest.badgeColor}`}>{dest.badge}</span>
                </div>
                <div className="dest-info">
                  <h4>{dest.name}</h4>
                  <p>Starting from {dest.price}</p>
                  <div className="rating-row">
                    <span className="rating-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </span>
                    <span>{dest.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
