import React, { useState, useEffect } from 'react';
import { Box, useTheme, Fab, Zoom, Tooltip } from '@mui/material';
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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        flexDirection: 'column',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <ParticleBackground />
      
      {/* FIXED NAVBAR */}
      <Navbar />
      
      {/* ADDED RESPONSIVE PADDING TOP SO CONTENT DOESN'T HIDE UNDER NAVBAR */}
      <Box 
        component="main" 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%',
          pt: { xs: '56px', sm: '64px' } // Default MUI AppBar heights
        }}
      >
        <Hero />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
        <SoftSkills />
        <Contact />
      </Box>

      {/* SCROLL TO TOP BUTTON */}
      <Zoom in={showButton}>
        <Tooltip title="Back to Top" placement="left" arrow>
          <Fab 
            color="primary" 
            size="medium" 
            aria-label="scroll back to top"
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: { xs: 20, sm: 30, md: 40 },
              right: { xs: 20, sm: 30, md: 40 },
              zIndex: 1000,
              color: isLight ? 'white' : '#121212',
              boxShadow: 4,
              width: { xs: 48, sm: 56, md: 64 },
              height: { xs: 48, sm: 56, md: 64 },
              '&:hover': {
                backgroundColor: 'secondary.main'
              }
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
          </Fab>
        </Tooltip>
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