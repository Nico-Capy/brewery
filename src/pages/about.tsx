import React, { useEffect, useState } from 'react';
import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import nicoImage from '/nico.jpg';
import nicoUn from '/nico1.jpeg';
import nicoDeux from '/nico2.jpg';

const AboutPage: React.FC = () => {
  const isImageOnLeft = useBreakpointValue({ base: false, lg: true });
  const [image, setImage] = useState(nicoImage);
  const [shadowX, setShadowX] = useState(0);
  const [shadowY, setShadowY] = useState(0);

  const handleClick = () => {
    if (image === nicoImage) {
      setImage(nicoUn);
    } else if (image === nicoUn) {
      setImage(nicoDeux);
    } else {
      setImage(nicoImage);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { left, top, width, height } = document.querySelector('img')!.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;
    const shadowX = (mouseX / width) * 10 - 5;
    const shadowY = (mouseY / height) * 10 - 5;
    setShadowX(shadowX);
    setShadowY(shadowY);
  };  

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as unknown as EventListener);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
    };
  }, []);  

  return (
    <Flex
      w="100%"
      h="fit"
      p="2"
      alignItems="center"
      justifyContent="center"
      backgroundColor="transparent"
    >
      <Flex
        flexDir={isImageOnLeft ? 'row' : 'column'}
        alignItems="center"
        justifyContent="center"
        mx="auto"
        my='16'
        maxW="76rem"
        h='100%'
      >
        <Image
          src={image}
          alt={
            image === nicoImage
              ? 'Nico, the Master Brewer, after a few beers'
              : image === nicoUn
              ? 'Nico, Master Brewer, thinking about beer'
              : 'Nico, Master Brewer, at an axe throwing bar'
          }
          boxSize={isImageOnLeft ? 'sm' : '2xs'}
          objectFit="cover"
          borderRadius="full"
          border="0px"
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          mr={isImageOnLeft ? '4' : '0'}
          mt={isImageOnLeft ? '6' : '0'}
          boxShadow={`${shadowX}px ${shadowY}px 1rem rgba(0, 0, 0, 0.2)`}
        />
        <Text
          textAlign="justify"
          fontSize="md"
          fontFamily="American Typewriter"
          m="10"
          mt={isImageOnLeft ? '6' : '10'}
          mb={isImageOnLeft ? '6' : '10'}
        >
          Hey, I'm Nico.
          <br />
          <br />
          I like beer. I like it so much, I started making it myself. Why call my brewery "Not A Brewery"? Well, I'm still only doing this for fun. As a friend once said, "Nico, I'd see you go to jail for selling alcohol during the prohibition". Spot on!
          <br />
          <br />
          As long as I'm having fun, why not make a website for my brewery? So here we are! Feel free to roam around, and take a look at the beers I make. You can even send me ideas! You never know when I'll run out of weird stuff to do. The weird idea to beat: a bacon and maple syrup beer.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutPage;