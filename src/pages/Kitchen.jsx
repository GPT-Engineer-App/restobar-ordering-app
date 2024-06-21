import { Box, Heading, VStack, Text, SimpleGrid, Image, useColorModeValue } from "@chakra-ui/react";

const Kitchen = () => {
  const categories = [
    { name: "Appetizers", items: [{ name: "Spring Rolls", price: "$5.00", image: "/images/appetizer.jpg" }, { name: "Garlic Bread", price: "$4.00", image: "/images/appetizer.jpg" }] },
    { name: "Main Course", items: [{ name: "Grilled Chicken", price: "$12.00", image: "/images/main-course.jpg" }] },
    // Add more categories and items as needed
  ];

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box p={4} bg={bg} color={color}>
      <Heading as="h1" mb={4}>Kitchen Menu</Heading>
      {categories.map((category) => (
        <Box key={category.name} mb={6}>
          <Heading as="h2" size="lg" mb={4}>{category.name}</Heading>
          <SimpleGrid columns={3} spacing={4}>
            {category.items.map((item) => (
              <Box key={item.name} p={4} borderWidth="1px" borderRadius="md" bg={bg}>
                <Image src={item.image} alt={item.name} mb={4} />
                <Heading as="h3" size="md">{item.name}</Heading>
                <Text>{item.price}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default Kitchen;