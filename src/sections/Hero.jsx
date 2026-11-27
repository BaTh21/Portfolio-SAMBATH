import React from 'react';
import { Box, Typography, Button, Container, Grid, Avatar, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePic from '../assets/Bath.png';

const Hero = () => {
  const theme = useTheme();
  const btnTextColor = theme.palette.mode === 'light' ? 'white' : '#121212';

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: 'auto', md: '85vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        pt: { xs: 6, md: 0 },
        pb: { xs: 6, md: 0 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* IMAGE SECTION - ORDER 1 ON MOBILE, ORDER 2 ON DESKTOP */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              order: { xs: 1, md: 2 }, // Moves image to top on mobile
              mb: { xs: 4, md: 0 },    // Adds spacing below image on mobile
            }}
          >
            <Avatar
              src={profilePic}
              alt="Mok Kolsambath"
              sx={{
                width: { xs: 180, sm: 260, md: 350 }, // Slightly larger on mobile so it's clear
                height: { xs: 180, sm: 260, md: 350 },
                border: { xs: '5px solid', sm: '8px solid' },
                borderColor: 'background.paper',
                boxShadow: 6,
                zIndex: 1,
                flexShrink: 0,
              }}
            />
          </Grid>

          {/* TEXT SECTION - ORDER 2 ON MOBILE, ORDER 1 ON DESKTOP */}
          <Grid 
            item 
            xs={12} 
            md={7} 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              order: { xs: 2, md: 1 }, // Moves text below image on mobile
            }}
          >
            <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
              Hello, I am
            </Typography>

            <Typography
              variant="h2"
              color="primary"
              fontWeight="800"
              gutterBottom
              sx={{ mb: 1, fontSize: { xs: '2rem', sm: '2.75rem', md: '3.75rem' } }}
            >
              Mok Kolsambath
            </Typography>

            <Typography
              variant="h4"
              color="text.primary"
              fontWeight="500"
              gutterBottom
              sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.8rem' } }}
            >
              Full-Stack Web Developer
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.6,
              }}
            >
              A recent Computer Science graduate with a strong passion for software development. I specialize in building scalable web applications using React.js, Python, and FastAPI.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1.5, sm: 2 },
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#experience"
                sx={{
                  px: { xs: 2.5, sm: 4 },
                  py: { xs: 1.2, sm: 1.5 },
                  borderRadius: 2,
                  fontWeight: 'bold',
                  color: btnTextColor,
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                View Experience
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  px: { xs: 2.5, sm: 4 },
                  py: { xs: 1.2, sm: 1.5 },
                  borderRadius: 2,
                  fontWeight: 'bold',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Contact Me
              </Button>

              <IconButton
                href="https://github.com/BaTh21"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'primary.main',
                  color: btnTextColor,
                  '&:hover': { backgroundColor: 'secondary.main' },
                  p: 1.5,
                  mt: { xs: 1, sm: 0 },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;