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
    icon: <SchoolIcon sx={{ fontSize: { xs: 28, md: 35 } }} />,
  },
  {
    institution: 'Cheasim Samaki High School',
    degree: 'Graduated with BAC II Diploma',
    duration: '2015 – 2021',
    description: 'Completed high school education with a focus on science and mathematics.',
    skills: ['High School Diploma', 'BAC II'],
    icon: <HistoryEduIcon sx={{ fontSize: { xs: 28, md: 35 } }} />,
  },
  {
    institution: 'Americanbridge International School',
    degree: 'English Language Program (Level 3A–6B)',
    duration: '2015 – 2020',
    description: 'Developed strong English communication skills, foundational for professional interactions.',
    skills: ['English Proficiency', 'Communication'],
    icon: <TranslateIcon sx={{ fontSize: { xs: 28, md: 35 } }} />,
  },
];

const Education = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const iconColor = isLight ? 'white' : '#121212';

  return (
    <Box id="education" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'transparent', overflowX: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <SchoolIcon color="primary" sx={{ fontSize: { xs: 40, md: 50 }, mb: 2 }} />
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}
          >
            Educational History
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.25rem' } }}>
            My academic journey and foundational learning.
          </Typography>
        </Box>

        <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: '850px', mx: 'auto', width: '100%' }}>
          {educationData.map((edu, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: 3,
                borderRadius: { xs: 2, md: 3 },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                overflow: 'hidden', // Hides any accidental overflow
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
            >
              {/* Icon Banner */}
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: iconColor,
                  p: { xs: 1.5, sm: 3 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: { xs: '100%', sm: '100px' },
                  minHeight: { xs: 50, sm: 'auto' },
                }}
              >
                {edu.icon}
              </Box>

              {/* Content Area */}
              <CardContent 
                sx={{ 
                  p: { xs: 2, md: 4 }, 
                  flexGrow: 1, 
                  width: '100%', 
                  boxSizing: 'border-box',
                  minWidth: 0, // Crucial: Allows flex child to shrink below its minimum content width
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    justifyContent: 'space-between', 
                    alignItems: { xs: 'flex-start', sm: 'flex-start' }, 
                    flexWrap: 'wrap', 
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Box sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere', width: '100%' }}>
                    <Typography 
                      variant="h5" 
                      fontWeight="bold" 
                      color="primary" 
                      gutterBottom 
                      sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' }, wordBreak: 'break-word' }}
                    >
                      {edu.institution}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="text.primary" 
                      fontWeight="500" 
                      gutterBottom 
                      sx={{ fontSize: { xs: '0.95rem', md: '1.25rem' }, wordBreak: 'break-word' }}
                    >
                      {edu.degree}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="subtitle1" 
                    color="secondary" 
                    fontWeight="bold" 
                    sx={{ 
                      whiteSpace: 'nowrap', 
                      fontSize: { xs: '0.85rem', md: '1rem' },
                      mt: { xs: 1, sm: 0.5 }
                    }}
                  >
                    {edu.duration}
                  </Typography>
                </Box>

                <Divider sx={{ my: 2, width: '100%' }} />

                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph 
                  sx={{ 
                    lineHeight: 1.7, 
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                    maxWidth: '100%'
                  }}
                >
                  {edu.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, width: '100%' }}>
                  {edu.skills.map((skill, i) => (
                    <Chip 
                      key={i} 
                      label={skill} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                      sx={{ fontWeight: 'bold', maxWidth: '100%' }} 
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;