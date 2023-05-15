import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaRebel } from 'react-icons/fa';

const Footer = () => {

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.youtube.com/watch?v=bWXazVhlyxQ', '_blank');
  }

  return (
    <Box as="footer" py='8' mb="0" fontFamily="American Typewriter" backgroundColor='transparent'>
      <Flex justify="center" alignItems="center" h="1rem" w="100%">
        <Link href="/" mr={6} onClick={handleLogoClick} target="_blank" rel="noopener noreferrer">
          <FaRebel color="green" />
        </Link>
        <Text>© {new Date().getFullYear()}, Nicola Corradini | Nico Brew Co.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
