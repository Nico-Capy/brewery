import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaRebel } from 'react-icons/fa';

const Footer = () => {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('https://www.youtube.com/watch?v=bWXazVhlyxQ', '_blank');
  };

  return (
    <Box as="footer" py="2" mb="0" fontFamily="American Typewriter" backgroundColor="transparent" boxShadow="inner">
      <Flex justify="center" alignItems="center" h="1rem" w="100%">
        <Link href="/" mr={2} onClick={handleLogoClick} target="_blank" rel="noopener noreferrer">
          <FaRebel color="black" style={{ textShadow: '0px 5px 6px rgba(0, 0, 0, 0.25)' }} />
        </Link>
        <Text color="black" style={{ textShadow: '0px 5px 6px rgba(0, 0, 0, 0.25)' }}>
          © {new Date().getFullYear()}, Nicola Corradini | Nico Brew Co.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
