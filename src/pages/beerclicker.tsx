import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';
import beerImage from '/beerclicker.svg';

function Clicker() {
  const [beerCount, setBeerCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isRoundOnTheHouseVisible, setRoundOnTheHouseVisible] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    const showButton = () => {
      const randomTime = Math.floor(Math.random() * (16 - 8 + 1) + 8);
      timeoutId = setTimeout(() => {
        setRoundOnTheHouseVisible(true);
        timeoutId = setTimeout(() => {
          setRoundOnTheHouseVisible(false);
        }, 3000);
      }, 1000 * randomTime);
    };
    intervalId = setInterval(showButton, 10000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
  
  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    const showButton = () => {
      const randomTime = Math.floor(Math.random() * (61 - 32 + 1) + 32); // generate random number between 32 and 61
      timeoutId = setTimeout(() => {
        const randomPoints = Math.floor(Math.random() * (42 - 4 + 1) + 4);
        setBeerCount((prevBeerCount) => prevBeerCount - randomPoints);
        const notification = document.createElement("div");
        notification.innerText = `You drank too much, I'm cutting you off! -${randomPoints} beers`;
        notification.style.position = "fixed";
        notification.style.top = "50%";
        notification.style.left = "50%";
        notification.style.transform = "translate(-50%, -50%)";
        notification.style.backgroundColor = "crimson";
        notification.style.color = "white";
        notification.style.fontFamily = "American Typewriter";
        notification.style.fontSize = "1rem";
        notification.style.padding = "0.5rem";
        notification.style.borderRadius = "0rem";
        document.body.appendChild(notification);
        timeoutId = setTimeout(() => {
          document.body.removeChild(notification);
        }, 2300);
      }, randomTime * 1000); // convert to milliseconds
    };
    intervalId = setInterval(showButton, 2000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
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
      <Box w="40vh" h="60vh" bg="transparent" display="flex" justifyContent="center" alignItems="center">
        <Button onClick={() => handleBeerClick(1)} backgroundColor='transparent' _hover={{ backgroundColor: "transparent" }} _active={{ backgroundColor: "transparent" }} _focus={{ outline: "none" }} border="none" m={6} p={0} >
          <Center h="100%">
          <Image src={beerImage} alt='May the Beer be with you' w="16vh" />
          </Center>
        </Button>
      </Box>
      {isRoundOnTheHouseVisible && (
        <Button onClick={handleRoundOnTheHouseClick} fontFamily="American Typewriter" fontSize="lg" border="none" bgColor="green.400" color="white" mt={6} width="32vh" borderRadius={0} position="absolute" left={`${Math.floor(Math.random() * 70) + 15}%`} top={`${Math.floor(Math.random() * 70) + 15}%`}>
          Round on the house
        </Button>        
      )}
      <Text fontFamily="American Typewriter" fontSize="xl" mt={6}>
        Beers drank: {beerCount}
      </Text>
      <Text fontFamily="American Typewriter" fontSize="xl" mt={6}>
        High Score: {highScore}
      </Text>
      <Button onClick={handleResetClick} backgroundColor='transparent' _hover={{ backgroundColor: "transparent" }} _active={{ backgroundColor: "red.600" }} _focus={{ outline: "none" }} border="none" m={6} p={0} >
        Reset
      </Button>
    </Flex>
  );
}

export default Clicker;
