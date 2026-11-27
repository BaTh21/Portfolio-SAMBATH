import React from 'react';
import { Box, useTheme } from '@mui/material';
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