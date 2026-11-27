import React from 'react';
import { Box, Typography, Container, Button, Grid, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const theme = useTheme();

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph sx={{ mb: 6, fontSize: '1.1rem' }}>
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="text.primary">Email</Typography>
            <Typography variant="body2" color="text.secondary" component="a" href="mailto:mokkolsambath07@gmail.com" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}>
              mokkolsambath07@gmail.com
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <PhoneIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="text.primary">Phone</Typography>
            <Typography variant="body2" color="text.secondary" component="a" href="tel:+85515274578" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}>
              +855 15 27 45 78
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <LocationOnIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="text.primary">Location</Typography>
            <Typography variant="body2" color="text.secondary">
              Phnom Penh, Cambodia
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" size="large" href="mailto:mokkolsambath07@gmail.com" sx={{ px: 4, py: 1.5, borderRadius: 2, color: theme.palette.mode === 'light' ? 'white' : '#121212' }}>
            Send an Email
          </Button>
          
          <Button variant="outlined" color="primary" size="large" href="https://github.com/BaTh21" target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />} sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
            Visit My GitHub
          </Button>
          
          <Button 
            variant="outlined" 
            color="primary" 
            size="large" 
            href="https://gitea.skl-solutions.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            startIcon={<StorageIcon />}
            sx={{ px: 4, py: 1.5, borderRadius: 2 }}
          >
            Visit Gitea Server
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;