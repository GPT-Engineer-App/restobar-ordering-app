import { Box, Heading, VStack, Textarea, Button, useColorModeValue } from "@chakra-ui/react";

const Feedback = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box p={4} bg={bgColor} color={textColor}>
      <Heading as="h1" mb={4} color={textColor}>Feedback</Heading>
      <VStack spacing={4} align="start">
        <Textarea placeholder="Write your feedback here..." bg={bgColor} color={textColor} />
        <Button colorScheme="teal">Submit Feedback</Button>
      </VStack>
    </Box>
  );
};

export default Feedback;