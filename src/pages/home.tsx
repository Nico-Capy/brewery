import { Button, Center, Flex, Text, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CapyFontFace from "../CapyFont";
import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsActive(false);

  return (
    <Flex direction="column" minHeight="83vh" alignItems="center" justifyContent="center">
      <Center fontSize="3xl" bg="transparent" w="100%" p={2}>
        <h2>Welcome to</h2>
      </Center>

      <CapyFontFace>
        <Center
          fontSize="8xl"
          bg="transparent"
          w="100%"
          p={4}
          fontFamily="Capy"
        >
          <h1>Not A Brewery</h1>
        </Center>
      </CapyFontFace>

      <br />

      <Center>
        <Button rightIcon={<ArrowForwardIcon />} fontFamily="Capy" fontSize="3xl">
          <Text>Discover</Text>
        </Button>
      </Center>

      {isActive && (
        <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          p={4}
          bg="gray.100"
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
          <Text fontFamily="Capy" textAlign="center" lineHeight="1.5">
            This website doesn't give you cookies. We might give you a side of peanuts with your beer though
          </Text>
          <CloseIcon cursor="pointer" onClick={handleClose} />
        </Box>
      )}
    </Flex>
  );
}

export default Home;
