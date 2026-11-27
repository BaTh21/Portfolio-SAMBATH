import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const isDark = theme.palette.mode === 'dark';

  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
        MOK KOLSAMBATH
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component="a" href={item.href}>
            <ListItemText 
              primary={item.label} 
              sx={{ textAlign: 'center', color: 'text.primary' }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" // <--- CHANGED FROM STICKY TO FIXED
      sx={{ 
        backgroundColor: 'background.paper', 
        boxShadow: 1,
        zIndex: theme.zIndex.drawer + 1 // Ensures it stays above all other content
      }}
    >
      <Toolbar sx={{ px: { xs: 1.5, sm: 3 } }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: 'primary.main',
            fontSize: { xs: '0.9rem', sm: '1.25rem' },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          MOK KOLSAMBATH
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button key={item.label} href={item.href} sx={{ color: 'text.primary', fontWeight: 'bold', ml: 2 }}>
              {item.label}
            </Button>
          ))}

          <IconButton sx={{ ml: 2 }} onClick={colorMode.toggleColorMode} color="inherit">
            {isDark
              ? <Brightness7Icon sx={{ color: 'white' }} />
              : <Brightness4Icon sx={{ color: 'primary.main' }} />}
          </IconButton>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
          <IconButton sx={{ mr: 0.5 }} onClick={colorMode.toggleColorMode} color="inherit" size="small">
            {isDark
              ? <Brightness7Icon sx={{ color: 'white' }} />
              : <Brightness4Icon sx={{ color: 'primary.main' }} />}
          </IconButton>
          
          <IconButton 
            edge="end" 
            onClick={handleDrawerToggle} 
            size="small"
            sx={{ 
              color: isDark ? 'white' : 'primary.main' 
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            color: 'text.primary'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;