import express from 'express';
import {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
  getPopularDestinations,
  searchDestinations
} from '../controllers/destinationController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllDestinations);
router.get('/popular', getPopularDestinations);
router.get('/search', searchDestinations);
router.get('/:id', getDestinationById);

// Admin routes
router.post('/', protect, admin, createDestination);
router.put('/:id', protect, admin, updateDestination);
router.delete('/:id', protect, admin, deleteDestination);

export default router;
