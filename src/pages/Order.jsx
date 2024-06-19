import { useState } from "react";
import { Box, Heading, VStack, HStack, Button, Input, SimpleGrid, Image, Text } from "@chakra-ui/react";

const Order = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [order, setOrder] = useState([]);

  const categories = ["All", "Popular", "Starter", "Main Course", "Dessert", "Beverages"];
  const menuItems = [
    { name: "Cream Pancake", category: "Dessert", image: "/images/cream-pancake.jpg" },
    { name: "White Source Pasta", category: "Main Course", image: "/images/white-source-pasta.jpg" },
    { name: "Farm Ville Pizza", category: "Starter", image: "/images/farm-ville-pizza.jpg" },
    { name: "Shot of Whiskey", category: "Beverages", image: "/images/whiskey.jpg" },
  ];

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === "All" || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Place Your Order</Heading>
      <VStack spacing={4} align="start">
        <Input 
          placeholder="Search for items..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <HStack spacing={4}>
          {categories.map(category => (
            <Button 
              key={category} 
              onClick={() => setSelectedCategory(category)} 
              colorScheme={selectedCategory === category ? "teal" : "gray"}
            >
              {category}
            </Button>
          ))}
        </HStack>
        <SimpleGrid columns={3} spacing={4}>
          {filteredItems.map(item => (
            <Box 
              key={item.name} 
              p={4} 
              borderWidth="1px" 
              borderRadius="md" 
              onClick={() => addToOrder(item)}
              cursor="pointer"
              bg="white"
            >
              <Image src={item.image} alt={item.name} mb={4} />
              <Heading as="h3" size="md">{item.name}</Heading>
            </Box>
          ))}
        </SimpleGrid>
        <Box>
          <Heading as="h2" size="md">Order Summary</Heading>
          {order.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
        </Box>
        <Button colorScheme="teal">Place Order</Button>
      </VStack>
    </Box>
  );
};

export default Order;