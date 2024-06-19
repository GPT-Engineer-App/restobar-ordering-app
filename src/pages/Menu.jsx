import { Box, Heading, VStack, Text, SimpleGrid, Image } from "@chakra-ui/react";

const Menu = () => {
  const categories = [
    { name: "Popular", items: [{ name: "Cream Pancake", price: "$12.00", image: "/images/cream-pancake.jpg" }, { name: "White Source Pasta", price: "$12.00", image: "/images/white-source-pasta.jpg" }] },
    { name: "Starter", items: [{ name: "Farm Ville Pizza", price: "$12.00", image: "/images/farm-ville-pizza.jpg" }] },
    // Add more categories and items as needed
  ];

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Menu</Heading>
      {categories.map((category) => (
        <Box key={category.name} mb={6}>
          <Heading as="h2" size="lg" mb={4}>{category.name}</Heading>
          <SimpleGrid columns={3} spacing={4}>
            {category.items.map((item) => (
              <Box key={item.name} p={4} borderWidth="1px" borderRadius="md">
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

export default Menu;