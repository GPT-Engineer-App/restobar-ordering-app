import { Box, Flex, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { FaEnvelope, FaComments, FaPhone, FaSun, FaMoon } from "react-icons/fa";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="purple.500" p={4} mt="auto" position="sticky" bottom={0} zIndex={1000}>
      <Flex justify="space-around" align="center">
        <Link href="mailto:contact@crazytime.com" isExternal>
          <IconButton
            icon={<FaEnvelope />}
            aria-label="Email"
            color="white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Link>
        <Link href="https://chat.crazytime.com" isExternal>
          <IconButton
            icon={<FaComments />}
            aria-label="Chat"
            color="white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Link>
        <Link href="tel:+1234567890" isExternal>
          <IconButton
            icon={<FaPhone />}
            aria-label="Call"
            color="white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Link>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          aria-label="Toggle Theme"
          onClick={toggleColorMode}
          color="white"
          bg="transparent"
          _hover={{ bg: "transparent" }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;