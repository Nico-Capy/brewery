import React from 'react';
import {
  Box,
  Center,
  Text,
  Flex,
  Image,
  useBreakpointValue,
  Position,
} from '@chakra-ui/react';

const About: React.FC = () => {
  const imageWidth = useBreakpointValue({
    base: "32%",
    sm: "16%",
    md: "16%",
    lg: "32%",
    xl: "32%",
  });
  const imagePosition = useBreakpointValue({
    base: "initial",
    sm: "initial",
    md: "initial",
    lg: "relative",
    xl: "relative",
  } as Record<string, Position | undefined>);
  const textMargin = useBreakpointValue({ base: "4", lg: "6" });

  return (
    <>
    <Center>
      <Box fontFamily='Capy' fontSize="6xl">About</Box>
    </Center>

    <Center>
        <Image
          borderRadius='full'
          src='../src/assets/nico.jpg'
          alt='Nico, the Master Brewer'
          width={imageWidth}
          height={imageWidth}
          position={imagePosition}
          m="3"
        />
    </Center>
    
        <Text fontSize="md" textAlign="justify" m="6" mb="0" mt="3">
          Hey, I'm Nico.
          <br />
          I like beer. I like it so much, I started making it myself. Why call my brewery "Not A Brewery"? Well, I'm still only doing this for fun.
          <br />
          <br />
          As long as I'm having fun, why not make a website for my brewery? So here we are! Feel free to roam around, take a look at the beers I make, leave a comment, look at the more creative projects I'm doing, … You can even send me ideas! You never know when I'll run out of weird stuff to do. The weird idea to beat: a bacon and maple syrup beer.
        </Text>
    </>
  );
};

export default About;
