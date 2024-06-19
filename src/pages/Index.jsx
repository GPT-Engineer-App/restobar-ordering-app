import { Container, Image, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/crazytime-logo-new.png" alt="CrazyTime RestoBar Logo" boxSize="200px" />
      </VStack>
    </Container>
  );
};

export default Index;