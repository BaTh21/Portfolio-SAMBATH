import React, { useState, useEffect } from 'react';
import { Box, useTheme, Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AppThemeProvider } from './context/ThemeContext';
import { ParticlesProvider } from '@tsparticles/react'; 
import { loadSlim } from '@tsparticles/slim';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Education from './sections/Education';
import SoftSkills from './sections/SoftSkills';
import Contact from './sections/Contact';
import './index.css';

const engineInit = async (engine) => {
  await loadSlim(engine);
};

const AppContent = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  // --- SCROLL TO TOP LOGIC ---
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 400px
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // ---------------------------

  return (
    <Box 
      className="animated-bg"
      sx={{ 
        minHeight: '100vh', 
        position: 'relative', 
        background: isLight 
          ? 'linear-gradient(-45deg, #E2E8F0, #F4F7F6, #EBF4FF, #E2E8F0)' 
          : 'linear-gradient(-45deg, #0F172A, #1E1B4B, #0F172A, #111827)', 
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ParticleBackground />
      <Navbar />
      
      <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
        <SoftSkills />
        <Contact />
      </Box>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <Zoom in={showButton}>
        <Fab 
          color="primary" 
          size="medium" 
          aria-label="scroll back to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: { xs: 20, sm: 30 },
            right: { xs: 20, sm: 30 },
            zIndex: 1000,
            color: isLight ? 'white' : '#121212',
            boxShadow: 4,
            '&:hover': {
              backgroundColor: 'secondary.main'
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

    </Box>
  );
};

function App() {
  return (
    <AppThemeProvider>
      <ParticlesProvider init={engineInit}>
        <AppContent />
      </ParticlesProvider>
    </AppThemeProvider>
  );
}

export default App;