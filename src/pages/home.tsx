import { Button, Center } from "@chakra-ui/react";
import CapyFontFace from "../CapyFont";
import { useState } from "react";
import Navbar from "../components/navbar";

function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      
      <Center fontSize='3xl' bg='transparent' w='100%' p={2}><h2>Welcome to</h2></Center>

      <CapyFontFace>
        <Center fontSize='6xl' bg='transparent' w='100%' p={4} fontFamily='Capy'><h1>Not A Brewery</h1></Center>
      </CapyFontFace>

      <br/>

      <Center>
        <Button>Discover</Button> {/* Render the Button component */}
      </Center>
    </div>
  )
}

export default Home;
