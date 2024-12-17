import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SafetyTips from './pages/SafetyTips';

// Function to set initial dark mode
const initializeDarkMode = () => {
  // Check if dark mode preference is stored
  const storedDarkMode = localStorage.getItem('darkMode');
  
  if (storedDarkMode === null) {
    // If no preference is stored, set dark mode as default
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else if (storedDarkMode === 'true') {
    // If dark mode was previously enabled
    document.documentElement.classList.add('dark');
  }
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    initializeDarkMode();
  }, []);

  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
