import { Box, Heading, VStack, Button, Input } from "@chakra-ui/react";

const Order = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Place Your Order</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Item Name" />
        <Input placeholder="Quantity" type="number" />
        <Button colorScheme="teal">Submit Order</Button>
      </VStack>
    </Box>
  );
};

export default Order;