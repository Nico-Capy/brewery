import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AboutPage from './pages/about';
import Home from './pages/home';
import Footer from './components/footer';
import { Box } from '@chakra-ui/react';
import Discover from './pages/discover';

function App() {
  return (
    <div className="App">
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Navbar />

          <Box flex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Discover" element={<Discover />} />
              {/*<Route path="/Projects" element={<Projects />} />
              <Route path="/CommIdea" element={<CommIdea />} />
              <Route path="/Contact" element={<Contact />} />*/}
            </Routes>
          </Box>

          <Footer />
        </Box>
      </Router>
    </div>
  );
}

export default App;