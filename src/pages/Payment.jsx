import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Payment = () => {
  return (
    <Box p={4} bg="white">
      <Heading as="h1" mb={4}>Payment</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Card Number" />
        <Input placeholder="Card Holder Name" />
        <Input placeholder="Expiry Date" />
        <Input placeholder="CVV" />
        <Button colorScheme="teal">Pay Now</Button>
      </VStack>
    </Box>
  );
};

export default Payment;