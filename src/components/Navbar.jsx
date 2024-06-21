import { useState } from "react";
import { Box, Flex, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Avatar, Menu, MenuButton, MenuList, MenuItem, Badge, Image, Heading, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const bg = useColorModeValue("purple.500", "gray.800");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bg} p={4} position="sticky" top={0} zIndex={1000}>
      <Flex justify="space-between" align="center">
        <IconButton
          icon={<FaBars />}
          aria-label="Open Menu"
          color={color}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          onClick={onOpen}
        />
        <Heading as="h1" size="lg" color={color} ml={4}>
          CrazyTime Order Management
        </Heading>
        <Image src="/path/to/logo.png" alt="CrazyTime RestoBar" boxSize="50px" />
        <Flex align="center">
          <IconButton
            icon={<FaBell />}
            aria-label="Notifications"
            color={color}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            mr={4}
          />
          <Menu>
            <MenuButton as={IconButton} icon={<Avatar icon={<FaUser />} />} bg="transparent" _hover={{ bg: "transparent" }} />
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
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
                <Link as={NavLink} to="/feedback" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Feedback
                </Link>
                <Link as={NavLink} to="/payment" color="black" _hover={{ textDecoration: "none" }} onClick={onClose}>
                  Payment
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