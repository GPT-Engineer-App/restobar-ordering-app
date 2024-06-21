import { useState } from "react";
import { Box, Heading, VStack, HStack, Button, Input, SimpleGrid, Image, Text } from "@chakra-ui/react";

const OrderTaking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [order, setOrder] = useState([]);

  const categories = ["All", "Popular", "Starter", "Main Course", "Dessert", "Beverages"];
  const menuItems = [
    { name: "Cream Pancake", category: "Dessert", image: "/images/cream-pancake.jpg", color: "red" },
    { name: "White Source Pasta", category: "Main Course", image: "/images/white-source-pasta.jpg", color: "orange" },
    { name: "Farm Ville Pizza", category: "Starter", image: "/images/farm-ville-pizza.jpg", color: "green" },
    { name: "Shot of Whiskey", category: "Beverages", image: "/images/whiskey.jpg", color: "blue" },
  ];

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === "All" || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <Box p={4} bg="white">
      <Heading as="h1" mb={4}>Order Taking</Heading>
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
              bg={item.color}
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

export default OrderTaking;