import React from 'react';
import { AppThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <AppThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </AppThemeProvider>
  );
}

export default App;