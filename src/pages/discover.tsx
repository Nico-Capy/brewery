import { Box, Center, Flex, Text } from "@chakra-ui/react";
import capyImage from '/triangleformation.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Discover() {
  return (
    <Box backgroundColor="orange.200">
      <Center>
      <Text fontFamily="American Typewriter" fontSize="5xl" p='1rem' textColor='white'>
        <h1>Discover</h1>
      </Text>
      </Center>
      <Center>
      <Flex flexDirection='column'>
        <Flex flexDirection={{ base: "column", lg: "row", xl: "row" }} justifyContent="space-between" >
        <Box>
        <Box m='6' mt='0' boxShadow="2xl" backgroundColor='red.600' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='relative'>
            <Center>
              <Text fontFamily="American Typewriter" fontSize="3xl" color="white" textAlign="center" p='1rem'>
                <h1>Capy</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="American Typewriter" fontSize="xl" color="white">
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
                <Box m='0' mt='0' boxShadow="2xl" backgroundColor='transparent' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='absolute' top='0' left='0' opacity='0' display="flex" justifyContent="center" alignItems="center" _hover={{ opacity: "1", bg: "rgba(0,0,0,0.6)", transition: "opacity 1.6s" }}>
                  <Text fontFamily='American Typewriter' mx='auto' my="auto" p="4" textColor='white' fontSize="xl" textAlign="center">
                    This is the second beer recipe that I created and brewed myself. The recipe was a much bigger success than anticipated, so I kept brewing and perfecting it. Why is it called "Capy"? The first time I had people tried it, it was with friends from my scouts unit. We were at a post-camp barbecue, and I brought a few bottles. The scouts loved it and they started calling it "Capy", from my totem "Capybara". Since I hadn't named the beer yet, that stuck around.
                  </Text>
                </Box>
              </Flex>
            </Text>
          </Box>
          </Box>

          <Box>
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='blue.600' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='relative' >
            <Center>
              <Text fontFamily="American Typewriter" fontSize="3xl" color="white" textAlign="center" p='1rem'>
                <h1>Mjolnbeer</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            <Text p="1rem" fontFamily="American Typewriter" fontSize="xl" color="white">
              <p>Style: brown ale</p>
              <br />
              <p>Alcohol: 4,54%</p>
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
            <Box m='0' mt='0' boxShadow="2xl" backgroundColor='transparent' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='absolute' top='0' left='0' opacity='0' display="flex" justifyContent="center" alignItems="center" _hover={{ opacity: "1", bg: "rgba(0,0,0,0.6)", transition: "opacity 1.6s" }}>
              <Text fontFamily='American Typewriter' mx='auto' my="auto" p="4" textColor='white' fontSize="xl" textAlign="center">
                This one is made with a Norwegian kveik yeast. Word on the street is, the vikings used it to brew the beer they drank at funerals. Fermenting a beer at high temperatures (between 30 an 40°C instead of the usual room temperature), that made the beer ferment in three days instead of the average two weeks. The beer would be ready for the funeral ceremony.
              </Text>
            </Box>
          </Box>
          </Box>

          <Box>
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='orange.600' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='relative' >
            <Center>
              <Text fontFamily="American Typewriter" fontSize="3xl" color="white" textAlign="center" p='1rem'>
                <h1>Chili Pepper</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            <Text p="1rem" fontFamily="American Typewriter" fontSize="xl" color="white">
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
            <Box m='0' mt='0' boxShadow="2xl" backgroundColor='transparent' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='absolute' top='0' left='0' opacity='0' _hover={{ opacity: "1", bg: "rgba(0,0,0,0.6)", transition: "opacity 1.6s" }} display="flex" justifyContent="center" alignItems="center" >
              <Text fontFamily='American Typewriter' mx='auto' my="auto" p="4" textColor='white' fontSize="xl" textAlign="center">
                It's not as spicy as you may think. It's sweet, with notes of honey and bubblegum.
              </Text>
            </Box>
          </Box>
          </Box>
        </Flex>

        <Flex flexDirection={{ base: "column", lg: "row", xl: "row" }}>
        <Box>
        <Box m='6' mt='0' boxShadow="2xl" backgroundColor='yellow.400' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='relative' >
            <Center>
              <Text fontFamily="American Typewriter" fontSize="3xl" color="white" textAlign="center" p='1rem'>
                <h1>Sake</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            
            <Text p="1rem" fontFamily="American Typewriter" fontSize="xl" color="white">
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
                  <FontAwesomeIcon icon={faStar} color="white" />
                </Box>
                <Box m='0' mt='0' boxShadow="2xl" backgroundColor='transparent' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='absolute' top='0' left='0' opacity='0' display="flex" justifyContent="center" alignItems="center" _hover={{ opacity: "1", bg: "rgba(0,0,0,0.6)", transition: "opacity 1.6s" }} >
                  <Text fontFamily='American Typewriter' mx='auto' my="auto" p="4" textColor='white' fontSize="xl" textAlign="center">
                    I had fun with this one. After having brewed a couple of times, I got a little bored. While I was looking through the ingredients I needed to buy for my other beers, I found a sake yeast. One thing led to another, I was making my own sake that I fermented with my own beer. The result? A unique umami beer.
                  </Text>
                </Box>
              </Flex>
            </Text>
          </Box>
          </Box>

          <Box>
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='purple.400' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='relative' >
            <Center>
              <Text fontFamily="American Typewriter" fontSize="3xl" color="white" textAlign="center" p='1rem'>
                <h1>Coffee</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            <Text p="1rem" fontFamily="American Typewriter" fontSize="xl" color="white">
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
            <Box m='0' mt='0' boxShadow="2xl" backgroundColor='transparent' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='absolute' top='0' left='0' opacity='0' display="flex" justifyContent="center" alignItems="center" _hover={{ opacity: "1", bg: "rgba(0,0,0,0.6)", transition: "opacity 1.6s" }}>
              <Text fontFamily='American Typewriter' mx='auto' my="auto" p="4" textColor='white' fontSize="xl" textAlign="center">
                Coffee beer is the first beer I brewed 
              </Text>
            </Box>
          </Box>
          </Box>

          <Box>
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='green.600' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='relative' >
            <Center>
              <Text fontFamily="American Typewriter" fontSize="3xl" color="white" textAlign="center" p='1rem'>
                <h1>Lizard King</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Capy Beer" />
                </Box>
              </Text>
            </Center>
            <Text p="1rem" fontFamily="American Typewriter" fontSize="xl" color="white">
              <p>Style: California Common</p>
              <br />
              <p>Alcohol: 9,12%</p>
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
            <Box>
            <Box m='0' mt='0' boxShadow="2xl" backgroundColor='transparent' borderRadius="0rem" h={{ base: '76vh', lg: '76vh', xl: '76vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }} position='absolute' top='0' left='0' opacity='0' display="flex" justifyContent="center" alignItems="center" _hover={{ opacity: "1", bg: "rgba(0,0,0,0.6)", transition: "opacity 1.6s" }}>
              <Text fontFamily='American Typewriter' mx='auto' my="auto" p="4" textColor='white' fontSize="xl" textAlign="center">
                Having a pilsner in your selection of beers is always a good idea. Except it's a little annoying to make; it has to ferment at cooler temperatures than an ale, so you need a lot of equipment, and it can get quite expensive. California had a brilliant solution for that: the California Common style yeast. The warm weather made it hard for the Californian brewers to brew a lager at lower temperatures.
              </Text>
            </Box>
            </Box>
          </Box>
          </Box>
        </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default Discover;
