import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const OrderStatus = () => {
  const kitchenOrders = [
    { id: 1, table: 6, items: ["Fried Chicken", "Mushroom Pizza"], time: "08:49", color: "red" },
    { id: 2, table: 2, items: ["Egg Faritta", "Farm Ville Pizza"], time: "05:12", color: "orange" },
    { id: 3, table: 7, items: ["Veg Cheese Pizza", "Fried Chicken", "Mushroom Pizza", "Egg Faritta"], time: "01:33", color: "green" },
  ];

  const barOrders = [
    { id: 1, table: 1, items: ["Cheese Lasagne", "Veg Cheese Pizza", "Ice Cream"], time: "00:30", color: "green" },
    { id: 2, table: 2, items: ["Cheese Lasagne", "Veg Cheese Pizza", "Ice Cream"], time: "01:12", color: "green" },
  ];

  const tableOrders = [
    { id: 1, table: 1, status: "Ordered 5 items", time: "1:33", color: "green" },
    { id: 2, table: 2, status: "Ordered 4 items", time: "4:35", color: "orange" },
    { id: 3, table: 3, status: "No Order", time: "", color: "black" },
    { id: 4, table: 4, status: "Ordered 2 items", time: "4:35", color: "green" },
    { id: 5, table: 5, status: "Ordered 5 items", time: "1:33", color: "green" },
    { id: 6, table: 6, status: "No Order", time: "", color: "black" },
    { id: 7, table: 7, status: "No Order", time: "", color: "black" },
    { id: 8, table: 8, status: "No Order", time: "", color: "black" },
    { id: 9, table: 9, status: "No Order", time: "", color: "black" },
    { id: 10, table: 10, status: "No Order", time: "", color: "black" },
    { id: 11, table: 11, status: "Ordered 3 items", time: "1:32", color: "green" },
    { id: 12, table: 12, status: "Ordered 4 items", time: "5:35", color: "orange" },
    { id: 13, table: 13, status: "Ordered 2 items", time: "1:33", color: "green" },
    { id: 14, table: 14, status: "Ordered 4 items", time: "8:35", color: "red" },
    { id: 15, table: 15, status: "Ordered 5 items", time: "1:33", color: "green" },
    { id: 16, table: 16, status: "No Order", time: "", color: "black" },
    { id: 17, table: 17, status: "No Order", time: "", color: "black" },
    { id: 18, table: 18, status: "No Order", time: "", color: "black" },
    { id: 19, table: 19, status: "No Order", time: "", color: "black" },
    { id: 20, table: 20, status: "No Order", time: "", color: "black" },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Order Status</Heading>
      <VStack spacing={8}>
        <Box p={4} m={4} w="100%" shadow="xl">
          <Heading as="h2" size="lg" mb={4}>Kitchen</Heading>
          <SimpleGrid columns={3} spacing={4}>
            {kitchenOrders.map((order) => (
              <Box key={order.id} bg="white" p={4} borderRadius="md">
                <Heading as="h3" size="md">Table {order.table}</Heading>
                {order.items.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
                <Text>{order.time}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={4} m={4} w="100%" shadow="xl">
          <Heading as="h2" size="lg" mb={4}>Bar</Heading>
          <SimpleGrid columns={3} spacing={4}>
            {barOrders.map((order) => (
              <Box key={order.id} bg="white" p={4} borderRadius="md">
                <Heading as="h3" size="md">Table {order.table}</Heading>
                {order.items.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
                <Text>{order.time}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={4} m={4} w="100%" shadow="xl">
          <Heading as="h2" size="lg" mb={4}>Tables</Heading>
          <SimpleGrid columns={4} spacing={4}>
            {tableOrders.map((order) => (
              <Box key={order.id} bg="white" p={4} borderRadius="md">
                <Heading as="h3" size="md">Table {order.table}</Heading>
                <Text>{order.status}</Text>
                <Text>{order.time}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default OrderStatus;