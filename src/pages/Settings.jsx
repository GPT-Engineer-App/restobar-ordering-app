import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Settings</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Restaurant Name" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Email Address" />
        <Button colorScheme="teal">Save Settings</Button>
      </VStack>
    </Box>
  );
};

export default Settings;