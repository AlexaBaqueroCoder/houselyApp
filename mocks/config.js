// Mocking system configuration
export const mockConfig = {
  // Enable/disable mocking globally
  enabled: process.env.NODE_ENV === 'development',
  
  // Base URL for API requests (used in handlers)
  baseUrl: 'http://127.0.0.1:8004',
  
  // MSW configuration
  msw: {
    onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  },
  
  // Mock data settings
  data: {
    // Delay responses to simulate network latency (in ms)
    responseDelay: 0,
    
    // Enable console logging for requests
    enableLogging: true,
    
    // Auto-reset data on page reload
    autoReset: false,
  },
  
  // Authentication settings
  auth: {
    // Mock JWT token expiration (in hours)
    tokenExpirationHours: 24,
    
    // Enable token validation
    validateTokens: false,
  }
};

// Helper function to check if mocking should be enabled
export const shouldEnableMocking = () => {
  return mockConfig.enabled && typeof window !== 'undefined';
};

// Helper function to get MSW config
export const getMswConfig = () => {
  return mockConfig.msw;
};

// Helper function to get data config
export const getDataConfig = () => {
  return mockConfig.data;
}; 