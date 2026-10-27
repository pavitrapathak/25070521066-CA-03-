import React from 'react'

export default function AboutUsPage({ onPlanClick }) {
  const teamMembers = [
    {
      name: 'Sofia Al-Mansoor',
      role: 'Co-Founder & CEO',
      bio: 'Former VP of Product at Expedia, visited 74 countries. Passionate about eliminating travel planning anxiety.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Lucas Chen',
      role: 'Co-Founder & Chief AI Scientist',
      bio: 'Ex-DeepMind research scientist in reinforcement learning and multi-agent spatial coordination.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Amara Okafor',
      role: 'Head of Global Traveler Operations',
      bio: 'Hospitality veteran with 12 years directing luxury concierge networks across Europe and East Asia.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Marcus Lindqvist',
      role: 'VP of Engineering',
      bio: 'Distributed systems architect specialized in real-time airline GDS integrations and sub-second caching.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <div className="about-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-heart" style={{ color: '#ff5722' }}></i> Our Mission &amp; Story
        </div>
        <h1 className="page-title">We Believe Travel Should Feel Like Magic, Not Work</h1>
        <p className="page-subtitle">
          Travelora was founded on a simple realization: planning a 7-day vacation should not require 25 browser
          tabs, 14 hours of spreadsheet formatting, and constant anxiety over missed trains.
        </p>
      </div>

      {/* Stats row */}
      <div className="about-stats-grid">
        <div className="about-stat-card">
          <div className="about-stat-val">250K+</div>
          <div className="about-stat-lbl">AI Journeys Planned</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-val">160+</div>
          <div className="about-stat-lbl">Countries Covered</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-val">99.8%</div>
          <div className="about-stat-lbl">Booking Reliability</div>
        </div>
        <div className="about-stat-card">
          <div className="about-stat-val">₹35 Cr+</div>
          <div className="about-stat-lbl">Saved for Travelers</div>
        </div>
      </div>

      {/* Story & Vision */}
      <div className="about-story-section">
        <div className="story-text-col">
          <span className="badge-pill badge-blue">The Travelora Origin</span>
          <h2>The End of Travel Fatigue</h2>
          <p>
            In 2023, our founders were stranded in a train station in Northern Italy after a sudden rail strike.
            Trying to re-book hotels, find alternate buses, and salvage museum passes from a small phone screen
            crystallized how fragmented travel technology had become.
          </p>
          <p>
            We set out to build an autonomous intelligence engine that doesn't just display blue links, but
            actively understands the nuance of how humans explore: the desire for an authentic mom-and-pop pasta
            spot without waiting 2 hours in the rain; the thrill of waking up to Mount Fuji; and the reassurance
            that someone has your back 24/7.
          </p>
          <div style={{ marginTop: '20px' }}>
            <button className="btn-book-now" onClick={onPlanClick}>
              <i className="fa-solid fa-wand-magic-sparkles"></i> Try the Engine Today
            </button>
          </div>
        </div>
        <div className="story-img-col">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
            alt="Travelers exploring together"
            className="story-main-img"
          />
        </div>
      </div>

      {/* Leadership Team */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800 }}>Leadership &amp; Creators</h2>
          <p style={{ color: '#64748b', fontSize: '14px' }}>
            A passionate collective of machine learning researchers, travel writers, and global operations leaders.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <div key={i} className="team-card">
              <img src={m.image} alt={m.name} className="team-avatar" />
              <h4>{m.name}</h4>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
