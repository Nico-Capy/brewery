import { Center, Flex, Box, Text, CloseButton, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import DiscoverButton from "../components/discoverbutton";

function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsActive(false);

  return (
    <Flex direction="column" minHeight="83vh" alignItems="center" justifyContent="center">
      <Center fontSize="3xl" bg="transparent" w="100%" p={2} fontFamily="American Typewriter">
        <h2>Welcome to</h2>
      </Center>

      <Image src="/NicoBrewCo.svg" alt="Brewbellion Logo" maxH="32vh" pt="3rem" pb="0rem" />

      <Center fontSize="8xl" bg="transparent" w="100%" p='2' pb="0" fontFamily="Capy" color='blue.500' textShadow="0px 5px 6px rgba(0, 0, 0, 0.25)">
        <h1>
          Nico Brew Co.
        </h1>
      </Center>

      <Center fontSize="4xl" bg="transparent" w="100%" p="2" pt='0' fontFamily="Capy" color='blue.500' textShadow="0px 5px 6px rgba(0, 0, 0, 0.25)">
        <p>
          Where your beers come true
        </p>
      </Center>

      <DiscoverButton />

      {isActive && (
        <Box
          position="fixed"
          bottom="0"
          fontSize="xl"
          left="50%"
          transform="translateX(-50%)"
          maxW="90%"
          p={4}
          bg="red.600"
          borderRadius="md"
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
          <Text fontFamily="Capy" color="white">
            We don't give you cookies, but we serve peanuts with our beers.
          </Text>
          <CloseButton color="white" onClick={handleClose} />
        </Box>
      )}
    </Flex>
  );
}

export default Home;
