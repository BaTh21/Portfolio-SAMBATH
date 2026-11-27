import React from 'react';
import { Box, Typography, Button, Container, Grid, Avatar, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePic from '../assets/Bath.png';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            id="hero"
            sx={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.default',
                pt: { xs: 8, md: 0 }
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">

                    <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h5" color="secondary.main" fontWeight="bold" gutterBottom>
                            Hello, I am
                        </Typography>

                        <Typography variant="h2" color="primary" fontWeight="800" gutterBottom sx={{ mb: 1 }}>
                            Mok Kolsambath
                        </Typography>

                        <Typography variant="h4" color="text.primary" fontWeight="500" gutterBottom sx={{ mb: 3, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
                            Full-Stack Web Developer
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '600px', mx: { xs: 'auto', md: 0 }, lineHeight: 1.6 }}>
                            A recent Computer Science graduate with a strong passion for software development. I specialize in building scalable web applications using React.js, Laravel, and FastAPI.
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Button variant="contained" color="primary" size="large" href="#projects" sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold', color: theme.palette.mode === 'light' ? 'white' : '#121212' }}>
                                View Projects
                            </Button>
                            <Button variant="outlined" color="primary" size="large" href="#contact" sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}>
                                Contact Me
                            </Button>

                            <IconButton
                                href="https://github.com/BaTh21"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: theme.palette.mode === 'light' ? 'white' : '#121212',
                                    '&:hover': { backgroundColor: 'secondary.main' },
                                    p: 1.5
                                }}
                            >
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            src={profilePic}
                            alt="Mok Kolsambath"
                            sx={{
                                width: { xs: 250, md: 350 },
                                height: { xs: 250, md: 350 },
                                border: `8px solid ${theme.palette.background.paper}`, // Adapts to dark/light mode
                                boxShadow: 6,
                                zIndex: 1
                            }}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;