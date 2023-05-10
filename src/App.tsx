import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AboutPage from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Footer from './components/footer';
import { Box } from '@chakra-ui/react';
import Discover from './pages/discover';
import Clicker from './pages/beerclicker';

function App() {
  return (
    <Router>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Discover" element={<Discover />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Clicker" element={<Clicker />} />
            {/*<Route path="/Projects" element={<Projects />} />
            <Route path="/CommIdea" element={<CommIdea />} />*/}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
