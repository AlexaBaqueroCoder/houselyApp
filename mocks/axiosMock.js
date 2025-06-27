import axios from "axios";
import { mockDataStore, addProperty, updateProperty, deleteProperty, addUser, authenticateUser } from "./data.js";

console.log("AXIOS MOCK INTERCEPTOR LOADED");

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  axios.interceptors.request.use(async (config) => {
    console.log("AXIOS INTERCEPTOR:", config.method, config.url);
    // Helper to simulate network delay
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(200); // Simulate 200ms latency

    // --- PROPERTIES ---
    // GET /properties
    if (config.method === "get" && /\/properties$/.test(config.url)) {
      return Promise.resolve({
        data: mockDataStore.properties,
        status: 200,
        statusText: "OK",
        headers: {},
        config,
      });
    }
    // GET /properties/:id
    if (config.method === "get" && /\/properties\/(\w+)$/.test(config.url)) {
      const id = config.url.match(/\/properties\/(\w+)$/)[1];
      const property = mockDataStore.properties.find((p) => p._id === id);
      return Promise.resolve({
        data: property || null,
        status: property ? 200 : 404,
        statusText: property ? "OK" : "Not Found",
        headers: {},
        config,
      });
    }
    // POST /properties
    if (config.method === "post" && /\/properties$/.test(config.url)) {
      const newProperty = addProperty(config.data ? JSON.parse(config.data) : {});
      return Promise.resolve({
        data: newProperty,
        status: 201,
        statusText: "Created",
        headers: {},
        config,
      });
    }
    // PUT /properties/:id
    if (config.method === "put" && /\/properties\/(\w+)$/.test(config.url)) {
      const id = config.url.match(/\/properties\/(\w+)$/)[1];
      const updates = config.data ? JSON.parse(config.data) : {};
      const updated = updateProperty(id, updates);
      return Promise.resolve({
        data: updated,
        status: updated ? 200 : 404,
        statusText: updated ? "OK" : "Not Found",
        headers: {},
        config,
      });
    }
    // DELETE /properties/:id
    if (config.method === "delete" && /\/properties\/(\w+)$/.test(config.url)) {
      const id = config.url.match(/\/properties\/(\w+)$/)[1];
      const deleted = deleteProperty(id);
      return Promise.resolve({
        data: { message: deleted ? "Property deleted" : "Not found" },
        status: deleted ? 200 : 404,
        statusText: deleted ? "OK" : "Not Found",
        headers: {},
        config,
      });
    }

    // --- USERS ---
    // GET /users
    if (config.method === "get" && /\/users$/.test(config.url)) {
      return Promise.resolve({
        data: mockDataStore.users.map(u => ({ ...u, password: undefined })),
        status: 200,
        statusText: "OK",
        headers: {},
        config,
      });
    }
    // GET /users/:id
    if (config.method === "get" && /\/users\/(\w+)$/.test(config.url)) {
      const id = config.url.match(/\/users\/(\w+)$/)[1];
      const user = mockDataStore.users.find((u) => u._id === id);
      return Promise.resolve({
        data: user ? { ...user, password: undefined } : null,
        status: user ? 200 : 404,
        statusText: user ? "OK" : "Not Found",
        headers: {},
        config,
      });
    }
    // POST /users
    if (config.method === "post" && /\/users$/.test(config.url) && !/\/users\/login$/.test(config.url)) {
      const newUser = addUser(config.data ? JSON.parse(config.data) : {});
      const { password, ...userWithoutPassword } = newUser;
      return Promise.resolve({
        data: userWithoutPassword,
        status: 201,
        statusText: "Created",
        headers: {},
        config,
      });
    }
    // PUT /users/:id
    if (config.method === "put" && /\/users\/(\w+)$/.test(config.url)) {
      const id = config.url.match(/\/users\/(\w+)$/)[1];
      const updates = config.data ? JSON.parse(config.data) : {};
      const userIdx = mockDataStore.users.findIndex((u) => u._id === id);
      if (userIdx !== -1) {
        mockDataStore.users[userIdx] = {
          ...mockDataStore.users[userIdx],
          ...updates,
          updatedAt: new Date().toISOString(),
        };
        const { password, ...userWithoutPassword } = mockDataStore.users[userIdx];
        return Promise.resolve({
          data: userWithoutPassword,
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        });
      } else {
        return Promise.resolve({
          data: null,
          status: 404,
          statusText: "Not Found",
          headers: {},
          config,
        });
      }
    }
    // DELETE /users/:id
    if (config.method === "delete" && /\/users\/(\w+)$/.test(config.url)) {
      const id = config.url.match(/\/users\/(\w+)$/)[1];
      const idx = mockDataStore.users.findIndex((u) => u._id === id);
      if (idx !== -1) {
        mockDataStore.users.splice(idx, 1);
        return Promise.resolve({
          data: { message: "User deleted" },
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        });
      } else {
        return Promise.resolve({
          data: { message: "Not found" },
          status: 404,
          statusText: "Not Found",
          headers: {},
          config,
        });
      }
    }
    // POST /users/login
    if (config.method === "post" && /\/users\/login$/.test(config.url)) {
      const { email, password } = config.data ? JSON.parse(config.data) : {};
      const authResult = authenticateUser(email, password);
      if (authResult) {
        return Promise.resolve({
          data: {
            user: authResult.user,
            token: authResult.token,
            message: "Login successful",
          },
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        });
      } else {
        return Promise.resolve({
          data: { message: "Invalid credentials" },
          status: 401,
          statusText: "Unauthorized",
          headers: {},
          config,
        });
      }
    }
    // POST /users/logout
    if (config.method === "post" && /\/users\/logout$/.test(config.url)) {
      return Promise.resolve({
        data: { message: "Logout successful" },
        status: 200,
        statusText: "OK",
        headers: {},
        config,
      });
    }

    // If not mocked, proceed as normal
    return config;
  }, (error) => Promise.reject(error));
} 