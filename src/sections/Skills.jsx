import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import DevicesIcon from '@mui/icons-material/Devices';
import ComputerIcon from '@mui/icons-material/Computer';

const skillsData = [
  { title: 'Frontend', icon: <DevicesIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'HTML, CSS, JavaScript, React.js, MUI, Bootstrap' },
  { title: 'Backend', icon: <CodeIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'PHP, Laravel, Python, FastAPI' },
  { title: 'Databases', icon: <StorageIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'PostgreSQL, MySQL, SQL (CRUD)' },
  { title: 'Tools', icon: <SettingsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'GitHub, Gitea, Microsoft Office' },
  { title: 'IT Support', icon: <ComputerIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'Hardware & Software Troubleshooting, System Setup' },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
          sx={{ fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}
        >
          Technical Skills
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 2, justifyContent: 'center' }}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  {skill.icon}
                  <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                    {skill.items}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;