import { useState } from "react";
import { Box, Flex, IconButton, useDisclosure, useMediaQuery, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, } from "@chakra-ui/react";
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
    { id: "contact", label: "Contact", to: "/contact" },
    // { id: "projects", label: "Projects", to: "/projects" },
    // { id: "community", label: "Community and ideas", to: "/community" },
  ];

  const navigate = useNavigate();

  const handleNavItemOnClick = (id: string) => {
    setActiveNavItem(id);
  };

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = activeNavItem === item.id;
    return (
      <Box
        bg={"transparent"}
        px={3}
        py={2}
        borderRadius="none"
        fontFamily="American Typewriter"
        _hover={{ bg: "red.600", color: "white" }}
      >
        <NavLink
          to={item.to}
          onClick={() => handleNavItemOnClick(item.id)}
          color={isActive ? "red.600" : "inherit"}
        >
          {item.label}
        </NavLink>
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
        backgroundColor="transparent"
        fontFamily="American Typewriter"
        px={4}
        pt={2}
        pb="2"
      >
        <Flex align="center">
          <Box display={isLargerThanMd ? "block" : "none"}>
            <Box
              as="a"
              href="/"
              fontSize="2xl"
              color="gray.800"
              ml="1rem"
            >
              Nico Brew Co.
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
            bg="transparent"
            mr={2}
          />
        )}
      </Flex>

      <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily="American Typewriter">Menu</DrawerHeader>
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
