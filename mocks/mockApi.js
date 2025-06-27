import { mockDataStore, addProperty, updateProperty, deleteProperty, addUser, authenticateUser } from "./data.js";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Properties
export async function getProperties() {
  await delay(100);
  return mockDataStore.properties;
}

export async function getPropertyById(id) {
  await delay(100);
  return mockDataStore.properties.find(p => p._id === id) || null;
}

export async function createProperty(data) {
  await delay(100);
  return addProperty(data);
}

export async function updatePropertyById(id, updates) {
  await delay(100);
  return updateProperty(id, updates);
}

export async function deletePropertyById(id) {
  await delay(100);
  return deleteProperty(id);
}

// Users
export async function getUsers() {
  await delay(100);
  return mockDataStore.users.map(u => ({ ...u, password: undefined }));
}

export async function getUserById(id) {
  await delay(100);
  const user = mockDataStore.users.find(u => u._id === id);
  return user ? { ...user, password: undefined } : null;
}

export async function createUser(data) {
  await delay(100);
  const user = addUser(data);
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export async function loginUser(email, password) {
  await delay(100);
  const auth = authenticateUser(email, password);
  if (auth) {
    return { user: auth.user, token: auth.token, message: "Login successful" };
  }
  throw new Error("Invalid credentials");
} 