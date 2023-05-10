import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

function Clicker() {
  const [beerCount, setBeerCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleBeerClick = (points: number) => {
    setBeerCount(beerCount + points);
  };

  const handleResetClick = () => {
    setBeerCount(0);
  };

  useEffect(() => {
    const minDelay = 3000;
    const maxDelay = 15000;
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
    const timerId = setTimeout(() => {
      const drinkTypes = [
        { name: 'vodka', points: 10 },
        { name: 'wine', points: 15 },
        { name: 'rhum', points: 20 },
        { name: 'water', points: -5 },
      ];
      const drink = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];
      const x = Math.floor(Math.random() * 300) + 100;
      const y = Math.floor(Math.random() * 300) + 100;
      const image = document.createElement('img');
      image.setAttribute('src', '/mysterydrink.svg');
      image.setAttribute('alt', 'Mystery Drink');
      image.setAttribute('style', `position: absolute; top: ${y}px; left: ${x}px; cursor: pointer;`);
      image.addEventListener('click', () => handleBeerClick(drink.points));
      document.body.appendChild(image);
      setTimeout(() => {
        document.body.removeChild(image);
      }, 6000);
      const message = `You got a ${drink.name}!`;
      const notification = document.createElement('div');
      notification.setAttribute('style', 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 8px; background-color: white; border-radius: 0px; font-family: sans-serif; z-index: 1;');
      notification.innerText = message;
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 5000);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [beerCount]);


  useEffect(() => {
    const minDelay = 1642; // minimum delay
    const maxDelay = 160000; // maximum delay
    const showMessageDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay); // delay to show message in milliseconds
    const showMessageTimerId = setTimeout(() => {
      const points = Math.floor(Math.random() * 21) + 6; // points to subtract (between 6 and 26)
      setBeerCount((prevBeerCount) => Math.max(0, prevBeerCount - points)); // subtract points from beer count (but never go below 0)
      const message = `You drank too much, I'm cutting you off! (-${points} beers)`;
      alert(message); // show message to user
    }, showMessageDelay);
    return () => {
      clearTimeout(showMessageTimerId);
    };
  }, [beerCount]);

  useEffect(() => {
    const minDelay = 26000;
    const maxDelay = 42000;
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
    const timerId = setTimeout(() => {
      const points = Math.floor(Math.random() * 27) + 6;
      const x = Math.floor(Math.random() * 300) + 100;
      const y = Math.floor(Math.random() * 300) + 100;
      const image = document.createElement('img');
      image.setAttribute('src', '/roundonthehouse.svg');
      image.setAttribute('alt', 'Round on the House');
      image.setAttribute('style', `position: absolute; top: ${y}px; left: ${x}px; cursor: pointer;`);
      image.addEventListener('click', () => handleBeerClick(points));
      document.body.appendChild(image);
      setTimeout(() => {
        document.body.removeChild(image);
      }, 6000);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [beerCount]);

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
