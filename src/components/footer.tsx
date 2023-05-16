import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaRebel } from 'react-icons/fa';

const Footer = () => {

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.youtube.com/watch?v=bWXazVhlyxQ', '_blank');
  }

  return (
    <Box as="footer" py='2' mb="0" fontFamily="American Typewriter" backgroundColor="blue.300" boxShadow='inner'>
      <Flex justify="center" alignItems="center" h="1rem" w="100%">
        <Link href="/" mr={2} onClick={handleLogoClick} target="_blank" rel="noopener noreferrer">
          <FaRebel color="white" />
        </Link>
        <Text color="white">© {new Date().getFullYear()}, Nicola Corradini | Nico Brew Co.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
