import { useState } from "react";
import { Box, Flex, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <Box bg="purple.500" p={4}>
      <Flex justify="space-between" align="center">
        <IconButton
          icon={<FaBars />}
          aria-label="Open Menu"
          color="white"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          onClick={onOpen}
        />
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" align="start">
                <Link as={NavLink} to="/" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Home
                </Link>
                <Link as={NavLink} to="/menu" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Menu
                </Link>
                <Link as={NavLink} to="/order" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Order
                </Link>
                <Link as={NavLink} to="/feedback" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Feedback
                </Link>
                <Link as={NavLink} to="/payment" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Payment
                </Link>
                <Link as={NavLink} to="/order-status" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Order Status
                </Link>
                <Link as={NavLink} to="/pos" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  POS
                </Link>
                <Link as={NavLink} to="/settings" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Settings
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;