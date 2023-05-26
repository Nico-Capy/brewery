import { Center, Flex, Box, Text, CloseButton, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import backgroundBeer from "/alignedbeers.jpg";

import DiscoverButton from "../components/discoverbutton";

function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsActive(false);

  return (
    <Flex
      direction="column"
      h="90vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="transparent"
      style={{ backgroundImage: `url(${backgroundBeer})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Center fontSize="xl" bg="transparent" color="white" w="100%" p={2} fontFamily="American Typewriter">
        <h2>Welcome to</h2>
      </Center>

      <Image src="/NicoBrewCoWhite.svg" alt="Brewbellion Logo" maxH="32vh" py="1rem" />

      <Center fontSize="6xl" bg="transparent" w="100%" p="3" pb="0" fontFamily="American Typewriter" color="white" textShadow="0px 5px 6px rgba(0, 0, 0, 0.25)">
        <h1>Nico Brew Co.</h1>
      </Center>

      <Center fontSize="4xl" bg="transparent" w="100%" p="2" pt="0" fontFamily="American Typewriter" color="white" textShadow="0px 5px 6px rgba(0, 0, 0, 0.25)">
        <p>Where your beers come true</p>
      </Center>

      <DiscoverButton />

      {isActive && (
        <Box
          position="fixed"
          top="0"
          fontSize="lg"
          left="50%"
          transform="translateX(-50%)"
          maxW="90%"
          p={4}
          bg="blue.300"
          borderRadius="none"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          opacity={0}
          animation="fadeIn 1.6s ease-in forwards"
          sx={{
            "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Text fontFamily="American Typewriter" color="white">
            We don't give you cookies, but we serve peanuts with our beers.
          </Text>
          <CloseButton color="white" onClick={handleClose} />
        </Box>
      )}
    </Flex>
  );
}

export default Home;
