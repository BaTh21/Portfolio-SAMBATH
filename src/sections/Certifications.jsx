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
    <Box id="certifications" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <WorkspacePremiumIcon color="primary" sx={{ fontSize: { xs: 40, md: 50 }, mb: 2 }} />
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}
          >
            Training & Certifications
          </Typography>
        </Box>

        <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: '800px', mx: 'auto' }}>
          {certificationsData.map((cert, index) => (
            <Card key={index} sx={{ boxShadow: 3, borderRadius: 3 }}>
              <CardContent
                sx={{
                  p: { xs: 2, md: 3 },
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 3 },
                  alignItems: { sm: 'center' },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: iconColor,
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: { xs: '100%', sm: '70px' },
                    minHeight: { xs: 60, sm: 'auto' },
                  }}
                >
                  <WorkspacePremiumIcon sx={{ fontSize: 35 }} />
                </Box>

                <Box sx={{ flexGrow: 1, width: '100%' }}>
                  <Typography variant="h5" fontWeight="bold" color="primary" sx={{ fontSize: { xs: '1.15rem', md: '1.5rem' } }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
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