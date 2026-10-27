import React, { useState, useEffect } from 'react'
import api, { getCurrentUser, removeAuthToken, removeCurrentUser } from '../services/api'

export default function AuthModal({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
  userBookings = [],
  onOpenItinerary
}) {
  const [activeTab, setActiveTab] = useState(currentUser ? 'bookings' : 'login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSuccessMsg, setIsSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Reset to login tab when currentUser changes (after logout)
  useEffect(() => {
    if (!currentUser && isOpen) {
      setActiveTab('login')
    } else if (currentUser && isOpen) {
      setActiveTab('bookings')
    }
  }, [currentUser, isOpen])

  if (!isOpen) return null

  const handleSignIn = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setIsLoading(true)

    try {
      // Call real API
      const result = await api.login({
        email: email,
        password: password
      })

      if (result.success) {
        // Success! User is logged in
        setIsSuccessMsg('Successfully signed in! Welcome back ' + result.data.name)
        setEmail('')
        setPassword('')
        
        // Update parent component with user data
        onLogin({
          name: result.data.name,
          email: result.data.email,
          membership: 'Travelora VIP Member',
          role: result.data.role
        })

        setTimeout(() => {
          setIsSuccessMsg('')
          setActiveTab('bookings')
        }, 1000)
      } else {
        // Show error message
        setErrorMsg(result.message || 'Login failed. Please check your credentials.')
      }
    } catch (error) {
      console.error('Login error:', error)
      setErrorMsg('Unable to connect to server. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setIsLoading(true)

    try {
      // Call real API
      const result = await api.register({
        name: name,
        email: email,
        password: password,
        phone: phone || '0000000000'
      })

      if (result.success) {
        // Success! User is registered and logged in
        setIsSuccessMsg('Account created successfully! Welcome ' + result.data.name)
        setName('')
        setEmail('')
        setPassword('')
        setPhone('')
        
        // Update parent component with user data
        onLogin({
          name: result.data.name,
          email: result.data.email,
          membership: 'New Travelora VIP Member',
          role: result.data.role
        })

        setTimeout(() => {
          setIsSuccessMsg('')
          setActiveTab('bookings')
        }, 1000)
      } else {
        // Show error message
        setErrorMsg(result.message || 'Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Registration error:', error)
      setErrorMsg('Unable to connect to server. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogoutClick = () => {
    // Clear API tokens and user data
    removeAuthToken()
    removeCurrentUser()
    
    // Reset to login tab
    setActiveTab('login')
    
    // Call parent logout
    onLogout()
    
    setIsSuccessMsg('Logged out successfully')
    setTimeout(() => {
      setIsSuccessMsg('')
      onClose()
    }, 1000)
  }

  /* ---- Logged-in user view (unchanged structure, better layout) ---- */
  if (currentUser) {
    return (
      <div
        className="auth-modal-backdrop"
        onClick={(e) => {
          if (e.target.classList.contains('auth-modal-backdrop')) onClose()
        }}
      >
        <div className="auth-modal auth-modal--user">
          {/* Header */}
          <div className="auth-modal-header">
            <div className="auth-modal-tabs">
              <button
                type="button"
                className={`auth-tab ${activeTab === 'bookings' ? 'active' : ''}`}
                onClick={() => setActiveTab('bookings')}
              >
                <i className="fa-solid fa-suitcase-rolling"></i> My Trips ({userBookings.length})
              </button>
              <button
                type="button"
                className={`auth-tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="fa-solid fa-user-gear"></i> Account Profile
              </button>
            </div>
            <button type="button" className="auth-close-btn" onClick={onClose} aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Body */}
          <div className="auth-modal-body">
            {isSuccessMsg && (
              <div className="auth-success-alert">
                <i className="fa-solid fa-circle-check"></i> {isSuccessMsg}
              </div>
            )}

            {/* BOOKINGS TAB */}
            {activeTab === 'bookings' && (
              <div className="user-trips-pane">
                <div className="user-welcome-header">
                  <div>
                    <h4 style={{ margin: 0, fontSize: '17px' }}>Hello, {currentUser.name}!</h4>
                    <span className="user-badge-tier">{currentUser.membership}</span>
                  </div>
                  <button type="button" className="btn-outline-sm" onClick={handleLogoutClick}>
                    Sign Out
                  </button>
                </div>

                {userBookings.length === 0 ? (
                  <div className="drawer-empty-state" style={{ padding: '30px 10px' }}>
                    <i className="fa-solid fa-plane-departure" style={{ fontSize: '32px', color: '#cbd5e1' }}></i>
                    <h5 style={{ marginTop: '12px' }}>No bookings yet</h5>
                    <p>When you book an AI itinerary or deal, your tickets and live vouchers will appear here.</p>
                  </div>
                ) : (
                  <div className="bookings-list">
                    {userBookings.map((b) => (
                      <div key={b.id} className="booking-card-item">
                        <div className="booking-top-row">
                          <span className="booking-ref-badge">Ref: {b.referenceCode}</span>
                          <span className="booking-status-tag">Confirmed</span>
                        </div>
                        <h5>{b.tripTitle}</h5>
                        <div className="booking-meta-row">
                          <span>
                            <i className="fa-regular fa-calendar"></i> {b.dates || 'Upcoming 2026'}
                          </span>
                          <span>
                            <i className="fa-solid fa-user-group"></i> {b.travelers || '1 Traveler'}
                          </span>
                          <span style={{ fontWeight: 700, color: '#1565d8' }}>₹{b.totalAmount ? Number(b.totalAmount).toLocaleString('en-IN') : '1,49,999'}</span>
                        </div>
                        <div className="booking-card-actions">
                          <button
                            type="button"
                            className="quick-chip"
                            onClick={() => alert(`Showing electronic boarding pass for booking ${b.referenceCode}`)}
                          >
                            <i className="fa-solid fa-ticket"></i> E-Tickets &amp; Voucher
                          </button>
                          <button
                            type="button"
                            className="quick-chip"
                            onClick={() => alert(`Calendar (.ics) synced for ${b.tripTitle}`)}
                          >
                            <i className="fa-solid fa-calendar-plus"></i> Sync Calendar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="user-profile-pane">
                <div className="profile-row">
                  <div className="profile-avatar">{currentUser.name.charAt(0)}</div>
                  <div>
                    <h4>{currentUser.name}</h4>
                    <p>{currentUser.email}</p>
                    <span className="badge-pill badge-green">Verified AI Traveler</span>
                  </div>
                </div>
                <div className="profile-settings-list">
                  <div className="profile-setting-item">
                    <div>
                      <strong>AI Travel Preference</strong>
                      <p>Foodie, High-Speed Rail, Modern Boutique Stays</p>
                    </div>
                    <button type="button" className="btn-outline-sm">Edit</button>
                  </div>
                  <div className="profile-setting-item">
                    <div>
                      <strong>Currency &amp; Language</strong>
                      <p>INR (₹) &bull; English (India)</p>
                    </div>
                    <button type="button" className="btn-outline-sm">Change</button>
                  </div>
                  <div className="profile-setting-item">
                    <div>
                      <strong>Autonomous Flight Delay Auto-Reroute</strong>
                      <p>Enabled (Automatic WhatsApp notification)</p>
                    </div>
                    <span style={{ color: '#10b981', fontWeight: 700, fontSize: '13px' }}>Active</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-outline-sm"
                  style={{ width: '100%', marginTop: '20px', color: '#ef4444' }}
                  onClick={handleLogoutClick}
                >
                  Log Out of All Devices
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* ---- Guest / Sign-in / Register view ---- */
  return (
    <div
      className="auth-modal-backdrop"
      onClick={(e) => {
        if (e.target.classList.contains('auth-modal-backdrop')) onClose()
      }}
    >
      <div className="auth-modal auth-modal--guest">
        {/* Close button */}
        <button type="button" className="auth-close-btn" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* ===== LEFT BRANDED PANEL ===== */}
        <div className="auth-brand-panel">
          <div className="auth-brand-content">
            <div className="auth-brand-logo">
              <div className="auth-brand-icon">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <span className="auth-brand-name">Travelora</span>
            </div>

            <h2 className="auth-brand-headline">
              {activeTab === 'login'
                ? 'Welcome Back, Explorer'
                : 'Start Your AI Journey'}
            </h2>
            <p className="auth-brand-sub">
              {activeTab === 'login'
                ? 'Your personalised itineraries, real-time alerts, and exclusive member discounts are waiting for you.'
                : 'Join 250,000+ travelers using AI-powered intelligence to plan unforgettable trips worldwide.'}
            </p>

            <div className="auth-brand-stats">
              <div className="auth-stat">
                <span className="auth-stat-val">250K+</span>
                <span className="auth-stat-lbl">Trips Planned</span>
              </div>
              <div className="auth-stat-divider"></div>
              <div className="auth-stat">
                <span className="auth-stat-val">4.9★</span>
                <span className="auth-stat-lbl">User Rating</span>
              </div>
              <div className="auth-stat-divider"></div>
              <div className="auth-stat">
                <span className="auth-stat-val">190+</span>
                <span className="auth-stat-lbl">Countries</span>
              </div>
            </div>

            <div className="auth-brand-testimonial">
              <div className="auth-testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>"Travelora's AI planned a perfect 10-day Japan trip in under 3 seconds. Absolutely mind-blowing."</p>
              <div className="auth-testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80"
                  alt="Pavitra Pathak"
                />
                <div>
                  <strong>Pavitra Pathak</strong>
                  <span>Gold Tier Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT FORM PANEL ===== */}
        <div className="auth-form-panel">
          {/* Tabs */}
          <div className="auth-form-tabs">
            <button
              type="button"
              className={`auth-tab-pill ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab-pill ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Create Account
            </button>
          </div>

          {isSuccessMsg && (
            <div className="auth-success-alert">
              <i className="fa-solid fa-circle-check"></i> {isSuccessMsg}
            </div>
          )}

          {errorMsg && (
            <div className="auth-error-alert" style={{
              padding: '12px 16px',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '8px',
              color: '#c00',
              fontSize: '14px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i className="fa-solid fa-circle-exclamation"></i> {errorMsg}
            </div>
          )}

          {/* LOGIN FORM */}
          {activeTab === 'login' && (
            <form onSubmit={handleSignIn} className="auth-form">
              <h3 className="auth-form-title">Sign in to your account</h3>
              <p className="auth-form-desc">
                Access saved AI itineraries, real-time trip alerts, and exclusive member discounts.
              </p>

              <div className="auth-field">
                <label htmlFor="auth-email-login">Email Address</label>
                <div className="auth-field-input">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    id="auth-email-login"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="auth-field">
                <div className="auth-field-label-row">
                  <label htmlFor="auth-pass-login">Password</label>
                  <button type="button" className="auth-forgot-link" onClick={() => alert('Password reset email sent!')}>
                    Forgot password?
                  </button>
                </div>
                <div className="auth-field-input">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    id="auth-pass-login"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="auth-eye-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="auth-remember-row">
                <label className="auth-checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Keep me signed in</span>
                </label>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Signing In...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Sign In
                  </>
                )}
              </button>

              <p className="auth-switch-text">
                Don't have an account?{' '}
                <button type="button" className="auth-switch-link" onClick={() => setActiveTab('register')}>
                  Create one free &rarr;
                </button>
              </p>
            </form>
          )}

          {/* REGISTER FORM */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="auth-form">
              <h3 className="auth-form-title">Create your account</h3>
              <p className="auth-form-desc">
                Unlock AI trip generation, offline sync, and exclusive member travel perks.
              </p>

              <div className="auth-field">
                <label htmlFor="auth-name-reg">Full Name</label>
                <div className="auth-field-input">
                  <i className="fa-regular fa-user"></i>
                  <input
                    id="auth-name-reg"
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="auth-field">
                <label htmlFor="auth-email-reg">Email Address</label>
                <div className="auth-field-input">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    id="auth-email-reg"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="auth-field">
                <label htmlFor="auth-phone-reg">Phone Number (Optional)</label>
                <div className="auth-field-input">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    id="auth-phone-reg"
                    type="tel"
                    placeholder="1234567890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="auth-field">
                <label htmlFor="auth-pass-reg">Password</label>
                <div className="auth-field-input">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    id="auth-pass-reg"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength="6"
                    placeholder="Min. 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="auth-eye-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="auth-remember-row">
                <label className="auth-checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>I agree to the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></span>
                </label>
              </div>

              <button type="submit" className="auth-submit-btn auth-submit-btn--create" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-user-plus"></i>
                    Create Free Account
                  </>
                )}
              </button>

              <p className="auth-switch-text">
                Already have an account?{' '}
                <button type="button" className="auth-switch-link" onClick={() => setActiveTab('login')}>
                  Sign in &rarr;
                </button>
              </p>
            </form>
          )}

          {/* Security note */}
          <div className="auth-security-footer">
            <i className="fa-solid fa-shield-halved"></i>
            <span>256-bit SSL encrypted &bull; SOC 2 certified &bull; GDPR compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}
