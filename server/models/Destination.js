import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide destination name'],
      trim: true,
      unique: true
    },
    country: {
      type: String,
      required: true
    },
    continent: {
      type: String,
      required: true,
      enum: ['Asia', 'Europe', 'Africa', 'America', 'Australia', 'Antarctica']
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000
    },
    image: {
      type: String,
      required: true
    },
    images: [{
      type: String
    }],
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5
    },
    reviewsCount: {
      type: Number,
      default: 0
    },
    bestSeason: {
      type: String,
      required: true
    },
    highlights: [{
      type: String
    }],
    activities: [{
      type: String
    }],
    averageTemperature: {
      type: String
    },
    currency: {
      type: String
    },
    language: {
      type: String
    },
    timeZone: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    },
    popular: {
      type: Boolean,
      default: false
    },
    tags: [{
      type: String
    }],
    deals: {
      discount: {
        type: Number,
        default: 0
      },
      oldPrice: Number,
      expiresAt: Date
    }
  },
  {
    timestamps: true
  }
);

// Index for search functionality
destinationSchema.index({ name: 'text', country: 'text', description: 'text' });
destinationSchema.index({ continent: 1, popular: -1 });

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
