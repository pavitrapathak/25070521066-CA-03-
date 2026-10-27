import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    destination: {
      type: String,
      required: [true, 'Please provide destination']
    },
    tripStyle: {
      type: String,
      required: true,
      enum: ['🥢 Foodie & Nightlife', '⛰ Adventure & Scenic', '⛪ Art & Deep Culture', '🕉 Relax & Wellness', '👪 Family Friendly', '💎 Ultra Luxury']
    },
    duration: {
      type: String,
      required: true
    },
    budget: {
      type: String,
      required: true
    },
    travelers: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    itinerary: {
      type: Object,
      default: {}
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending'
    },
    totalPrice: {
      type: Number,
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'debit_card', 'paypal', 'upi', 'net_banking']
    },
    specialRequests: {
      type: String,
      maxlength: 500
    },
    contactDetails: {
      email: String,
      phone: String,
      emergencyContact: String
    }
  },
  {
    timestamps: true
  }
);

// Index for faster queries
bookingSchema.index({ user: 1, startDate: -1 });
bookingSchema.index({ status: 1 });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
