import React from 'react';
import { Box, Typography, Container, Card, CardContent, Stack, Chip, useTheme, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import TranslateIcon from '@mui/icons-material/Translate';

const educationData = [
  {
    institution: 'Royal University of Phnom Penh',
    degree: 'Bachelor of Computer Science and Engineering',
    duration: '2022 – 2026',
    description: 'Focused on software engineering, database management, and full-stack web development.',
    skills: ['Computer Science', 'Software Engineering', 'Database Systems'],
    icon: <SchoolIcon sx={{ fontSize: 35 }} />
  },
  {
    institution: 'Cheasim Samaki High School',
    degree: 'Graduated with BAC II Diploma',
    duration: '2015 – 2021',
    description: 'Completed high school education with a focus on science and mathematics.',
    skills: ['High School Diploma', 'BAC II'],
    icon: <HistoryEduIcon sx={{ fontSize: 35 }} />
  },
  {
    institution: 'Americanbridge International School',
    degree: 'English Language Program (Level 3A–6B)',
    duration: '2015 – 2020',
    description: 'Developed strong English communication skills, foundational for professional interactions.',
    skills: ['English Proficiency', 'Communication'],
    icon: <TranslateIcon sx={{ fontSize: 35 }} />
  }
];

const Education = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  // Icon color: White in light mode, dark text in dark mode (to contrast with bright blue)
  const iconColor = isLight ? 'white' : '#121212';

  return (
    <Box id="education" sx={{ py: 10, backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SchoolIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
          <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
            Educational History
          </Typography>
          <Typography variant="h6" color="text.secondary">
            My academic journey and foundational learning.
          </Typography>
        </Box>

        <Stack spacing={4} sx={{ maxWidth: '850px', mx: 'auto' }}>
          {educationData.map((edu, index) => (
            <Card key={index} sx={{ boxShadow: 3, borderRadius: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, overflow: 'hidden' }}>
              
              {/* Left Icon Sidebar - Now all use the same Primary Color */}
              <Box sx={{ 
                backgroundColor: 'primary.main', 
                color: iconColor,
                p: 3, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                minWidth: { sm: '100px' }
              }}>
                {edu.icon}
              </Box>

              {/* Right Content Side */}
              <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                  <Box>
                    <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                      {edu.institution}
                    </Typography>
                    <Typography variant="h6" color="text.primary" fontWeight="500" gutterBottom>
                      {edu.degree}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="secondary" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
                    {edu.duration}
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                  {edu.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                  {edu.skills.map((skill, i) => (
                    <Chip key={i} label={skill} size="small" color="primary" variant="outlined" sx={{ fontWeight: 'bold' }} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;