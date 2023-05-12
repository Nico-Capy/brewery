import { useState, useEffect } from 'react';
import { AbsoluteCenter, Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

function Clicker() {
  const [beerCount, setBeerCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isRoundOnTheHouseVisible, setRoundOnTheHouseVisible] = useState(false);
  const [beerImage, setBeerImage] = useState<any>(null);
  const [isMysteryDrink, setIsMysteryDrink] = useState(false);

  useEffect(() => {
    import('/beerclicker.svg').then(image => {
      setBeerImage(image.default);
    });
  }, []);

  useEffect(() => {
    let timeoutId: number | undefined;
    const showButton = () => {
      setIsMysteryDrink(true);
      timeoutId = setTimeout(() => {
        setIsMysteryDrink(false);
      }, Math.floor(Math.random() * (16000 - 6000 + 1) + 6000));
    };
    timeoutId = setTimeout(showButton, Math.floor(Math.random() * (16000 - 6000 + 1) + 6000));
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);  

  const handleMysteryDrinkClick = () => {
    setIsMysteryDrink(false);
    const drinks = [
      { name: "Water", points: -18 },
      { name: "Energy Drink", points: -51 },
      { name: "Coffee", points: -23 },
      { name: "Wine", points: 17 },
      { name: "Vodka", points: 26 },
      { name: "Rum", points: 49 },
      { name: "Gin", points: 21 },
    ];
    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    const drinkPoints = randomDrink.points;
    handleBeerClick(drinkPoints);
    const notification = document.createElement("div");
    notification.innerText = `You got ${randomDrink.name}, ${drinkPoints > 0 ? "adding" : "removing"} ${drinkPoints} beers`;
    notification.style.position = "fixed";
    notification.style.top = "26%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";
    notification.style.backgroundColor = "green";
    notification.style.color = "white";
    notification.style.fontFamily = "American Typewriter";
    notification.style.fontSize = "1rem";
    notification.style.padding = "0.5rem";
    notification.style.borderRadius = "0rem";
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 2300);
  };

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
      const randomTime = Math.floor(Math.random() * (90 - 32 + 1) + 32);
      timeoutId = setTimeout(() => {
        const randomPoints = Math.floor(Math.random() * (42 - 4 + 1) + 4);
        setBeerCount((prevBeerCount) => prevBeerCount - randomPoints);
        const notification = document.createElement("div");
        notification.innerText = `You drank too much, I'm cutting you off! -${randomPoints} beers`;
        notification.style.position = "fixed";
        notification.style.top = "26%";
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
      }, 1000 * randomTime);
    };
    intervalId = setInterval(showButton, 96000 + Math.floor(Math.random() * 32100));
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    const showButton = () => {
      const randomTime = Math.floor(Math.random() * (61 - 32 + 1) + 32);
      timeoutId = setTimeout(() => {
        const pointsToRemove = 212;
        setBeerCount((prevBeerCount) => prevBeerCount - pointsToRemove);
        const notification = document.createElement("div");
        notification.innerText = `Your parents walk in, you have to sober up! -${pointsToRemove} beers`;
        notification.style.position = "fixed";
        notification.style.top = "26%";
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
      }, Math.floor(Math.random() * (96 - 60 + 1) + 60) * 1000);
    };
    intervalId = setInterval(showButton, Math.floor(Math.random() * (96 - 60 + 1) + 60) * 1000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);  

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    const showButton = () => {
      const randomTime = Math.floor(Math.random() * (61 - 32 + 1) + 32);
      timeoutId = setTimeout(() => {
        const randomPoints = Math.floor(Math.random() * (60 - 4 + 1) + 4);
        setBeerCount((prevBeerCount) => prevBeerCount + randomPoints);
        const notification = document.createElement("div");
        notification.innerText = `This round is on the house! + ${randomPoints} beers`;
        notification.style.position = "fixed";
        notification.style.top = "26%";
        notification.style.left = "50%";
        notification.style.transform = "translate(-50%, -50%)";
        notification.style.backgroundColor = "green";
        notification.style.color = "white";
        notification.style.fontFamily = "American Typewriter";
        notification.style.fontSize = "1rem";
        notification.style.padding = "0.5rem";
        notification.style.borderRadius = "0rem";
        document.body.appendChild(notification);
        timeoutId = setTimeout(() => {
          document.body.removeChild(notification);
        }, 2300);
      }, 1000 * randomTime);
    };
    intervalId = setInterval(showButton, 16000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    const showButton = () => {
      const randomTime = Math.floor(Math.random() * (90 - 32 + 1) + 32);
      timeoutId = setTimeout(() => {
        const randomPoints = Math.floor(Math.random() * (42 - 4 + 1) + 4);
        setBeerCount((prevBeerCount) => prevBeerCount / 2); // Divide by 2
        const notification = document.createElement("div");
        notification.innerText = `You passed out! -${randomPoints} beers`;
        notification.style.position = "fixed";
        notification.style.top = "26%";
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
      }, 1000 * randomTime);
    };
    intervalId = setInterval(showButton, 180000);
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
            {beerImage && <Image src={beerImage} alt='May the Beer be with you' w="16vh" />}
          </Center>
        </Button>
      </Box>
      {isMysteryDrink && (
        <Button onClick={handleMysteryDrinkClick} fontFamily="American Typewriter" fontSize="lg" border="none" bgColor="yellow.400" color="white" mt={6} width="32vh" borderRadius={0} position={'absolute'} left="60%" top="60%">
          Mystery Drink
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
