import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function DiscoverButton() {
  return (
    <Box>
      <Link to="/Discover">
        <Button
          bg="red.800"
          m="6"
          color="white"
          fontFamily="American Typewriter"
          fontSize="lg"
          boxShadow="0 0 16px rgba(0, 0, 0, 0.2)"
          animation="pulse 4.2s ease-in-out infinite"
          transformOrigin="center"
          borderRadius="none"
          _hover={{ 
            bg: "red.600", 
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" ,
            color: "white"
          }}
          sx={{
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1)',
              },
              '50%': {
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                transform: 'scale(0.9)',
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