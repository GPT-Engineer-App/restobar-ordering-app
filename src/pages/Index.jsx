import { Container, Image, VStack, SimpleGrid, Box, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="purple.50">
      <VStack spacing={4}>
        <SimpleGrid columns={2} spacing={4}>
          <Link as={NavLink} to="/menu">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Image src="/images/menu.jpg" alt="Menu" mb={4} />
              <Heading as="h3" size="md">Menu</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/feedback">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Image src="/images/feedback.jpg" alt="Feedback" mb={4} />
              <Heading as="h3" size="md">Feedback</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/call-waiter">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Image src="/images/call-waiter.jpg" alt="Call the waiter" mb={4} />
              <Heading as="h3" size="md">Call the waiter</Heading>
            </Box>
          </Link>
          <Link as={NavLink} to="/payment">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Image src="/images/payment.jpg" alt="Payment" mb={4} />
              <Heading as="h3" size="md">Payment</Heading>
            </Box>
          </Link>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;