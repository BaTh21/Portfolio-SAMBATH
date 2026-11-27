import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, Stack, useTheme } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const certificationsData = [
  {
    institution: 'ETEC Center',
    title: 'Frontend Web Development (Short Course)',
    duration: 'Aug 2023 – Jan 2024',
    description: 'Intensive training in modern frontend technologies and responsive web design.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    institution: 'Computer Academy STEP Cambodia',
    title: 'UX UI Intensive Course (Short Course)',
    duration: 'Sep 2024 – Dec 2024',
    description: 'Learned user experience principles, wireframing, and user interface design.',
    skills: ['UI/UX Design', 'Wireframing', 'Figma'],
  }
];

const Certifications = () => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? 'white' : '#121212';

  return (
    <Box id="certifications" sx={{ py: 10, backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <WorkspacePremiumIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
          <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
            Training & Certifications
          </Typography>
        </Box>

        <Stack spacing={4} sx={{ maxWidth: '800px', mx: 'auto' }}>
          {certificationsData.map((cert, index) => (
            <Card key={index} sx={{ boxShadow: 3, borderRadius: 3 }}>
              <CardContent sx={{ p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: { sm: 'center' } }}>
                
                <Box sx={{ 
                  backgroundColor: 'secondary.main', 
                  color: iconColor,
                  p: 2, 
                  borderRadius: 2,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  minWidth: '70px'
                }}>
                  <WorkspacePremiumIcon sx={{ fontSize: 35 }} />
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
                    {cert.institution}
                  </Typography>
                  <Typography variant="body2" color="secondary" fontWeight="bold" gutterBottom>
                    {cert.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, mt: 1 }}>
                    {cert.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {cert.skills.map((skill, i) => (
                      <Chip key={i} label={skill} size="small" color="primary" variant="outlined" sx={{ fontWeight: 'bold' }} />
                    ))}
                  </Stack>
                </Box>

              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Certifications;