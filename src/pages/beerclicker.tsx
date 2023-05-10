import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

function Clicker() {
  const [beerCount, setBeerCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [chosenDrink, setChosenDrink] = useState('');

  const handleBeerClick = (points: number) => {
    setBeerCount((prevBeerCount) => prevBeerCount + points);
  };

  const handleResetClick = () => {
    setBeerCount(0);
  };

  useEffect(() => {
    const mysteryDrinkInterval = setInterval(() => {
      setChosenDrink('/mysterydrink.svg');
    }, 6100);

    return () => clearInterval(mysteryDrinkInterval);
  }, []);

  useEffect(() => {
    const notificationTimeout = 2316;
    const notificationBgColor = '#3164bc';
    const notificationTextColor = 'white';
    const notificationFontFamily = 'American Typewriter';

    const handleDrinkClick = (drink: string, points: number) => {
      setChosenDrink('');
      if (drink === 'water') {
        setBeerCount((prevBeerCount) => Math.max(0, prevBeerCount - points));
      } else {
        setBeerCount((prevBeerCount) => prevBeerCount + points);
      }

      const message = `You drank ${drink}, ${drink === 'water' ? 'removed' : 'added'} ${points} beers!`;
      const notification = document.createElement('div');
      notification.style.position = 'fixed';
      notification.style.top = '50%';
      notification.style.left = '50%';
      notification.style.transform = 'translate(-50%, -50%)';
      notification.style.background = notificationBgColor;
      notification.style.color = notificationTextColor;
      notification.style.fontFamily = notificationFontFamily;
      notification.style.padding = '1rem 2rem';
      notification.style.borderRadius = '0rem';
      notification.innerText = message;
      document.body.appendChild(notification);

      setTimeout(() => {
        document.body.removeChild(notification);
      }, notificationTimeout);
    };

    const mysteryDrinkTimeout = setTimeout(() => {
      setChosenDrink('');
    }, 3200);

    if (chosenDrink !== '') {
      const drinks = ['vodka', 'wine', 'rum', 'water'];
      const points = chosenDrink === 'water' ? -10 : chosenDrink === 'vodka' ? 15 : chosenDrink === 'wine' ? 20 : 30;
      const randomDrinkIndex = Math.floor(Math.random() * drinks.length);
      const randomDrink = drinks[randomDrinkIndex];
      const image = document.createElement('img');
      image.setAttribute('src', chosenDrink);
      image.setAttribute('alt', 'Mystery Drink');
      image.setAttribute('style', `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); cursor: pointer;`);
      image.addEventListener('click', () => handleDrinkClick(randomDrink, points));
      document.body.appendChild(image);

      setTimeout(() => {
        document.body.removeChild(image);
      }, notificationTimeout);
    }

    return () => {
      clearTimeout(mysteryDrinkTimeout);
    };
  }, [chosenDrink]);

  useEffect(() => {
    const minDelay = 1600; // minimum delay
    const maxDelay = 2600; // maximum delay
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
    const minDelay = 2600;
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
function setMysteryDrinkType(arg0: string) {
    throw new Error('Function not implemented.');
}

function setMysteryDrinkPoints(points: number) {
    throw new Error('Function not implemented.');
}

function setMysteryDrinkVisible(arg0: boolean) {
    throw new Error('Function not implemented.');
}

function handleMysteryDrinkClick(this: HTMLImageElement, ev: MouseEvent) {
    throw new Error('Function not implemented.');
}
