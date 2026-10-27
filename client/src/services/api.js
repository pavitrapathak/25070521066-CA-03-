// API Configuration
const API_URL = 'http://localhost:5000/api';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Helper function to set auth token
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Helper function to remove auth token
export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

// Helper function to get current user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

// Helper function to set current user
export const setCurrentUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

// Helper function to remove current user
export const removeCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

// API service object
const api = {
  // ============== AUTH ENDPOINTS ==============
  
  // Register new user
  register: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      
      if (data.success) {
        // Save token and user data
        setAuthToken(data.data.token);
        setCurrentUser(data.data);
      }
      
      return data;
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, message: error.message };
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      
      if (data.success) {
        // Save token and user data
        setAuthToken(data.data.token);
        setCurrentUser(data.data);
      }
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: error.message };
    }
  },

  // Logout user
  logout: () => {
    removeAuthToken();
    removeCurrentUser();
  },

  // Get user profile
  getProfile: async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'No token found' };
      }

      const response = await fetch(`${API_URL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get profile error:', error);
      return { success: false, message: error.message };
    }
  },

  // Update user profile
  updateProfile: async (updates) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'No token found' };
      }

      const response = await fetch(`${API_URL}/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updates),
      });
      const data = await response.json();
      
      if (data.success) {
        setCurrentUser(data.data);
      }
      
      return data;
    } catch (error) {
      console.error('Update profile error:', error);
      return { success: false, message: error.message };
    }
  },

  // ============== DESTINATION ENDPOINTS ==============
  
  // Get all destinations
  getDestinations: async (filters = {}) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const url = queryParams ? `${API_URL}/destinations?${queryParams}` : `${API_URL}/destinations`;
      
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get destinations error:', error);
      return { success: false, message: error.message };
    }
  },

  // Get single destination
  getDestination: async (id) => {
    try {
      const response = await fetch(`${API_URL}/destinations/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get destination error:', error);
      return { success: false, message: error.message };
    }
  },

  // Get popular destinations
  getPopularDestinations: async () => {
    try {
      const response = await fetch(`${API_URL}/destinations/popular`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get popular destinations error:', error);
      return { success: false, message: error.message };
    }
  },

  // Search destinations
  searchDestinations: async (query) => {
    try {
      const response = await fetch(`${API_URL}/destinations/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Search destinations error:', error);
      return { success: false, message: error.message };
    }
  },

  // ============== WISHLIST ENDPOINTS ==============
  
  // Get wishlist
  getWishlist: async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/users/wishlist`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get wishlist error:', error);
      return { success: false, message: error.message };
    }
  },

  // Add to wishlist
  addToWishlist: async (destinationId) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/users/wishlist/${destinationId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Add to wishlist error:', error);
      return { success: false, message: error.message };
    }
  },

  // Remove from wishlist
  removeFromWishlist: async (destinationId) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/users/wishlist/${destinationId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Remove from wishlist error:', error);
      return { success: false, message: error.message };
    }
  },

  // ============== BOOKING ENDPOINTS ==============
  
  // Create booking
  createBooking: async (bookingData) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Create booking error:', error);
      return { success: false, message: error.message };
    }
  },

  // Get user bookings
  getMyBookings: async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/bookings/my-bookings`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get bookings error:', error);
      return { success: false, message: error.message };
    }
  },

  // Get booking by ID
  getBooking: async (id) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/bookings/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get booking error:', error);
      return { success: false, message: error.message };
    }
  },

  // Cancel booking
  cancelBooking: async (id) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return { success: false, message: 'Please login first' };
      }

      const response = await fetch(`${API_URL}/bookings/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Cancel booking error:', error);
      return { success: false, message: error.message };
    }
  },
};

export default api;
