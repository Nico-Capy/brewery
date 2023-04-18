import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

type ButtonProps = {
  btnText: string
}

const Button = ({ btnText }: ButtonProps) => {
  return (
    <ChakraButton
      borderRadius="1rem"
      height="8"
      margin="2"
      size="lg"
      colorScheme="blue"
    >
      {btnText}
    </ChakraButton>
  )
}

export default Button;
