import React, { useState } from 'react'
import { blogData } from '../data/blogData.js'

export default function BlogPage({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [readingArticle, setReadingArticle] = useState(null)

  const categories = ['All', 'AI Travel Tech', 'Destination Guide', 'Travel Tips']

  const filtered = blogData.filter((article) =>
    activeCategory === 'All' ? true : article.category === activeCategory
  )

  return (
    <div className="blog-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-newspaper"></i> Travelora Journal &amp; AI Intelligence
        </div>
        <h1 className="page-title">Travel Insights &amp; Algorithmic Guides</h1>
        <p className="page-subtitle">
          Deep dives into modern travel algorithms, secret destination walking paths, and insider travel
          hacks uncovered by our machine learning models.
        </p>
      </div>

      {/* Category Filter */}
      <div className="continent-pills-row">
        {categories.map((c) => (
          <button
            key={c}
            className={`continent-pill ${activeCategory === c ? 'active' : ''}`}
            onClick={() => setActiveCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="blog-posts-grid">
        {filtered.map((post) => (
          <article key={post.id} className="blog-card" onClick={() => setReadingArticle(post)}>
            <div className="blog-img-wrap">
              <img src={post.image} alt={post.title} loading="lazy" />
              <span className="badge-pill badge-blue blog-badge">{post.category}</span>
            </div>
            <div className="blog-card-content">
              <div className="blog-meta">
                <span>{post.date}</span> &bull; <span>{post.readTime}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-author-row">
                <span className="blog-author-name">{post.author}</span>
                <span className="blog-read-more">Read Full Story &rarr;</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Read Article Modal */}
      {readingArticle && (
        <div
          className="ai-modal-backdrop show"
          onClick={(e) => {
            if (e.target.classList.contains('ai-modal-backdrop')) setReadingArticle(null)
          }}
        >
          <div className="ai-modal" style={{ maxWidth: '780px' }}>
            <div className="ai-modal-header">
              <div className="ai-modal-title-box">
                <span className="badge-pill badge-blue">{readingArticle.category}</span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{readingArticle.readTime}</span>
              </div>
              <button className="ai-modal-close" onClick={() => setReadingArticle(null)}>
                &times;
              </button>
            </div>

            <div className="ai-modal-body" style={{ maxHeight: '78vh', overflowY: 'auto' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.3, marginBottom: '8px' }}>
                {readingArticle.title}
              </h2>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
                By <strong>{readingArticle.author}</strong> &bull; Published {readingArticle.date}
              </div>

              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '14px', marginBottom: '24px' }}
              />

              <div className="article-body-text" style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155' }}>
                {readingArticle.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={i} style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 10px 0', color: '#0f172a' }}>
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  return (
                    <p key={i} style={{ marginBottom: '14px' }}>
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              <div className="ai-modal-footer" style={{ marginTop: '30px' }}>
                <button
                  className="quick-chip"
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href)
                    alert('Article link copied to clipboard!')
                  }}
                >
                  <i className="fa-solid fa-share-nodes"></i> Share Article
                </button>
                <button
                  className="btn-book-now"
                  onClick={() => {
                    setReadingArticle(null)
                    onSelectDestination({
                      dest: 'Kyoto & Tokyo, Japan',
                      style: '🥢 Foodie & Nightlife',
                      duration: '7 Days • Autumn',
                      budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
                    })
                  }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles"></i> Plan Trip Based on This
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
