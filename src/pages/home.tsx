import { Center, Flex, Box, Text, CloseButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRebel } from "@fortawesome/free-brands-svg-icons";

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
      <Center fontSize="3xl" bg="transparent" w="100%" p={2}>
        <h2>Welcome to</h2>
      </Center>

      <a href="https://www.youtube.com/watch?v=bWXazVhlyxQ" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faRebel}
          style={{ color: "#3182ce", height: "16vh", paddingTop: "3rem", paddingBottom: "0rem" }}
        />
      </a>

      <Center fontSize="8xl" bg="transparent" w="100%" p={4} fontFamily="Capy" color='blue.500' textShadow="0px 5px 6px rgba(0, 0, 0, 0.25)">
        <h1>
          Brewbellion
        </h1>
      </Center>

      <DiscoverButton />

      {isActive && (
        <Box
          position="fixed"
          bottom="0"
          fontSize="xl"
          left="50%"
          transform="translateX(-50%)"
          maxW="60%"
          p={4}
          bg="blue.500"
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
            Come to the light side. We don't have cookies, but we have peanuts with our beers.
          </Text>
          <CloseButton color="white" onClick={handleClose} />
        </Box>
      )}
    </Flex>
  );
}

export default Home;
