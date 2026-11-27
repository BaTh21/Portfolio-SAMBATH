import React from 'react';
import Particles from '@tsparticles/react';
import { useTheme } from '@mui/material';

const ParticleBackground = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const particlesOptions = {
    background: {
      color: { value: "transparent" }, // Keep transparent to show the App.jsx gradient
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: {
        // Colorful particles
        value: isLight 
          ? ["#1A365D", "#2B6CB0", "#9F7AEA"] 
          : ["#63B3ED", "#90CDF4", "#9F7AEA", "#F6E05E"],
      },
      links: {
        color: isLight ? "#2B6CB0" : "#63B3ED",
        distance: 150,
        enable: true,
        opacity: isLight ? 0.3 : 0.2, 
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: {
        value: isLight ? 0.6 : 0.5, 
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{
        position: 'fixed', // <--- CHANGED TO FIXED
        top: 0,
        left: 0,
        width: '100vw',    // <--- Full viewport width
        height: '100vh',   // <--- Full viewport height
        zIndex: 0, 
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;