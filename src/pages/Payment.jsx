import { Box, Heading, VStack, Input, Button, useColorModeValue } from "@chakra-ui/react";

const Payment = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box p={4} bg={bg} color={color}>
      <Heading as="h1" mb={4} color={color}>Payment</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Card Number" bg={bg} color={color} />
        <Input placeholder="Card Holder Name" bg={bg} color={color} />
        <Input placeholder="Expiry Date" bg={bg} color={color} />
        <Input placeholder="CVV" bg={bg} color={color} />
        <Button colorScheme="teal" bg={bg} color={color}>Pay Now</Button>
      </VStack>
    </Box>
  );
};

export default Payment;