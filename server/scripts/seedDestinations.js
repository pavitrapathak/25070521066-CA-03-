import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';

dotenv.config();

const destinations = [
  {
    name: 'Paris, France',
    country: 'France',
    continent: 'Europe',
    description: 'City of light, world-class Louvre art, Haussmann boulevards, and Michelin gastronomy.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    price: 41999,
    rating: 4.8,
    reviewsCount: 2400,
    bestSeason: 'Apr - Oct',
    highlights: ['Eiffel Tower Summit', 'Seine Champagne Cruise', 'Le Marais Boulangeries', 'Louvre Museum'],
    popular: true,
    featured: true,
    tags: ['Culture', 'Art', 'Food', 'Romance'],
    currency: 'EUR'
  },
  {
    name: 'Bali, Indonesia',
    country: 'Indonesia',
    continent: 'Asia',
    description: 'Tropical spiritual haven with lush Ubud rice terraces, cliffside Uluwatu temples, and vibrant coral reefs.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    price: 49999,
    rating: 4.7,
    reviewsCount: 3100,
    bestSeason: 'May - Sep',
    highlights: ['Tegallalang Terraces', 'Kelingking Beach', 'Uluwatu Fire Dance', 'Tibumana Waterfalls'],
    popular: true,
    featured: true,
    tags: ['Beach', 'Wellness', 'Nature', 'Adventure'],
    currency: 'IDR'
  },
  {
    name: 'Dubai, UAE',
    country: 'UAE',
    continent: 'Asia',
    description: 'Futuristic metropolis featuring the soaring Burj Khalifa, desert safaris, and ultra-luxury shopping.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    price: 74999,
    rating: 4.9,
    reviewsCount: 1900,
    bestSeason: 'Nov - Mar',
    highlights: ['Burj Khalifa Level 148', 'Arabian Desert Dunes', 'Palm Jumeirah Yacht', 'Dubai Frame'],
    popular: true,
    featured: true,
    tags: ['Luxury', 'Shopping', 'Desert', 'Modern'],
    currency: 'AED'
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    continent: 'Europe',
    description: 'Breathtaking mountain peaks, GoldenPass panoramic trains, glacier caves, and pristine alpine meadows.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    price: 74999,
    rating: 4.8,
    reviewsCount: 2800,
    bestSeason: 'Jun - Sep & Dec - Mar',
    highlights: ['Jungfraujoch Top of Europe', 'Lauterbrunnen Valley', 'Lake Lucerne Cruise', 'Zermatt Matterhorn'],
    popular: true,
    featured: true,
    tags: ['Mountains', 'Adventure', 'Scenic', 'Nature'],
    currency: 'CHF'
  },
  {
    name: 'Tokyo & Kyoto, Japan',
    country: 'Japan',
    continent: 'Asia',
    description: 'Seamless harmony of ancient cedar shrines, bullet trains, neon cyberpunk alleys, and matcha tea rituals.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    price: 74999,
    rating: 4.9,
    reviewsCount: 4200,
    bestSeason: 'Mar - May & Oct - Nov',
    highlights: ['Fushimi Inari Torii', 'Shibuya Crossing', 'Shinkansen Bullet Train', 'Gion Geisha District'],
    popular: true,
    featured: true,
    tags: ['Culture', 'Food', 'Technology', 'History'],
    currency: 'JPY'
  },
  {
    name: 'Santorini, Greece',
    country: 'Greece',
    continent: 'Europe',
    description: 'White-washed caldera cliff villas, turquoise Aegean sunsets, volcanic black beaches, and fresh grilled octopus.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    price: 52499,
    rating: 4.8,
    reviewsCount: 2100,
    bestSeason: 'May - Oct',
    highlights: ['Oia Sunset Castle', 'Red Beach Catamaran', 'Akrotiri Ruins', 'Fira to Oia Cliff Trek'],
    popular: true,
    tags: ['Beach', 'Romance', 'Photography', 'Island'],
    currency: 'EUR'
  }
];

const seedDestinations = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing destinations
    await Destination.deleteMany();
    console.log('🗑️ Cleared existing destinations');

    // Insert new destinations
    await Destination.insertMany(destinations);
    console.log(`✅ ${destinations.length} destinations seeded successfully`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding destinations:', error);
    process.exit(1);
  }
};

seedDestinations();
