import express from 'express';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({ 
    success: true,
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

// Test route
router.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'API routes are working!' 
  });
});

export default router;
