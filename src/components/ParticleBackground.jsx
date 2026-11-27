import React from 'react';
import Particles from '@tsparticles/react';
import { useTheme, useMediaQuery } from '@mui/material';

const ParticleBackground = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const particlesOptions = {
    background: {
      color: { value: 'transparent' },
    },
    fpsLimit: isMobile ? 30 : 120,
    interactivity: {
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: {
        value: isLight
          ? ['#1A365D', '#2B6CB0', '#9F7AEA']
          : ['#63B3ED', '#90CDF4', '#9F7AEA', '#F6E05E'],
      },
      links: {
        color: isLight ? '#2B6CB0' : '#63B3ED',
        distance: isMobile ? 100 : 150,
        enable: !isMobile,
        opacity: isLight ? 0.3 : 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: isMobile ? 0.5 : 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: isMobile ? 25 : 80,
      },
      opacity: {
        value: isLight ? 0.6 : 0.5,
      },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: !isMobile,
  };

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;