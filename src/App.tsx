import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/about';
import { Button } from '@chakra-ui/button';
import { Center } from '@chakra-ui/react';
import CapyFontFace from './CapyFont';
import Home from './pages/home';
//import Discover from './pages/discover';
//import Projects from './pages/projects';
//import CommIdea from './pages/commuidea';
//import About from './pages/about';
//import Contact from './pages/contact';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
   
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
          {/*<Route path="/Discover" element={<Discover />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/CommIdea" element={<CommIdea />} />
          <Route path="/Contact" element={<Contact />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
