export const dealsData = [
  {
    id: 'deal-greece',
    title: 'Santorini & Mykonos Odyssey',
    destination: 'Greece & Mediterranean Islands',
    oldPrice: 74999,
    newPrice: 52499,
    discountPercent: 30,
    duration: '5 Days / 4 Nights',
    badge: 'Best Seller',
    badgeColor: 'badge-blue',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Caldera cliffside hotel with plunge pool, high-speed island ferries, and sunset wine tasting in Oia.',
    includes: ['Roundtrip Flights Included', '4-Star Caldera View Hotel', 'Catamaran Sunset Cruise', 'Daily Greek Breakfast', 'AI Smart Transit Concierge'],
    expiresInHours: 36,
    code: 'GREECE30',
    prompt: {
      dest: 'Santorini & Mykonos, Greece',
      style: '⛪ Art & Deep Culture',
      duration: '5 Days / 4 Nights',
      budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
    }
  },
  {
    id: 'deal-thailand',
    title: 'Thailand Tropical Island Escape',
    destination: 'Bangkok & Phuket & Phi Phi',
    oldPrice: 62999,
    newPrice: 44999,
    discountPercent: 29,
    duration: '6 Days / 5 Nights',
    badge: 'Hot Deal',
    badgeColor: 'badge-orange',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    description: 'Bustling Bangkok floating night markets paired with turquoise Andaman beach bungalows and speedboat island hopping.',
    includes: ['Boutique Beachfront Resort', 'Speedboat to Maya Bay & Phi Phi', 'Street Food Night Safari', 'Domestic Flights Included'],
    expiresInHours: 18,
    code: 'THAI29',
    prompt: {
      dest: 'Thailand Tropical Escape',
      style: '🥢 Foodie & Nightlife',
      duration: '6 Days / 5 Nights',
      budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
    }
  },
  {
    id: 'deal-japan',
    title: 'Japan Autumn Discovery',
    destination: 'Tokyo & Kyoto & Hakone',
    oldPrice: 109999,
    newPrice: 74999,
    discountPercent: 31,
    duration: '7 Days / 6 Nights',
    badge: 'New Offer',
    badgeColor: 'badge-purple',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    description: 'Ride the Nozomi bullet train, sleep in a traditional Hakone onsen ryokan with Mt. Fuji view, and feast on ramen.',
    includes: ['7-Day Japan Rail Pass', 'Boutique Shinjuku & Kyoto Stays', 'Traditional Onsen Dinner Experience', 'Pocket Wi-Fi & AI Navigator'],
    expiresInHours: 48,
    code: 'JAPAN31',
    prompt: {
      dest: 'Kyoto & Tokyo, Japan',
      style: '🥢 Foodie & Nightlife',
      duration: '7 Days • Autumn',
      budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
    }
  },
  {
    id: 'deal-swiss',
    title: 'Swiss Alpine Glacier Express',
    destination: 'Interlaken & Zermatt & Zurich',
    oldPrice: 119999,
    newPrice: 84999,
    discountPercent: 28,
    duration: '6 Days / 5 Nights',
    badge: 'Limited Pass',
    badgeColor: 'badge-green',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    description: 'Ride through panoramic glass-roof trains, ascend Jungfraujoch, and stay at cozy mountain chalets.',
    includes: ['Swiss Travel Pass (First Class)', 'Alpine Chalet Stays with Breakfast', 'Cable Car to Schilthorn 007', 'Cheese & Chocolate Factory Tour'],
    expiresInHours: 24,
    code: 'SWISS28',
    prompt: {
      dest: 'Swiss Alps & Lakes',
      style: '⛰ Adventure & Scenic',
      duration: '5 Days • Summer',
      budget: '💳 ₹2,00,000 - ₹3,50,000 (Comfort Plus)'
    }
  },
  {
    id: 'deal-dubai',
    title: 'Dubai Ultra-Luxury & Dune Safari',
    destination: 'Dubai & Abu Dhabi, UAE',
    oldPrice: 99999,
    newPrice: 69999,
    discountPercent: 29,
    duration: '5 Days / 4 Nights',
    badge: 'Luxury Pick',
    badgeColor: 'badge-pink',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    description: 'Stay in a 5-star marina suite, enjoy private 4x4 desert dune bashing with barbecue dinner, and explore the Louvre Abu Dhabi.',
    includes: ['5-Star Marina Luxury Suite', 'Private Desert Safari & Falconry', 'Burj Khalifa Sky Deck Tickets', 'Airport Chauffeur Transfer'],
    expiresInHours: 52,
    code: 'DUBAI29',
    prompt: {
      dest: 'Dubai, UAE',
      style: '💎 Ultra Luxury',
      duration: '6 Days • Winter',
      budget: '💎 ₹4,00,000+ (Ultra Luxury)'
    }
  },
  {
    id: 'deal-bali',
    title: 'Bali Villa & Waterfall Sanctuary',
    destination: 'Ubud & Seminyak & Nusa Penida',
    oldPrice: 72999,
    newPrice: 49999,
    discountPercent: 29,
    duration: '7 Days / 6 Nights',
    badge: 'Wellness',
    badgeColor: 'badge-green',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Private infinity pool villa in Ubud jungle, daily floating breakfast, Balinese spa packages, and Nusa Penida island speedboat.',
    includes: ['Private Pool Villa in Ubud', 'Daily Floating Breakfast', 'Full-Day Nusa Penida Tour', 'Private Dedicated Chauffeur'],
    expiresInHours: 40,
    code: 'BALI29',
    prompt: {
      dest: 'Bali & Nusa Penida',
      style: '🕉 Relax & Wellness',
      duration: '10 Days • Tropical',
      budget: '💰 ₹1,25,000 - ₹2,00,000 (Smart Explorer)'
    }
  }
]
