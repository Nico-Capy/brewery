import React, { useState } from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

function Clicker() {
  const [beerCount, setBeerCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleBeerClick = () => {
    setBeerCount(beerCount + 1);
  };

  const handleResetClick = () => {
    setBeerCount(0);
  };

  if (beerCount > highScore) {
    setHighScore(beerCount);
  }

  return (
    <Flex flexDirection='column' align="center" justify="center">
      <Text fontFamily="American Typewriter" fontSize="4xl" mb="4">
        Beer Clicker
      </Text>
      <Text fontFamily="American Typewriter" fontSize="2xl" mb="4">
        Click the beer to drink it
      </Text>
      <Box
        w="40vh"
        h="60vh"
        bg="transparent"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          onClick={handleBeerClick}
          backgroundColor='transparent'
          _hover={{ backgroundColor: "transparent" }}
          _active={{ backgroundColor: "transparent" }}
          _focus={{ outline: "none" }}
          border="none"
          m={6}
          p={0}
        >
          <Center h="100%">
            <Image src='/beerclicker.svg' alt='May the Beer be with you' w="14vh" />
          </Center>
        </Button>
      </Box>
      <Text fontFamily="American Typewriter" fontSize="xl" mt={6}>
        Beers drank: {beerCount}
      </Text>
      <Button
        onClick={handleResetClick}
        backgroundColor='transparent'
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
        _focus={{ outline: "none" }}
        border="none"
        m={6}
        p={0}
      >
        Reset
      </Button>
      <Text fontFamily="American Typewriter" fontSize="xl" mt={6}>
        High Score: {highScore}
      </Text>
    </Flex>
  );
}

export default Clicker;
