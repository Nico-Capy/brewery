import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';

const Footer = () => {
const handleBeerClick = () => {
window.location.href = "https://www.youtube.com/watch?v=KPlYOA8UMrs";
};

return (
<Box as="footer" py={8} mb="0">
<Flex justify="center" alignItems="center" h="1rem" w="100%">
<Link href="/" mr={6} onClick={handleBeerClick}>
<FaBeer color="green" />
</Link>
<Text>Not a brewery | © {new Date().getFullYear()}, Nicola Corradini</Text>
</Flex>
</Box>
);
};
export default Footer;