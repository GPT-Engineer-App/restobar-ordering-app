import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Menu</Heading>
      <VStack spacing={4} align="start">
        <Box>
          <Heading as="h2" size="md">Item 1</Heading>
          <Text>Description of item 1</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">Item 2</Heading>
          <Text>Description of item 2</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">Item 3</Heading>
          <Text>Description of item 3</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Menu;