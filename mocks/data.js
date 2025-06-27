// Mock data for the HouseLy application
export const mockProperties = [
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
  },
  {
    _id: "3",
    name: "Cozy Family House",
    minPrice: 420000,
    maxPrice: 480000,
    rooms: 3,
    bathrooms: 2,
    size: 150,
    city: "Chicago",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
    ],
    description: "Perfect family home in a quiet neighborhood with excellent schools nearby.",
    location: "Lincoln Park",
    type: "house",
    status: "for-sale",
    features: ["Backyard", "Garage", "Fireplace", "Hardwood Floors"],
    createdAt: "2024-01-12T11:45:00Z",
    updatedAt: "2024-01-19T13:30:00Z"
  },
  {
    _id: "4",
    name: "Waterfront Condo",
    minPrice: 650000,
    maxPrice: 720000,
    rooms: 3,
    bathrooms: 2,
    size: 120,
    city: "Miami",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    ],
    description: "Luxurious waterfront condo with ocean views and private beach access.",
    location: "South Beach",
    type: "condo",
    status: "for-sale",
    features: ["Ocean View", "Beach Access", "Balcony", "Concierge"],
    createdAt: "2024-01-08T08:20:00Z",
    updatedAt: "2024-01-16T15:10:00Z"
  },
  {
    _id: "5",
    name: "Historic Townhouse",
    minPrice: 580000,
    maxPrice: 650000,
    rooms: 4,
    bathrooms: 3,
    size: 200,
    city: "Boston",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    ],
    description: "Beautifully restored historic townhouse with modern amenities and classic charm.",
    location: "Beacon Hill",
    type: "townhouse",
    status: "for-sale",
    features: ["Historic", "Garden", "Fireplace", "Hardwood Floors"],
    createdAt: "2024-01-05T12:00:00Z",
    updatedAt: "2024-01-14T10:25:00Z"
  }
];

export const mockUsers = [
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
  },
  {
    _id: "admin1",
    username: "admin",
    email: "admin@housely.com",
    password: "hashed_admin_password",
    role: "admin",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

export const mockAuthTokens = {
  "john@example.com": "mock_jwt_token_john_123",
  "jane@example.com": "mock_jwt_token_jane_456",
  "admin@housely.com": "mock_jwt_token_admin_789"
};

// In-memory storage for dynamic data
export let mockDataStore = {
  properties: [...mockProperties],
  users: [...mockUsers],
  authTokens: { ...mockAuthTokens }
};

// Helper functions for data manipulation
export const addProperty = (property) => {
  const newProperty = {
    ...property,
    _id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  mockDataStore.properties.push(newProperty);
  return newProperty;
};

export const updateProperty = (id, updates) => {
  const index = mockDataStore.properties.findIndex(p => p._id === id);
  if (index !== -1) {
    mockDataStore.properties[index] = {
      ...mockDataStore.properties[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return mockDataStore.properties[index];
  }
  return null;
};

export const deleteProperty = (id) => {
  const index = mockDataStore.properties.findIndex(p => p._id === id);
  if (index !== -1) {
    const deleted = mockDataStore.properties.splice(index, 1)[0];
    return deleted;
  }
  return null;
};

export const addUser = (user) => {
  const newUser = {
    ...user,
    _id: `user${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  mockDataStore.users.push(newUser);
  return newUser;
};

export const authenticateUser = (email, password) => {
  const user = mockDataStore.users.find(u => u.email === email);
  if (user && user.password === password) {
    return {
      user: { ...user, password: undefined },
      token: mockDataStore.authTokens[email] || `mock_jwt_token_${Date.now()}`
    };
  }
  return null;
}; 