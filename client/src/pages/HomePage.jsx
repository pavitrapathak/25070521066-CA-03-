import React from 'react'
import Hero from '../components/Hero.jsx'
import AiPlannerWidget from '../components/AiPlannerWidget.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Destinations from '../components/Destinations.jsx'
import TopDeals from '../components/TopDeals.jsx'
import TrustBar from '../components/TrustBar.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage({
  onPlanClick,
  onSampleClick,
  onGenerateTrip,
  onSelectDestination,
  onSelectDeal,
  onNavigate,
  plannerRef
}) {
  return (
    <div className="home-page-view">
      {/* Hero Section */}
      <Hero onPlanClick={onPlanClick} onSampleClick={onSampleClick} />

      {/* AI Planner Search Widget */}
      <AiPlannerWidget onGenerateTrip={onGenerateTrip} plannerRef={plannerRef} />

      {/* How It Works Section */}
      <HowItWorks onLearnMore={() => onNavigate('how-it-works')} />

      {/* Popular Destinations Preview */}
      <Destinations
        onSelectDestination={onSelectDestination}
        onViewAll={() => onNavigate('destinations')}
      />

      {/* Top Deals Section */}
      <TopDeals
        onSelectDeal={onSelectDeal}
        onViewAllDeals={() => onNavigate('deals')}
      />

      {/* Trust & Intelligence Bar */}
      <TrustBar />

      {/* Testimonials & Newsletter */}
      <Testimonials />
    </div>
  )
}
