import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeNavItem, setActiveNavItem] = useState<string>("home");

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "discover", label: "Discover", to: "/discover" },
    { id: "about", label: "About", to: "/about" },
    { id: "projects", label: "Projects", to: "/projects" },
    { id: "community", label: "Community and ideas", to: "/community" },
    { id: "contact", label: "Contact", to: "/contact" },
  ];

  const navigate = useNavigate();

  const handleNavItemOnClick = (id: string) => {
    setActiveNavItem(id);
  };

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = activeNavItem === item.id;
    return (
      <NavLink
        to={item.to}
        onClick={() => handleNavItemOnClick(item.id)}
        color={isActive ? "blue.500" : "inherit"}
        bg={isActive ? "blue.50" : "transparent"}
        px={3}
        py={2}
        borderRadius="md"
        _hover={{ bg: "gray.100" }}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="gray.100"
        px={4}
        py={2}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Flex align="center">
          <Box display={isLargerThanMd ? "block" : "none"}>
            <Box
              as="a"
              href="/"
              fontFamily="Capy"
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              ml="1rem"
            >
              Brewbellion
            </Box>
          </Box>
        </Flex>

        {isLargerThanMd ? (
          <Box>
            <Stack direction="row" spacing={4}>
              {navItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </Stack>
          </Box>
        ) : (
          <IconButton
            aria-label="Open sidebar"
            size="md"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            mr={2}
          />
        )}
      </Flex>

      <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {navItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;