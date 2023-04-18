import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Box, Center } from '@chakra-ui/react'
import CapyFontFace from './CapyFont'
import Button from './components/button'
import Navbar from './components/navbar'

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Center fontSize='3xl' bg='transparent' w='100%' p={2}><h2>Welcome to</h2></Center>

      <CapyFontFace>
        <Center fontSize='6xl' bg='transparent' w='100%' p={4} fontFamily='Capy'><h1>Not A Brewery</h1></Center>
      </CapyFontFace>

      <Center fontSize='xl' bg='transparent' w='100%' p={2} fontFamily='Capy'><h2>Wtf, was this name really approved? Who did this? Was it you Kevin?</h2></Center>
      <br/>

      <Center>
        <Button btnText="Discover" /> {/* Render the Button component */}
      </Center>
    </div>
  )
}

export default App;
