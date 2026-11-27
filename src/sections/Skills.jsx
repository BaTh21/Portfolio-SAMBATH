import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import DevicesIcon from '@mui/icons-material/Devices';

const skillsData = [
  { title: 'Frontend', icon: <DevicesIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'HTML, CSS, JavaScript, React.js, MUI, Bootstrap' },
  { title: 'Backend', icon: <CodeIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'PHP, Laravel, Python, FastAPI' },
  { title: 'Databases', icon: <StorageIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'PostgreSQL, MySQL, SQL (CRUD)' },
  { title: 'Tools', icon: <SettingsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />, items: 'GitHub, Gitea, Microsoft Office' },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="primary">
          Technical Skills
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                boxShadow: 3, 
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
              }}>
                <CardContent sx={{ p: 4 }}>
                  {skill.icon}
                  <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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