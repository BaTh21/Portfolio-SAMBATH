import React from 'react';
import { Box, Typography, Container, Button, Grid, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const theme = useTheme();
  const btnTextColor = theme.palette.mode === 'light' ? 'white' : '#121212';

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'transparent', overflowX: 'hidden' }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
          sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          paragraph
          sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="text.primary">Email</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="a"
              href="mailto:mokkolsambath07@gmail.com"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                wordBreak: 'break-all', // FIX: Stops email from stretching layout
                '&:hover': { color: 'primary.main' },
              }}
            >
              mokkolsambath07@gmail.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <PhoneIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="text.primary">Phone</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="a"
              href="tel:+85515274578"
              sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}
            >
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

        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 5, md: 8 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="mailto:mokkolsambath07@gmail.com"
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 2,
              color: btnTextColor,
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: 320 },
            }}
          >
            Send an Email
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="https://github.com/BaTh21"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 2,
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: 320 },
            }}
          >
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
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 2,
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: 320 },
            }}
          >
            Visit Gitea Server
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;