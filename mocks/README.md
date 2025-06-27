# Mock Service Worker (MSW) Setup for HouseLy App

This directory contains a comprehensive mocking system that intercepts all API requests and provides in-memory data, allowing you to develop without depending on a backend server.

## 🚀 Quick Start

The mocking system is automatically enabled in development mode. When you run `npm run dev`, all API requests will be intercepted and served with mock data.

## 📁 File Structure

```
mocks/
├── data.js          # Mock data and helper functions
├── handlers.js      # MSW request handlers
├── browser.js       # MSW browser setup
├── init.js          # Mocking initialization utilities
├── testUtils.js     # Testing and debugging utilities
└── README.md        # This documentation
```

## 🔧 How It Works

1. **Service Worker**: MSW registers a service worker that intercepts all HTTP requests
2. **Request Handlers**: Each API endpoint has a corresponding handler that returns mock data
3. **In-Memory Storage**: Data is stored in memory and can be modified during development
4. **Automatic Initialization**: The system starts automatically in development mode

## 📋 Available Mock Endpoints

### Properties
- `GET /properties` - Get all properties
- `GET /properties/:id` - Get a specific property
- `POST /properties` - Create a new property
- `PUT /properties/:id` - Update a property
- `DELETE /properties/:id` - Delete a property

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Authentication
- `POST /users/login` - User login
- `POST /users/logout` - User logout

## 🧪 Testing Utilities

The mocking system provides utilities for testing and debugging. These are available in the browser console as `window.mockUtils`:

### Available Functions

```javascript
// Reset mock data to initial state
window.mockUtils.resetMockData()

// Get current mock data
window.mockUtils.getMockData()

// Add a test property
window.mockUtils.addTestProperty({
  name: "Test Property",
  minPrice: 200000,
  maxPrice: 250000,
  rooms: 3,
  bathrooms: 2,
  city: "Test City"
})

// Add a test user
window.mockUtils.addTestUser({
  username: "testuser",
  email: "test@example.com",
  password: "testpass"
})

// Access the raw data store
window.mockUtils.mockDataStore
```

### Example Usage

```javascript
// Add a new test property
window.mockUtils.addTestProperty({
  name: "Beautiful Beach House",
  minPrice: 500000,
  maxPrice: 600000,
  rooms: 4,
  bathrooms: 3,
  city: "Miami Beach",
  description: "Stunning beachfront property with ocean views"
});

// Check the current data
console.log(window.mockUtils.getMockData());

// Reset everything
window.mockUtils.resetMockData();
```

## 🔐 Authentication

The system includes mock authentication with these test credentials:

### Test Users
- **Email**: `john@example.com` / **Password**: `hashed_password_123`
- **Email**: `jane@example.com` / **Password**: `hashed_password_456`
- **Email**: `admin@housely.com` / **Password**: `hashed_admin_password`

### Login Flow
1. Use any of the test credentials in the login form
2. The system will return a mock JWT token
3. The token will be stored in localStorage as `jwtToken`

## 📊 Mock Data Structure

### Property Object
```javascript
{
  _id: "1",
  name: "Modern Downtown Apartment",
  minPrice: 250000,
  maxPrice: 280000,
  rooms: 2,
  bathrooms: 2,
  size: 85,
  city: "New York",
  image: "https://...",
  images: ["https://...", "https://..."],
  description: "Beautiful modern apartment...",
  location: "Downtown Manhattan",
  type: "apartment",
  status: "for-sale",
  features: ["Balcony", "Gym", "Pool", "Parking"],
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-20T14:45:00Z"
}
```

### User Object
```javascript
{
  _id: "user1",
  username: "john_doe",
  email: "john@example.com",
  password: "hashed_password_123",
  role: "user",
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z"
}
```

## 🛠️ Development Workflow

1. **Start Development**: Run `npm run dev`
2. **Mocking Enabled**: All API calls are automatically intercepted
3. **Test Features**: Use the browser console utilities to test different scenarios
4. **Add Data**: Use `addTestProperty()` or `addTestUser()` to add test data
5. **Reset Data**: Use `resetMockData()` to return to initial state

## 🔍 Debugging

### Console Logs
The mocking system provides detailed console logs:
- `🔄 Mock: [METHOD] [ENDPOINT] - [Description]` - Request intercepted
- `✅ Mocking enabled successfully!` - System started
- `🧪 Mock utilities available` - Test utilities loaded

### Network Tab
In the browser's Network tab, you'll see:
- All requests marked as "mocked"
- Response times are instant
- No actual network requests are made

## 🚫 Disabling Mocking

To disable mocking and use real API calls:

```javascript
// In browser console
const { disableMocking } = await import('@/mocks/init.js');
await disableMocking();
```

To re-enable:
```javascript
const { enableMocking } = await import('@/mocks/init.js');
await enableMocking();
```

## 📝 Adding New Endpoints

To add support for new API endpoints:

1. **Add Handler** in `handlers.js`:
```javascript
http.get('http://127.0.0.1:8004/new-endpoint', () => {
  return HttpResponse.json(mockData);
});
```

2. **Add Data** in `data.js`:
```javascript
export const mockNewData = [...];
```

3. **Update Helpers** if needed for CRUD operations

## 🎯 Benefits

- **No Backend Dependency**: Develop frontend without waiting for backend
- **Consistent Data**: Predictable, structured data for testing
- **Fast Development**: No network latency or API issues
- **Easy Testing**: Add/modify data on the fly
- **Realistic Scenarios**: Test different data states easily

## 🔧 Troubleshooting

### Mocking Not Working
1. Check browser console for errors
2. Ensure you're in development mode (`NODE_ENV=development`)
3. Check that the service worker is registered in Application tab
4. Clear browser cache and reload

### Service Worker Issues
1. Check if `public/mockServiceWorker.js` exists
2. Run `npx msw init public/ --save` to regenerate
3. Clear service worker cache in browser

### Data Not Persisting
- Mock data is in-memory and resets on page reload
- Use `window.mockUtils.addTestProperty()` to add persistent test data
- Use `window.mockUtils.resetMockData()` to reset to initial state 