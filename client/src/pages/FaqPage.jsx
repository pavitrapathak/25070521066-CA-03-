import React, { useState } from 'react'
import { faqCategories } from '../data/faqData.js'

export default function FaqPage({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const term = searchTerm.toLowerCase().trim()

  return (
    <div className="faq-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-circle-question"></i> Help Center &amp; Knowledge Base
        </div>
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Everything you need to know about our autonomous travel planner, unified bookings, guarantees, and
          on-the-road assistance.
        </p>
      </div>

      {/* Search Input */}
      <div className="faq-search-wrapper">
        <div className="input-inner" style={{ background: '#fff', borderRadius: '14px', padding: '14px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '18px', color: '#1565d8' }}></i>
          <input
            type="text"
            placeholder="Type keywords (e.g. refund, payments, customize itinerary, flight delays)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ fontSize: '15px' }}
          />
          {searchTerm && (
            <button className="spotlight-clear-btn" onClick={() => setSearchTerm('')}>
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Accordion List */}
      <div className="faq-sections-list">
        {faqCategories.map((cat, cIdx) => {
          const matchingItems = cat.items.filter(
            (item) =>
              !term ||
              item.q.toLowerCase().includes(term) ||
              item.a.toLowerCase().includes(term)
          )

          if (matchingItems.length === 0) return null

          return (
            <div key={cIdx} className="faq-category-block">
              <div className="faq-category-title">
                <i className={`fa-solid ${cat.icon}`}></i> {cat.category}
              </div>

              <div className="faq-accordion-group">
                {matchingItems.map((item, iIdx) => {
                  const key = `${cIdx}-${iIdx}`
                  const isExpanded = expandedItems[key] ?? (cIdx === 0 && iIdx === 0)

                  return (
                    <div key={iIdx} className={`faq-item-card ${isExpanded ? 'expanded' : ''}`}>
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => toggleExpand(cIdx, iIdx)}
                      >
                        <span>{item.q}</span>
                        <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </button>
                      {isExpanded && <div className="faq-answer-pane">{item.a}</div>}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Still need help callout */}
      <div className="faq-cta-card">
        <h3>Still have questions?</h3>
        <p>Our 24/7 autonomous travel concierges and human specialists are ready to chat.</p>
        <button className="btn-book-now" onClick={() => onNavigate('contact')}>
          <i className="fa-regular fa-envelope"></i> Contact Concierge Team
        </button>
      </div>
    </div>
  )
}
