import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ComputerIcon from '@mui/icons-material/Computer';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const combinedData = [
  {
    title: 'Communication',
    icon: <GroupsIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
    desc: 'Strong interpersonal and team collaboration skills.'
  },
  {
    title: 'Problem Solving',
    icon: <PsychologyIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
    desc: 'Creative and critical thinking approach to debugging and architecture.'
  },
  {
    title: 'Adaptability',
    icon: <AutoAwesomeIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
    desc: 'Fast learner, flexible, and open to adopting new technologies.'
  },
  {
    title: 'Tech Research',
    icon: <ComputerIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
    desc: 'Passionate about researching new web development trends.'
  },
  {
    title: 'AI & Innovation',
    icon: <SmartToyIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
    desc: 'Exploring AI tools to improve development efficiency.'
  },
  {
    title: 'Continuous Learning',
    icon: <LightbulbIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
    desc: 'Always looking for new ways to improve technical skills.'
  }
];

const SoftSkills = () => {
  return (
    <Box id="soft-skills" sx={{ py: 10, backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="primary" fontWeight="bold" gutterBottom>
          Soft Skills & Hobbies
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center' }}>
          {combinedData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                boxShadow: 3,
                borderRadius: 3,
                backgroundColor: 'background.paper',
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
              }}>
                <CardContent sx={{ p: 4 }}>
                  {item.icon}
                  <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.desc}
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

export default SoftSkills;