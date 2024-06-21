import { Container, VStack, SimpleGrid, Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import { FaUtensils, FaCommentDots, FaBell, FaCreditCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <Container 
      centerContent 
      maxW="container.md" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      position="relative"
    >
      <VStack spacing={4} position="relative" zIndex="2">
        <SimpleGrid columns={2} spacing={4}>
          <Link as={NavLink} to="/menu">
            <Box p={4} borderWidth="2px" borderRadius="lg" bg={bg} color={color} boxShadow="lg">
              <Box as={FaUtensils} size="48px" mb={4} />
              <Heading as="h3" size="md">Menu</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/feedback">
            <Box p={4} borderWidth="2px" borderRadius="lg" bg={bg} color={color} boxShadow="lg">
              <Box as={FaCommentDots} size="48px" mb={4} />
              <Heading as="h3" size="md">Feedback</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/call-waiter">
            <Box p={4} borderWidth="2px" borderRadius="lg" bg={bg} color={color} boxShadow="lg">
              <Box as={FaBell} size="48px" mb={4} />
              <Heading as="h3" size="md">Call the waiter</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/payment">
            <Box p={4} borderWidth="2px" borderRadius="lg" bg={bg} color={color} boxShadow="lg">
              <Box as={FaCreditCard} size="48px" mb={4} />
              <Heading as="h3" size="md">Payment</Heading>
            </Box>
          </Link>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;