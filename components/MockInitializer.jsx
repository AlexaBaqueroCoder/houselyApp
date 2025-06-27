"use client";

import { useEffect } from 'react';

// Dynamic import to avoid SSR issues and guarantee client-side execution
const initializeMocking = async () => {
  if (process.env.NODE_ENV === 'development') {
    try {
      await import('@/mocks/axiosMock.js');
      const { enableMocking } = await import('@/mocks/init.js');
      await enableMocking();
      
      // Also load test utilities
      await import('@/mocks/testUtils.js');
    } catch (error) {
      console.error('Failed to initialize mocking:', error);
    }
  }
};

export default function MockInitializer() {
  useEffect(() => {
    initializeMocking();
  }, []);

  // This component doesn't render anything
  return null;
} 