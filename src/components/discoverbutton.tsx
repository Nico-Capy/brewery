import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type ButtonProps = {
  btnText: string;
};

const DiscoverButton = ({ btnText }: ButtonProps) => {
  return (
    <ChakraButton
      borderRadius="1rem"
      height="8"
      margin="2"
      size="lg"
      colorScheme="blue"
    >
      {btnText}
      <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff", marginLeft: "8px"}} />
    </ChakraButton>
  );
};

export default DiscoverButton;
