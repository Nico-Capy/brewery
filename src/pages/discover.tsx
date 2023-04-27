import { Badge, Box, Center, Flex, Text } from "@chakra-ui/react";
import capyImage from '../assets/triangleformation.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Discover() {

  return (
    <Box>
      <Center>
      <Text fontFamily="Capy" fontSize="6xl" p='1rem' pb='0'>
        <h1>Discover</h1>
      </Text>
      </Center>
      <Center>
        <Flex flexDirection={{ base: "column", lg: "row", xl: "row" }}>
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='blue.500' borderRadius="1rem" h={{ base: '90vh', sm: '72vh', md: '72vh', lg: '80vh', xl: '80vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }}>
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
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='blue.500' borderRadius="1rem" h={{ base: '90vh', sm: '72vh', md: '72vh', lg: '80vh', xl: '80vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }}>
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
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='blue.500' borderRadius="1rem" h={{ base: '90vh', sm: '72vh', md: '72vh', lg: '80vh', xl: '80vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Sake</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Sake Beer" />
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
      <FontAwesomeIcon icon={faStar} color="white" />
    </Box>
  </Flex>
</Text>
          </Box>
        </Flex>
      </Center>
      <Center>
        <Flex flexDirection={{ base: "column", lg: "row", xl: "row" }}>
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='blue.500' borderRadius="1rem" h={{ base: '90vh', sm: '72vh', md: '72vh', lg: '80vh', xl: '80vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Mjolnbeer</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Mjolnbeer Beer" />
                </Box>
              </Text>
            </Center>
            <Text p="1rem" fontFamily="Capy" fontSize="2xl" color="white">
  <p>Style: brown ale</p>
  <br />
  <p>Alcohol: 6,96%</p>
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
          <Box m='6' mt='0' boxShadow="2xl" backgroundColor='blue.500' borderRadius="1rem" h={{ base: '90vh', sm: '72vh', md: '72vh', lg: '80vh', xl: '80vh' }} w={{ base: '90vw', sm: '90vw', md: '90vw', lg: '26vw', xl: '26vw' }}>
            <Center>
              <Text fontFamily="Capy" fontSize="4xl" color="white" textAlign="center" p='1rem'>
                <h1>Chili Pepper</h1>
                <Box p="1rem">
                  <img src={capyImage} alt="Chili Pepper Beer" />
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
        </Flex>
      </Center>
    </Box>
  );
}

export default Discover;