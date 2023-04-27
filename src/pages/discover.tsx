import { Badge, Box, Center, Flex, Text } from "@chakra-ui/react";
import capyImage from '../assets/triangleformation.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Discover() {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  };

  const [beerText, setBeerText] = useState({
    capy: "The 'Capy' was the second beer recipe that I created and brewed myself.",
    chillyPepper: "Chilly Pepper details",
    coffeeStout: 'This is a coffee beer',
    sakeBeer: "Experimental beer",
    mjolnBeer: 'Viking ale',
  });

  const boxStyle = {
    m: "6",
    mt: "0",
    boxShadow: "2xl",
    backgroundColor: "blue.500",
    borderRadius: "1rem",
    h: { base: "90vh", sm: "72vh", md: "72vh", lg: "80vh", xl: "80vh" },
    w: { base: "90vw", sm: "90vw", md: "90vw", lg: "26vw", xl: "26vw" },
    position: { base: "static", md: "relative" } as Partial<Record<string, Position>>,
    overflow: "hidden",
    transition: "opacity 0.6s ease",
    _hover: {
      "&::before": {
        content: `""`,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "2xl",
        fontWeight: "bold",
        zIndex: "1",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "0",
        opacity: "0",
        transition: "opacity 0.5s ease",
      },
      opacity: "1",
    },
    _hoverAfter: {
      "&::before": {
        content: `"${beerText.capy}"`,
        content: `"${beerText.chillyPepper}"`,
        content: `"${beerText.chillyPepper}"`,
        content: `"${beerText.chillyPepper}"`,
        content: `"${beerText.chillyPepper}"`,
      },
      "&::after": {
        opacity: "1",
      },
    },
  };

  return (
    <Box>
      <Center>
      <Text fontFamily="Capy" fontSize="6xl" p='1rem' pb='0'>
        <h1>Discover</h1>
      </Text>
      </Center>
      <Center>
        <Flex flexDirection={{ base: "column", lg: "row", xl: "row" }}>
        <Box {...boxStyle} sx={{ "&:hover": boxStyle._hoverAfter }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Capy</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="Capy" fontSize="2xl" color="white">
              <p>Style: blonde ale</p>
              <br />
              <p>Alcohol: 4,3%</p>
              <br />
              <p>Rating:</p>
              <Flex alignItems="center">
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box>
                  <FontAwesomeIcon icon={faStar} color="white" />
                </Box>
              </Flex>
            </Text>
          </Box>

          <Box {...boxStyle} sx={{ "&:hover": boxStyle._hoverAfter }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Chilly Pepper</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Chilly Pepper Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="Capy" fontSize="2xl" color="white">
              <p>Style: blonde ale</p>
              <br />
              <p>Alcohol: 11,8%</p>
              <br />
              <p>Rating:</p>
              <Flex alignItems="center">
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box>
                  <FontAwesomeIcon icon={faStar} color="white" />
                </Box>
              </Flex>
            </Text>
          </Box>

          <Box {...boxStyle} sx={{ "&:hover": boxStyle._hoverAfter }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Coffee</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Coffee Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="Capy" fontSize="2xl" color="white">
              <p>Style: stout</p>
              <br />
              <p>Alcohol: 7,9%</p>
              <br />
              <p>Rating:</p>
              <Flex alignItems="center">
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box>
                  <FontAwesomeIcon icon={faStar} color="white" />
                </Box>
              </Flex>
            </Text>
          </Box>
        </Flex>
      </Center>
      <Center>
        <Flex flexDirection={{ base: "column", lg: "row", xl: "row" }}>
        <Box {...boxStyle} sx={{ "&:hover": boxStyle._hoverAfter }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Sake</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Saké Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="Capy" fontSize="2xl" color="white">
              <p>Style: experimental</p>
              <br />
              <p>Alcohol: 12%</p>
              <br />
              <p>Rating:</p>
              <Flex alignItems="center">
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box>
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
              </Flex>
            </Text>
          </Box>

          <Box {...boxStyle} sx={{ "&:hover": boxStyle._hoverAfter }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Mjolnbeer</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Mjolnbeer Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="Capy" fontSize="2xl" color="white">
              <p>Style: Brown Kveik</p>
              <br />
              <p>Alcohol: 7%</p>
              <br />
              <p>Rating:</p>
              <Flex alignItems="center">
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box mr="2">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Box>
                <Box>
                  <FontAwesomeIcon icon={faStar} color="white" />
                </Box>
              </Flex>
            </Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}

export default Discover;