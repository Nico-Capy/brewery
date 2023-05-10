import React, { useState } from 'react';
import { Button, Center, Heading, Text } from '@chakra-ui/react';
import '../App.css';

function Clicker() {
  const [beers, setBeers] = useState<number>(0);
  const [beerValue, setBeerValue] = useState<number>(1);

  const handleClick = () => {
    setBeers(beers + beerValue);
  };

  const handleUpgrade = () => {
    if (beers >= 10) {
      setBeers(beers - 10);
      setBeerValue(beerValue + 1);
    }
  };

  return (
    <Center h="100vh">
      <div>
        <Heading as="h1" size="4xl" mb="4">
          Beer Clicker
        </Heading>
        <Button
          bg="yellow.600"
          _hover={{ bg: 'yellow.600' }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="none"
          mb="4"
          onClick={handleClick}
        >
          Click me to get beers!
        </Button>
        <Text fontSize="xl" mt="4">
          You have {beers} beers.
        </Text>
        <Button
          bg="blue.500"
          _hover={{ bg: 'blue.600' }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="md"
          mt="4"
          onClick={handleUpgrade}
          isDisabled={beers < 10}
        >
          Upgrade beer value (costs 10 beers)
        </Button>
        <Text fontSize="xl" mt="4">
          Each click earns {beerValue} beers.
        </Text>
      </div>
    </Center>
  );
}

export default Clicker;
