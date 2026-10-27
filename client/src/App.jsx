import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Pages
import HomePage from './pages/HomePage.jsx'
import AiPlannerPage from './pages/AiPlannerPage.jsx'
import DestinationsPage from './pages/DestinationsPage.jsx'
import DealsPage from './pages/DealsPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import SampleTripsPage from './pages/SampleTripsPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import PressPage from './pages/PressPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import BookingHelpPage from './pages/BookingHelpPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import ReturnsPage from './pages/ReturnsPage.jsx'

// Modals & Drawers
import SearchModal from './components/SearchModal.jsx'
import WishlistDrawer from './components/WishlistDrawer.jsx'
import AuthModal from './components/AuthModal.jsx'
import BookingModal from './components/BookingModal.jsx'
import AiItineraryModal from './components/AiItineraryModal.jsx'

import { sampleItineraries } from './data/itineraries.js'
import { destinationsData } from './data/destinationsData.js'

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState('home')
  const [destinationContinent, setDestinationContinent] = useState('All')

  // Modals
  const [searchOpen, setSearchOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [activeBookingItem, setActiveBookingItem] = useState(null)

  // AI Modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)
  const [currentPlan, setCurrentPlan] = useState(sampleItineraries.japan)

  // Local Storage Persistent States
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('travelora_wishlist')
      return saved ? JSON.parse(saved) : [destinationsData[0], destinationsData[1]]
    } catch {
      return [destinationsData[0], destinationsData[1]]
    }
  })

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('travelora_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  const [userBookings, setUserBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('travelora_bookings')
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: 1,
              referenceCode: 'TRV-894120',
              tripTitle: 'Kyoto & Tokyo, Japan — 7-Day AI Itinerary',
              dates: '7 Days • Foodie & Culture',
              travelers: '2 Adults',
              totalAmount: 149999,
              passenger: 'Alex Rivera',
              email: 'alex.rivera@example.com'
            }
          ]
    } catch {
      return []
    }
  })

  const plannerRef = useRef(null)

  // Synchronize Wishlist & Bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('travelora_wishlist', JSON.stringify(wishlist))
    } catch (e) {
      console.warn('Storage failed', e)
    }
  }, [wishlist])

  useEffect(() => {
    try {
      localStorage.setItem('travelora_user', JSON.stringify(currentUser))
    } catch (e) {
      console.warn('Storage failed', e)
    }
  }, [currentUser])

  useEffect(() => {
    try {
      localStorage.setItem('travelora_bookings', JSON.stringify(userBookings))
    } catch (e) {
      console.warn('Storage failed', e)
    }
  }, [userBookings])

  // Synchronize hash with page navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '')
      if (hash) {
        const validPages = [
          'home',
          'planner',
          'how-it-works',
          'sample-trips',
          'destinations',
          'deals',
          'about',
          'careers',
          'blog',
          'press',
          'contact',
          'faqs',
          'help',
          'privacy',
          'terms',
          'returns'
        ]
        if (validPages.includes(hash)) {
          setCurrentPage(hash)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (pageKey, extraParam) => {
    if (extraParam) {
      setDestinationContinent(extraParam)
    } else {
      setDestinationContinent('All')
    }
    setCurrentPage(pageKey)
    window.location.hash = `#/${pageKey}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Wishlist actions
  const handleToggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((x) => x.id === item.id)
      if (exists) {
        return prev.filter((x) => x.id !== item.id)
      } else {
        return [...prev, item]
      }
    })
  }

  const handleRemoveFromWishlist = (itemId) => {
    setWishlist((prev) => prev.filter((x) => x.id !== itemId))
  }

  // Booking actions
  const handleStartBooking = (item) => {
    setActiveBookingItem(item)
    setBookingOpen(true)
  }

  const handleBookingConfirmed = (newBooking) => {
    setUserBookings((prev) => [newBooking, ...prev])
  }

  // Plan generation
  const handlePlanClick = () => {
    handleNavigate('planner')
  }

  const handleSampleClick = () => {
    setCurrentPlan(sampleItineraries.japan)
    setModalLoading(false)
    setModalOpen(true)
  }

  const handleSelectPlan = (plan) => {
    setCurrentPlan(plan)
    setModalLoading(false)
    setModalOpen(true)
  }

  const handleGenerateTrip = (formData) => {
    const dest = (formData?.destination || '').toLowerCase()
    setModalLoading(true)
    setModalOpen(true)

    setTimeout(() => {
      if (dest.includes('swiss') || dest.includes('alps')) {
        setCurrentPlan(sampleItineraries.swiss)
      } else if (dest.includes('bali')) {
        setCurrentPlan(sampleItineraries.bali)
      } else if (dest.includes('amalfi') || dest.includes('rome') || dest.includes('italy')) {
        setCurrentPlan(sampleItineraries.amalfi)
      } else if (dest.includes('iceland')) {
        setCurrentPlan(sampleItineraries.iceland)
      } else if (dest.includes('paris')) {
        setCurrentPlan(sampleItineraries.paris)
      } else {
        setCurrentPlan(sampleItineraries.japan)
      }
      setModalLoading(false)
    }, 1200)
  }

  const handleSelectDestination = (promptData) => {
    handleGenerateTrip({ destination: promptData.dest })
  }

  const handleSelectDeal = (dealData) => {
    handleGenerateTrip({ destination: dealData.dest })
  }

  return (
    <div className="travelora-app">
      {/* 1 & 2: Top Bar & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        wishlistCount={wishlist.length}
        currentUser={currentUser}
      />

      {/* Main Pages Router */}
      <main className="app-main-content">
        {currentPage === 'home' && (
          <HomePage
            onPlanClick={handlePlanClick}
            onSampleClick={handleSampleClick}
            onGenerateTrip={handleGenerateTrip}
            onSelectDestination={handleSelectDestination}
            onSelectDeal={handleSelectDeal}
            onNavigate={handleNavigate}
            plannerRef={plannerRef}
          />
        )}

        {currentPage === 'planner' && (
          <AiPlannerPage
            onGenerateTrip={handleGenerateTrip}
            onBookTrip={handleStartBooking}
            onAddToWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            onSelectDestination={handleSelectDestination}
            onAddToWishlist={handleToggleWishlist}
            wishlist={wishlist}
            initialContinent={destinationContinent}
          />
        )}

        {currentPage === 'deals' && (
          <DealsPage
            onSelectDeal={handleSelectDeal}
            onBookTrip={handleStartBooking}
            onAddToWishlist={handleToggleWishlist}
            wishlist={wishlist}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage onPlanClick={handlePlanClick} />
        )}

        {currentPage === 'sample-trips' && (
          <SampleTripsPage
            onSelectPlan={handleSelectPlan}
            onBookTrip={handleStartBooking}
            onAddToWishlist={handleToggleWishlist}
            wishlist={wishlist}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage onPlanClick={handlePlanClick} />
        )}

        {currentPage === 'careers' && <CareersPage />}

        {currentPage === 'blog' && (
          <BlogPage onSelectDestination={handleSelectDestination} />
        )}

        {currentPage === 'press' && <PressPage />}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'faqs' && (
          <FaqPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'help' && (
          <BookingHelpPage onNavigate={handleNavigate} userBookings={userBookings} />
        )}

        {currentPage === 'privacy' && <PrivacyPolicyPage />}

        {currentPage === 'terms' && <TermsPage />}

        {currentPage === 'returns' && (
          <ReturnsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals & Drawers */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectDestination={handleSelectDestination}
        onSelectDeal={handleSelectDeal}
        onSelectPlan={handleSelectPlan}
        onNavigate={handleNavigate}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onSelectDestination={handleSelectDestination}
        onBook={handleStartBooking}
      />

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        currentUser={currentUser}
        onLogin={(u) => setCurrentUser(u)}
        onLogout={() => setCurrentUser(null)}
        userBookings={userBookings}
        onOpenItinerary={handleSelectPlan}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        tripItem={activeBookingItem}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Interactive AI Itinerary Modal */}
      <AiItineraryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        plan={currentPlan}
        isLoading={modalLoading}
        onBookTrip={handleStartBooking}
      />
    </div>
  )
}
