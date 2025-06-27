import { setupWorker } from 'msw/browser';
import { handlers } from './handlers.js';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

// Enable the mock service worker in development
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 Starting MSW (Mock Service Worker) for development...');
} 