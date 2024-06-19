import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link as={NavLink} to="/menu" color="white" _hover={{ textDecoration: "none" }}>
          Menu
        </Link>
        <Link as={NavLink} to="/order" color="white" _hover={{ textDecoration: "none" }}>
          Order
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;