import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#1A365D' : '#63B3ED',
          },
          secondary: {
            main: mode === 'light' ? '#2B6CB0' : '#90CDF4',
          },
          ...(mode === 'light'
            ? {
                background: { default: '#F4F7F6', paper: '#FFFFFF' },
                text: { primary: '#1A202C', secondary: '#4A5568' },
              }
            : {
                background: { default: '#121212', paper: '#1E1E1E' },
                text: { primary: '#F7FAFC', secondary: '#A0AEC0' },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
          h1: { fontWeight: 800 },
          h2: { fontWeight: 700 },
          h3: { fontWeight: 700, marginBottom: '2rem' },
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};