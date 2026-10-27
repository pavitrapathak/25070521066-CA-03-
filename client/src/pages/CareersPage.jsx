import React, { useState } from 'react'
import { jobOpenings } from '../data/careersData.js'

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All')
  const [applyingJob, setApplyingJob] = useState(null)
  const [applicantName, setApplicantName] = useState('')
  const [applicantEmail, setApplicantEmail] = useState('')
  const [applicantLinkedin, setApplicantLinkedin] = useState('')
  const [applicantCover, setApplicantCover] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const depts = ['All', 'Engineering & AI', 'Design & Experience', 'Operations']

  const filtered = jobOpenings.filter((job) =>  
    selectedDept === 'All' ? true : job.department.toLowerCase().includes(selectedDept.toLowerCase())
  )

  const handleApplySubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setApplyingJob(null)
      setApplicantName('')
      setApplicantEmail('')
      setApplicantLinkedin('')
      setApplicantCover('')
      alert('Application received! Our recruiting team will review your profile within 48 hours.')
    }, 1200)
  }

  return (
    <div className="careers-page container">
      {/* Header */}
      <div className="page-header-box">
        <div className="ai-hero-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
          <i className="fa-solid fa-briefcase"></i> Join the Movement
        </div>
        <h1 className="page-title">Build the Future of Autonomous Exploration</h1>
        <p className="page-subtitle">
          We are a fully remote, global collective of engineers, designers, and explorers redefining how humanity
          discovers our planet.
        </p>
      </div>

      {/* Perks Grid */}
      <div className="careers-perks-grid">
        <div className="perk-card">
          <div className="perk-icon">
            <i className="fa-solid fa-plane-up"></i>
          </div>
          <h4>₹2,50,000 Annual Travel Stipend</h4>
          <p>We practice what we preach. Spend real time exploring the globe with our company-funded travel grant.</p>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <i className="fa-solid fa-house-laptop"></i>
          </div>
          <h4>Work From Anywhere</h4>
          <p>100% remote-first. Work from Tokyo, a Swiss chalet, Lisbon, or your home office with flexible hours.</p>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h4>Competitive Salary &amp; Equity</h4>
          <p>Top 10% market compensation, stock options for all full-time hires, and comprehensive health &amp; wellness.</p>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <i className="fa-solid fa-umbrella-beach"></i>
          </div>
          <h4>Unlimited Rest &amp; Rejuvenation</h4>
          <p>30 days minimum mandatory PTO, annual company retreats, and mental wellness sabbaticals.</p>
        </div>
      </div>

      {/* Open Positions Section */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, margin: 0 }}>Open Opportunities</h2>
            <p style={{ color: '#64748b', fontSize: '13px', margin: '4px 0 0 0' }}>
              Showing {filtered.length} active global roles
            </p>
          </div>

          <div className="continent-pills-row" style={{ margin: 0 }}>
            {depts.map((d) => (
              <button
                key={d}
                className={`continent-pill ${selectedDept === d ? 'active' : ''}`}
                onClick={() => setSelectedDept(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="job-listings-list">
          {filtered.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div>
                  <h3 className="job-card-title">{job.title}</h3>
                  <div className="job-meta-row">
                    <span>
                      <i className="fa-solid fa-building"></i> {job.department}
                    </span>
                    <span>
                      <i className="fa-solid fa-location-dot"></i> {job.location}
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i> {job.type}
                    </span>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>
                      <i className="fa-solid fa-wallet"></i> {job.salary}
                    </span>
                  </div>
                </div>
                <button className="btn-book-now" onClick={() => setApplyingJob(job)}>
                  Apply Now &rarr;
                </button>
              </div>

              <p className="job-desc">{job.description}</p>

              <div className="job-reqs">
                <strong>Key qualifications:</strong>
                <ul>
                  {job.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Apply Modal */}
      {applyingJob && (
        <div
          className="ai-modal-backdrop show"
          onClick={(e) => {
            if (e.target.classList.contains('ai-modal-backdrop')) setApplyingJob(null)
          }}
        >
          <div className="ai-modal">
            <div className="ai-modal-header">
              <div className="ai-modal-title-box">
                <i className="fa-solid fa-briefcase" style={{ color: '#1565d8' }}></i>
                <h3>Apply for {applyingJob.title}</h3>
              </div>
              <button className="ai-modal-close" onClick={() => setApplyingJob(null)}>
                &times;
              </button>
            </div>

            <form onSubmit={handleApplySubmit} className="ai-modal-body">
              <div className="input-box auth-input">
                <label>Full Name</label>
                <div className="input-inner">
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Alex Rivera"
                  />
                </div>
              </div>

              <div className="input-box auth-input">
                <label>Email Address</label>
                <div className="input-inner">
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div className="input-box auth-input">
                <label>LinkedIn or Portfolio URL</label>
                <div className="input-inner">
                  <input
                    type="url"
                    required
                    value={applicantLinkedin}
                    onChange={(e) => setApplicantLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/alex"
                  />
                </div>
              </div>

              <div className="input-box auth-input">
                <label>Why are you excited about autonomous travel?</label>
                <div className="input-inner">
                  <textarea
                    rows={4}
                    style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'vertical', fontFamily: 'inherit', fontSize: '13px' }}
                    value={applicantCover}
                    onChange={(e) => setApplicantCover(e.target.value)}
                    placeholder="Briefly tell us what you'd love to build..."
                  />
                </div>
              </div>

              <div className="ai-modal-footer">
                <button type="button" className="quick-chip" onClick={() => setApplyingJob(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn-book-now" disabled={submitted}>
                  {submitted ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Submitting...
                    </>
                  ) : (
                    'Submit Application &rarr;'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
