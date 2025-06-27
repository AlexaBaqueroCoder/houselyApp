import { mockDataStore } from './data.js';

// Utility functions for testing and managing mock data

export const resetMockData = () => {
  // Reset to initial state
  mockDataStore.properties = [
    {
      _id: "1",
      name: "Modern Downtown Apartment",
      minPrice: 250000,
      maxPrice: 280000,
      rooms: 2,
      bathrooms: 2,
      size: 85,
      city: "New York",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ],
      description: "Beautiful modern apartment in the heart of downtown with stunning city views.",
      location: "Downtown Manhattan",
      type: "apartment",
      status: "for-sale",
      features: ["Balcony", "Gym", "Pool", "Parking"],
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-20T14:45:00Z"
    },
    {
      _id: "2",
      name: "Luxury Villa with Pool",
      minPrice: 850000,
      maxPrice: 950000,
      rooms: 4,
      bathrooms: 3,
      size: 280,
      city: "Los Angeles",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
      ],
      description: "Stunning luxury villa with private pool, garden, and mountain views.",
      location: "Beverly Hills",
      type: "villa",
      status: "for-sale",
      features: ["Pool", "Garden", "Mountain View", "Security System"],
      createdAt: "2024-01-10T09:15:00Z",
      updatedAt: "2024-01-18T16:20:00Z"
    }
  ];

  mockDataStore.users = [
    {
      _id: "user1",
      username: "john_doe",
      email: "john@example.com",
      password: "hashed_password_123",
      role: "user",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    {
      _id: "user2",
      username: "jane_smith",
      email: "jane@example.com",
      password: "hashed_password_456",
      role: "user",
      createdAt: "2024-01-02T00:00:00Z",
      updatedAt: "2024-01-02T00:00:00Z"
    }
  ];

  console.log('🔄 Mock data reset to initial state');
};

export const getMockData = () => {
  return {
    properties: mockDataStore.properties,
    users: mockDataStore.users.map(user => ({ ...user, password: undefined }))
  };
};

export const addTestProperty = (propertyData) => {
  const testProperty = {
    _id: `test_${Date.now()}`,
    name: propertyData.name || "Test Property",
    minPrice: propertyData.minPrice || 100000,
    maxPrice: propertyData.maxPrice || 150000,
    rooms: propertyData.rooms || 2,
    bathrooms: propertyData.bathrooms || 1,
    size: propertyData.size || 100,
    city: propertyData.city || "Test City",
    image: propertyData.image || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: propertyData.images || ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"],
    description: propertyData.description || "Test property description",
    location: propertyData.location || "Test Location",
    type: propertyData.type || "house",
    status: propertyData.status || "for-sale",
    features: propertyData.features || ["Test Feature"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  mockDataStore.properties.push(testProperty);
  console.log('✅ Test property added:', testProperty);
  return testProperty;
};

export const addTestUser = (userData) => {
  const testUser = {
    _id: `test_user_${Date.now()}`,
    username: userData.username || "testuser",
    email: userData.email || "test@example.com",
    password: userData.password || "testpassword",
    role: userData.role || "user",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  mockDataStore.users.push(testUser);
  console.log('✅ Test user added:', { ...testUser, password: undefined });
  return testUser;
};

// Make these available globally for testing in browser console
if (typeof window !== 'undefined') {
  window.mockUtils = {
    resetMockData,
    getMockData,
    addTestProperty,
    addTestUser,
    mockDataStore
  };
  
  console.log('🧪 Mock utilities available in browser console as window.mockUtils');
  console.log('Available functions:');
  console.log('  - window.mockUtils.resetMockData()');
  console.log('  - window.mockUtils.getMockData()');
  console.log('  - window.mockUtils.addTestProperty(data)');
  console.log('  - window.mockUtils.addTestUser(data)');
  console.log('  - window.mockUtils.mockDataStore');
} 