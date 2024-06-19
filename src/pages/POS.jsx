import { Box, Heading, VStack, HStack, Button, Input, Select } from "@chakra-ui/react";

const POS = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>POS System</Heading>
      <VStack spacing={4} align="start">
        <HStack spacing={4}>
          <Select placeholder="Select Item">
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
          </Select>
          <Input placeholder="Quantity" type="number" />
          <Button colorScheme="teal">Add to Order</Button>
        </HStack>
        <Box>
          <Heading as="h2" size="md">Order Summary</Heading>
          {/* Order summary details */}
        </Box>
        <Button colorScheme="teal">Place Order</Button>
      </VStack>
    </Box>
  );
};

export default POS;