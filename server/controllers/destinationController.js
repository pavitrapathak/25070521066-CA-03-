import Destination from '../models/Destination.js';

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
export const getAllDestinations = async (req, res) => {
  try {
    const { continent, minPrice, maxPrice, sort } = req.query;
    
    let query = {};
    
    if (continent && continent !== 'All') {
      query.continent = continent;
    }
    
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let destinations = Destination.find(query);
    
    // Sorting
    if (sort === 'price_low') {
      destinations = destinations.sort({ price: 1 });
    } else if (sort === 'price_high') {
      destinations = destinations.sort({ price: -1 });
    } else if (sort === 'rating') {
      destinations = destinations.sort({ rating: -1 });
    } else {
      destinations = destinations.sort({ createdAt: -1 });
    }

    const result = await destinations;

    res.json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single destination
// @route   GET /api/destinations/:id
// @access  Public
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found'
      });
    }

    res.json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create destination
// @route   POST /api/destinations
// @access  Private/Admin
export const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update destination
// @route   PUT /api/destinations/:id
// @access  Private/Admin
export const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found'
      });
    }

    res.json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete destination
// @route   DELETE /api/destinations/:id
// @access  Private/Admin
export const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found'
      });
    }

    res.json({
      success: true,
      message: 'Destination deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get popular destinations
// @route   GET /api/destinations/popular
// @access  Public
export const getPopularDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({ popular: true })
      .sort({ rating: -1 })
      .limit(6);

    res.json({
      success: true,
      count: destinations.length,
      data: destinations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Search destinations
// @route   GET /api/destinations/search
// @access  Public
export const searchDestinations = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a search query'
      });
    }

    const destinations = await Destination.find({
      $text: { $search: q }
    });

    res.json({
      success: true,
      count: destinations.length,
      data: destinations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
