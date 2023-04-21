import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function DiscoverButton() {
  return (
    <Box>
      <Link to="/Discover">
        <Button
          bg="blue.500"
          color="white"
          fontFamily="Capy"
          fontSize="3xl"
          boxShadow="0 0 16px rgba(0, 0, 0, 0.2)"
          animation="pulse 2.3s ease-in-out infinite"
          transformOrigin="center"
          _hover={{ 
            bg: "red.600", 
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" 
          }}
          sx={{
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1)',
              },
              '50%': {
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1.1)',
              },
              '100%': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1)',
              },
            },
          }}
          rightIcon={<ArrowForwardIcon />}
        >
          Discover the beers
        </Button>
      </Link>
    </Box>
  );
}

export default DiscoverButton;