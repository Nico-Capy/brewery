import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" borderTop="1px solid" borderColor="blue.200" py={8} mb="0">
      <Flex justify="center">
        <Link href="/" mr={4}>
          <FaBeer />
        </Link>
        <Text>Nicola Corradini, Not a brewery &copy; {new Date().getFullYear()}, Nicola Corradini</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
