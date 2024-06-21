import { useState } from "react";
import { Box, Heading, VStack, HStack, Button, Input, SimpleGrid, Image, Text } from "@chakra-ui/react";

const OrderTaking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [order, setOrder] = useState([]);

  const categories = ["All", "Beer", "Whisky", "Vodka", "Gin", "Rum", "Tequila", "Brandy", "Liqueurs", "Signature Cocktails", "Coffee Stations", "Energy Drinks", "Soft Drinks and Mocktails", "Crazy Combos"];
  const menuItems = [
    { name: "Heineken", category: "Beer", image: "/images/beer.jpg", color: "yellow" },
    { name: "Amstel", category: "Beer", image: "/images/beer.jpg", color: "yellow" },
    { name: "Corona", category: "Beer", image: "/images/beer.jpg", color: "yellow" },
    { name: "Pint Beer", category: "Beer", image: "/images/beer.jpg", color: "yellow" },
    { name: "Dewars or Red Label Blend", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Jhonny Walker - Black Blend", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Jack Daniels", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Bulleit Bourbon", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Jameson Irish Whisky Single", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Jagermeister", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Henessy VS", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Henessy VSOP", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Chivas 12 blended", category: "Whisky", image: "/images/whisky.jpg", color: "brown" },
    { name: "Greygoose", category: "Vodka", image: "/images/vodka.jpg", color: "blue" },
    { name: "Belvedere", category: "Vodka", image: "/images/vodka.jpg", color: "blue" },
    { name: "Absolute", category: "Vodka", image: "/images/vodka.jpg", color: "blue" },
    { name: "Stolichnaya", category: "Vodka", image: "/images/vodka.jpg", color: "blue" },
    { name: "Hendricks", category: "Gin", image: "/images/gin.jpg", color: "green" },
    { name: "Bombay Sapphire", category: "Gin", image: "/images/gin.jpg", color: "green" },
    { name: "Bacardi Black", category: "Rum", image: "/images/rum.jpg", color: "darkred" },
    { name: "Takamaka Spice Rum", category: "Rum", image: "/images/rum.jpg", color: "darkred" },
    { name: "Bacardi White", category: "Rum", image: "/images/rum.jpg", color: "darkred" },
    { name: "Patron or Don Julio", category: "Tequila", image: "/images/tequila.jpg", color: "gold" },
    { name: "El Jimador Tequila", category: "Tequila", image: "/images/tequila.jpg", color: "gold" },
    { name: "Alfonso 1", category: "Brandy", image: "/images/brandy.jpg", color: "darkbrown" },
    { name: "Malibu", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Midori", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Sambuca", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Kahlua", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Grand Marnier", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Cointreau", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Bols Triple Sec", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Peach Schnapps", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Baileys", category: "Liqueurs", image: "/images/liqueurs.jpg", color: "purple" },
    { name: "Martini (Red Vermouth)", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Classic Martini", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Long Island Iced Tea", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Margarita", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Mai Tai", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Mojito", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Pina Colada", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Negroni", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Bloody Mary", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Whisky Sour", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Tequila Sunrise", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Bullfrog", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Old Fashioned", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Manhattan", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Sex on The Beach", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Aperol Spritz", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Screwdriver", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Classic", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Crazytime Classic", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Peach Me Up", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Crazy Dream", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Crazy Wengweng", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Don’t Call Me Crazy", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "I Just Got Crazy", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Call Me Crazy", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Crazy as Pinoy", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Let’s Get Crazy", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Crazy InLove", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Shembot", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Caipirinha", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Daiquiri", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Cuba Libre", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Paloma", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Gin Basil", category: "Signature Cocktails", image: "/images/cocktails.jpg", color: "pink" },
    { name: "Flat White", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Double Espresso", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Single Espresso", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Americano", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Mocha", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Spanish Latte", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Tea", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "English Breakfast Organic", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Green Tea Organic", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Cappuccino", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Earl Grey Organic", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Chamomile Organic", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "Latte", category: "Coffee Stations", image: "/images/coffee.jpg", color: "brown" },
    { name: "RedBull", category: "Energy Drinks", image: "/images/energy-drink.jpg", color: "red" },
    { name: "Sprite", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Coke Light", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Coke", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Tonic Water", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Soda", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Lemon", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Cranberry", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Apple", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Cocktail Pitcher", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Beer & Lumpiang Shanghai", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Pineapple", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Soda Water", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Ginger Ale", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Water", category: "Soft Drinks and Mocktails", image: "/images/soft-drinks.jpg", color: "lightgreen" },
    { name: "Crazy Combo 1: Beer & Crispy Pata", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
    { name: "Crazy Combo 2: Beer & Crispy Chicken Wings", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
    { name: "Crazy Combo 3: Beer & Sizzling Sisig", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
    { name: "Crazy Combo 4: Beer & Fried Calamari", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
    { name: "Crazy Combo 5: Beer & Vegetable Spring Roll", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
    { name: "Crazy Combo 6: Beer & French Fries", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
    { name: "Crazy Combo 7: Sangria Pitcher", category: "Crazy Combos", image: "/images/combo.jpg", color: "orange" },
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