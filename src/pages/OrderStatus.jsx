import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const OrderStatus = () => {
  const tables = [
    { id: 1, status: "Ordered 5 items", time: "1:33", color: "green" },
    { id: 2, status: "Ordered 4 items", time: "4:35", color: "orange" },
    { id: 3, status: "No Order", time: "", color: "black" },
    // Add more tables as needed
  ];

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Order Status</Heading>
      <SimpleGrid columns={4} spacing={4}>
        {tables.map((table) => (
          <Box key={table.id} bg={table.color} p={4} borderRadius="md">
            <Heading as="h2" size="md">Table {table.id}</Heading>
            <Text>{table.status}</Text>
            <Text>{table.time}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OrderStatus;