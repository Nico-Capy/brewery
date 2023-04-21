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
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeNavItem, setActiveNavItem] = useState<string>("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "discover", label: "Discover" },
    { id: "projects", label: "Projects" },
    { id: "community", label: "Community & Ideas" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  const handleNavItemOnClick = (id: string) => {
    setActiveNavItem(id);
  };

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = activeNavItem === item.id;
    return (
      <Box
        as="button"
        onClick={() => handleNavItemOnClick(item.id)}
        fontWeight={isActive ? "semibold" : "normal"}
        color={isActive ? "blue.500" : "inherit"}
        bg={isActive ? "blue.50" : "transparent"}
        px={3}
        py={2}
        borderRadius="md"
        _hover={{ bg: "gray.100" }}
      >
        {item.label}
      </Box>
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
      <Box as="a" href="/" fontFamily='Capy' fontSize="2xl" fontWeight="bold" color="gray.800" ml='1rem'>
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