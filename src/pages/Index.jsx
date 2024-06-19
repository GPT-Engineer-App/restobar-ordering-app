import { Container, VStack, SimpleGrid, Box, Heading, Link } from "@chakra-ui/react";
import { FaUtensils, FaCommentDots, FaBell, FaCreditCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW="container.md" 
      backgroundImage="url('/images/restobar-blurred.jpg')" 
      backgroundSize="cover" 
      backgroundPosition="center" 
      filter="blur(8px)" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      position="relative"
    >
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        right="0" 
        bottom="0" 
        backgroundColor="rgba(0, 0, 0, 0.5)" 
        zIndex="1" 
      />
      <VStack spacing={4} position="relative" zIndex="2">
        <SimpleGrid columns={2} spacing={4}>
          <Link as={NavLink} to="/menu">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Box as={FaUtensils} size="48px" mb={4} />
              <Heading as="h3" size="md">Menu</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/feedback">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Box as={FaCommentDots} size="48px" mb={4} />
              <Heading as="h3" size="md">Feedback</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/call-waiter">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Box as={FaBell} size="48px" mb={4} />
              <Heading as="h3" size="md">Call the waiter</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/payment">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
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