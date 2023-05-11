import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

function Clicker() {
  const [beerCount, setBeerCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isRoundOnTheHouseVisible, setRoundOnTheHouseVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomTime = Math.floor(Math.random() * (16 - 8 + 1) + 8); // generate random time between 8 and 16 seconds
      setTimeout(() => {
        setRoundOnTheHouseVisible(true); // show the "Round on the house" button
      }, 1000 * randomTime);
    }, 10000); // check every 10 seconds

    return () => {
      clearInterval(intervalId); // clean up the interval when component unmounts
    };
  }, []);

  const handleBeerClick = (points: number) => {
    setBeerCount((prevBeerCount) => prevBeerCount + points);
  };

  const handleResetClick = () => {
    setBeerCount(0);
  };

  if (beerCount > highScore) {
    setHighScore(beerCount);
  }

  const handleRoundOnTheHouseClick = () => {
    const randomPoints = Math.floor(Math.random() * (42 - 6 + 1) + 6); // generate random points between 6 and 42
    handleBeerClick(randomPoints);
    setRoundOnTheHouseVisible(false); // hide the "Round on the house" button
  };

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
          onClick={() => handleBeerClick(1)}
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
        {isRoundOnTheHouseVisible && (
          <Button onClick={handleRoundOnTheHouseClick} fontFamily="American Typewriter" fontSize="lg" border="none" bgColor="green.400" color="white" mt={6} width="100%" borderRadius={0} >
          Round on the house
        </Button>
        )}
      </Box>
      <Text fontFamily="American Typewriter" fontSize="xl" mt={6}>
        Beers drank: {beerCount}
      </Text>
      <Button
        onClick={handleResetClick}
        backgroundColor='transparent'
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "red.600" }}
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
