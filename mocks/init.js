import { worker } from './browser.js';
import { shouldEnableMocking, getMswConfig } from './config.js';

let isMockingEnabled = false;

export const enableMocking = async () => {
  if (!shouldEnableMocking()) {
    console.log('🔄 Mocking is disabled (not in development mode or server-side)');
    return;
  }

  if (isMockingEnabled) {
    console.log('🔄 Mocking is already enabled');
    return;
  }

  try {
    // Start the worker with configuration
    await worker.start(getMswConfig());
    
    isMockingEnabled = true;
    console.log('✅ Mocking enabled successfully! All API requests will be intercepted.');
    console.log('📝 Available mock endpoints:');
    console.log('   - GET    /properties');
    console.log('   - GET    /properties/:id');
    console.log('   - POST   /properties');
    console.log('   - PUT    /properties/:id');
    console.log('   - DELETE /properties/:id');
    console.log('   - GET    /users');
    console.log('   - GET    /users/:id');
    console.log('   - POST   /users');
    console.log('   - PUT    /users/:id');
    console.log('   - DELETE /users/:id');
    console.log('   - POST   /users/login');
    console.log('   - POST   /users/logout');
    console.log('');
    console.log('🧪 Test utilities available in browser console as window.mockUtils');
  } catch (error) {
    console.error('❌ Failed to enable mocking:', error);
  }
};

export const disableMocking = async () => {
  if (!isMockingEnabled) {
    console.log('🔄 Mocking is not enabled');
    return;
  }

  try {
    await worker.stop();
    isMockingEnabled = false;
    console.log('✅ Mocking disabled successfully!');
  } catch (error) {
    console.error('❌ Failed to disable mocking:', error);
  }
};

export const isMockingActive = () => isMockingEnabled;

// Auto-enable mocking in development
if (shouldEnableMocking()) {
  // Enable mocking after a short delay to ensure the app is loaded
  setTimeout(() => {
    enableMocking();
  }, 100);
} 