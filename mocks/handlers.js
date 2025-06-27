import { http, HttpResponse } from 'msw';
import { 
  mockDataStore, 
  addProperty, 
  updateProperty, 
  deleteProperty, 
  addUser, 
  authenticateUser 
} from './data.js';

// Create handlers for all API endpoints
export const handlers = [
  // Properties endpoints
  http.get('http://127.0.0.1:8004/properties', () => {
    console.log('🔄 Mock: GET /properties - Returning all properties');
    return HttpResponse.json(mockDataStore.properties);
  }),

  http.get('http://127.0.0.1:8004/properties/:id', ({ params }) => {
    const { id } = params;
    console.log(`🔄 Mock: GET /properties/${id} - Returning property`);
    
    const property = mockDataStore.properties.find(p => p._id === id);
    if (property) {
      return HttpResponse.json(property);
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  }),

  http.post('http://127.0.0.1:8004/properties', async ({ request }) => {
    console.log('🔄 Mock: POST /properties - Creating new property');
    
    try {
      const propertyData = await request.json();
      const newProperty = addProperty(propertyData);
      return HttpResponse.json(newProperty, { status: 201 });
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),

  http.put('http://127.0.0.1:8004/properties/:id', async ({ params, request }) => {
    const { id } = params;
    console.log(`🔄 Mock: PUT /properties/${id} - Updating property`);
    
    try {
      const updates = await request.json();
      const updatedProperty = updateProperty(id, updates);
      
      if (updatedProperty) {
        return HttpResponse.json(updatedProperty);
      } else {
        return new HttpResponse(null, { status: 404 });
      }
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),

  http.delete('http://127.0.0.1:8004/properties/:id', ({ params }) => {
    const { id } = params;
    console.log(`🔄 Mock: DELETE /properties/${id} - Deleting property`);
    
    const deletedProperty = deleteProperty(id);
    if (deletedProperty) {
      return HttpResponse.json({ message: 'Property deleted successfully' });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  }),

  // Users endpoints
  http.get('http://127.0.0.1:8004/users', () => {
    console.log('🔄 Mock: GET /users - Returning all users');
    return HttpResponse.json(mockDataStore.users.map(user => ({
      ...user,
      password: undefined // Don't return passwords
    })));
  }),

  http.get('http://127.0.0.1:8004/users/:id', ({ params }) => {
    const { id } = params;
    console.log(`🔄 Mock: GET /users/${id} - Returning user`);
    
    const user = mockDataStore.users.find(u => u._id === id);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return HttpResponse.json(userWithoutPassword);
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  }),

  http.post('http://127.0.0.1:8004/users', async ({ request }) => {
    console.log('🔄 Mock: POST /users - Creating new user');
    
    try {
      const userData = await request.json();
      const newUser = addUser(userData);
      const { password, ...userWithoutPassword } = newUser;
      return HttpResponse.json(userWithoutPassword, { status: 201 });
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),

  http.put('http://127.0.0.1:8004/users/:id', async ({ params, request }) => {
    const { id } = params;
    console.log(`🔄 Mock: PUT /users/${id} - Updating user`);
    
    try {
      const updates = await request.json();
      const index = mockDataStore.users.findIndex(u => u._id === id);
      
      if (index !== -1) {
        mockDataStore.users[index] = {
          ...mockDataStore.users[index],
          ...updates,
          updatedAt: new Date().toISOString()
        };
        const { password, ...userWithoutPassword } = mockDataStore.users[index];
        return HttpResponse.json(userWithoutPassword);
      } else {
        return new HttpResponse(null, { status: 404 });
      }
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),

  http.delete('http://127.0.0.1:8004/users/:id', ({ params }) => {
    const { id } = params;
    console.log(`🔄 Mock: DELETE /users/${id} - Deleting user`);
    
    const index = mockDataStore.users.findIndex(u => u._id === id);
    if (index !== -1) {
      const deletedUser = mockDataStore.users.splice(index, 1)[0];
      return HttpResponse.json({ message: 'User deleted successfully' });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  }),

  // Authentication endpoints
  http.post('http://127.0.0.1:8004/users/login', async ({ request }) => {
    console.log('🔄 Mock: POST /users/login - Authenticating user');
    
    try {
      const { email, password } = await request.json();
      const authResult = authenticateUser(email, password);
      
      if (authResult) {
        return HttpResponse.json({
          user: authResult.user,
          token: authResult.token,
          message: 'Login successful'
        });
      } else {
        return new HttpResponse(
          JSON.stringify({ message: 'Invalid credentials' }), 
          { status: 401 }
        );
      }
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),

  http.post('http://127.0.0.1:8004/users/logout', () => {
    console.log('🔄 Mock: POST /users/logout - Logging out user');
    return HttpResponse.json({ message: 'Logout successful' });
  }),

  // Catch-all handler for any other requests to the backend
  http.all('http://127.0.0.1:8004/*', ({ request }) => {
    console.log(`🔄 Mock: ${request.method} ${request.url} - No handler found, returning 404`);
    return new HttpResponse(null, { status: 404 });
  }),

  // Also handle requests without the full URL (in case axios base URL is set)
  http.get('/properties', () => {
    console.log('🔄 Mock: GET /properties - Returning all properties');
    return HttpResponse.json(mockDataStore.properties);
  }),

  http.get('/properties/:id', ({ params }) => {
    const { id } = params;
    console.log(`🔄 Mock: GET /properties/${id} - Returning property`);
    
    const property = mockDataStore.properties.find(p => p._id === id);
    if (property) {
      return HttpResponse.json(property);
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  }),

  http.post('/users', async ({ request }) => {
    console.log('🔄 Mock: POST /users - Creating new user');
    
    try {
      const userData = await request.json();
      const newUser = addUser(userData);
      const { password, ...userWithoutPassword } = newUser;
      return HttpResponse.json(userWithoutPassword, { status: 201 });
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),

  http.post('/users/login', async ({ request }) => {
    console.log('🔄 Mock: POST /users/login - Authenticating user');
    
    try {
      const { email, password } = await request.json();
      const authResult = authenticateUser(email, password);
      
      if (authResult) {
        return HttpResponse.json({
          user: authResult.user,
          token: authResult.token,
          message: 'Login successful'
        });
      } else {
        return new HttpResponse(
          JSON.stringify({ message: 'Invalid credentials' }), 
          { status: 401 }
        );
      }
    } catch (error) {
      return new HttpResponse(null, { status: 400 });
    }
  }),
]; 