import { Box, Heading, VStack, Textarea, Button } from "@chakra-ui/react";

const Feedback = () => {
  return (
    <Box p={4} bg="white">
      <Heading as="h1" mb={4}>Feedback</Heading>
      <VStack spacing={4} align="start">
        <Textarea placeholder="Write your feedback here..." />
        <Button colorScheme="teal">Submit Feedback</Button>
      </VStack>
    </Box>
  );
};

export default Feedback;