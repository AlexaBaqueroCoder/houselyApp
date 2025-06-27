"use client";

import { useState, useEffect } from 'react';
import { Box, Button, VStack, HStack, Text, Badge, useToast } from '@chakra-ui/react';

export default function MockDemo() {
  const [isMockingActive, setIsMockingActive] = useState(false);
  const [mockData, setMockData] = useState(null);
  const toast = useToast();

  useEffect(() => {
    // Check if mocking is active
    const checkMockingStatus = () => {
      if (window.mockUtils) {
        setIsMockingActive(true);
        setMockData(window.mockUtils.getMockData());
      }
    };

    // Check immediately and then every second
    checkMockingStatus();
    const interval = setInterval(checkMockingStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddTestProperty = () => {
    if (window.mockUtils) {
      window.mockUtils.addTestProperty({
        name: "Demo Property",
        minPrice: 300000,
        maxPrice: 350000,
        rooms: 3,
        bathrooms: 2,
        city: "Demo City",
        description: "This is a demo property added via the mock system"
      });
      setMockData(window.mockUtils.getMockData());
      toast({
        title: "Test Property Added",
        description: "A new test property has been added to the mock data",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleResetData = () => {
    if (window.mockUtils) {
      window.mockUtils.resetMockData();
      setMockData(window.mockUtils.getMockData());
      toast({
        title: "Data Reset",
        description: "Mock data has been reset to initial state",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (!isMockingActive) {
    return (
      <Box p={4} bg="yellow.100" border="1px" borderColor="yellow.300" borderRadius="md">
        <Text fontSize="sm" color="yellow.800">
          🔄 Mocking system is starting up... Please wait a moment.
        </Text>
      </Box>
    );
  }

  return (
    <Box p={4} bg="blue.50" border="1px" borderColor="blue.200" borderRadius="md" mb={4}>
      <VStack spacing={3} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="lg" fontWeight="bold" color="blue.800">
            🧪 Mock System Demo
          </Text>
          <Badge colorScheme="green">Active</Badge>
        </HStack>
        
        <Text fontSize="sm" color="blue.700">
          All API requests are being intercepted and served with mock data.
        </Text>

        {mockData && (
          <Box bg="white" p={3} borderRadius="md" border="1px" borderColor="blue.200">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>Current Mock Data:</Text>
            <HStack spacing={4} fontSize="xs">
              <Badge colorScheme="blue">{mockData.properties.length} Properties</Badge>
              <Badge colorScheme="purple">{mockData.users.length} Users</Badge>
            </HStack>
          </Box>
        )}

        <HStack spacing={2}>
          <Button size="sm" colorScheme="blue" onClick={handleAddTestProperty}>
            Add Test Property
          </Button>
          <Button size="sm" colorScheme="orange" onClick={handleResetData}>
            Reset Data
          </Button>
        </HStack>

        <Box fontSize="xs" color="blue.600">
          <Text fontWeight="semibold">Available in Console:</Text>
          <Text>• window.mockUtils.addTestProperty(data)</Text>
          <Text>• window.mockUtils.addTestUser(data)</Text>
          <Text>• window.mockUtils.getMockData()</Text>
          <Text>• window.mockUtils.resetMockData()</Text>
        </Box>
      </VStack>
    </Box>
  );
} 