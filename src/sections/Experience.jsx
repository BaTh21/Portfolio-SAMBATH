import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, Stack, Button, Divider, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';

const experienceData = [
  {
    company: 'SKL Solutions (Khawin)',
    companyLink: 'https://skl-solutions.com',
    role: 'Full-Stack Developer',
    duration: 'October 2025 - Present',
    description: 'Engineered and deployed multiple full-stack applications, handling both frontend user interfaces and robust backend architectures.',
    projects: [
      {
        title: 'Neco360',
        subtitle: 'Social & Health Platform',
        desc: 'Engineered a comprehensive platform featuring a diary feed, short-form video reels, and real-time messaging. Implemented secure encrypted medical records and a Role-Based Access Control (RBAC) system.',
        tech: ['React.js', 'FastAPI', 'PostgreSQL', 'WebSockets'],
        link: 'https://neco.skl-solutions.com',
        giteaLink: null,
      },
      {
        title: 'ChatBot',
        subtitle: 'AI Conversational Assistant',
        desc: 'Built and integrated an AI-powered conversational chatbot. Utilized Python (FastAPI) to handle backend AI logic, API requests, and prompt engineering.',
        tech: ['Python', 'FastAPI', 'AI Integration', 'React.js'],
        link: 'https://chatbot.skl-solutions.com',
        giteaLink: null,
      },
      {
        title: 'Truematch360',
        subtitle: 'Job Application Project',
        desc: 'Developed a full-stack matching platform designed to connect users. Managed complex data relationships and optimized database queries. Built to demonstrate full-stack capabilities for a job application.',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'React.js', 'MUI', 'WebSockets'],
        link: null,
        giteaLink: null,
      },
    ],
  },
  {
    company: 'GoTrade',
    companyLink: null,
    role: 'Web Developer Intern',
    duration: 'Mar 2025 – Jun 2025',
    description: 'Built a responsive company website during my internship. Collaborated with the team to deliver a functional web presence.',
    projects: [
      {
        title: 'GoTrade Website',
        subtitle: 'Company Web Presence',
        desc: 'Developed the frontend and backend of the company website using PHP and Laravel, ensuring a seamless user experience.',
        tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
        link: null,
        giteaLink: null,
      },
    ],
  },
];

const Experience = () => {
  const theme = useTheme();
  const headerTextColor = theme.palette.mode === 'light' ? 'white' : '#121212';

  return (
    <Box id="experience" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'transparent', overflowX: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <WorkIcon color="primary" sx={{ fontSize: { xs: 40, md: 50 }, mb: 2 }} />
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '1.6rem', sm: '2.25rem', md: '3rem' } }}
          >
            Work Experience & Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.25rem' } }}>
            My professional journey and the impactful products I've built.
          </Typography>
        </Box>

        <Stack spacing={{ xs: 3, md: 6 }}>
          {experienceData.map((exp, index) => (
            <Card 
              key={index} 
              sx={{ 
                boxShadow: 4, 
                borderRadius: { xs: 2, md: 4 }, 
                overflow: 'hidden',
                width: '100%', 
                maxWidth: '100%' 
              }}
            >
              {/* Header Area */}
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: headerTextColor,
                  p: { xs: 2, sm: 3 },
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 2,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <Box sx={{ wordBreak: 'break-word', width: '100%', pr: { sm: 2 } }}>
                  <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1.25rem', md: '2rem' } }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, fontSize: { xs: '0.9rem', md: '1.25rem' } }}>
                    {exp.role} | {exp.duration}
                  </Typography>
                </Box>

                {exp.companyLink && (
                  <Button
                    variant="outlined"
                    startIcon={<BusinessIcon />}
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: headerTextColor,
                      borderColor: headerTextColor,
                      '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' },
                      flexShrink: 0,
                      width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto on desktop
                    }}
                  >
                    Visit Company
                  </Button>
                )}
              </Box>

              <CardContent sx={{ p: { xs: 2, md: 5 }, width: '100%', boxSizing: 'border-box' }}>
                <Typography variant="body1" color="text.primary" sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: '0.95rem', md: '1.1rem' }, wordBreak: 'break-word' }}>
                  {exp.description}
                </Typography>

                <Divider sx={{ mb: { xs: 3, md: 4 } }} />

                <Typography variant="h6" fontWeight="bold" color="secondary" gutterBottom sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Key Projects Delivered:
                </Typography>

                <Stack spacing={{ xs: 2.5, md: 4 }}>
                  {exp.projects.map((proj, pIndex) => (
                    <Box
                      key={pIndex}
                      sx={{
                        backgroundColor: 'background.paper',
                        p: { xs: 2, md: 3 },
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        width: '100%',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                      }}
                    >
                      {/* FIXED NESTED TYPOGRAPHY */}
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' }, display: 'inline' }}>
                          {proj.title}
                        </Typography>
                        <Typography component="span" variant="subtitle1" color="text.secondary" fontWeight="normal" sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, display: 'inline' }}>
                          {" "}- {proj.subtitle}
                        </Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ my: 2, lineHeight: 1.7, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                        {proj.desc}
                      </Typography>

                      <Box 
                        sx={{ 
                          display: 'flex', 
                          flexDirection: { xs: 'column', sm: 'row' }, 
                          justifyContent: 'space-between', 
                          alignItems: { xs: 'flex-start', sm: 'flex-end' }, 
                          flexWrap: 'wrap', 
                          gap: 2,
                          mt: 2
                        }}
                      >
                        {/* FIXED CHIP OVERFLOW */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, width: '100%' }}>
                          {proj.tech.map((tech, i) => (
                            <Chip 
                              key={i} 
                              label={tech} 
                              size="small" 
                              color="primary" 
                              variant="outlined" 
                              sx={{ fontWeight: 'bold', maxWidth: '100%' }} 
                            />
                          ))}
                        </Box>

                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ width: { xs: '100%', sm: 'auto' } }}>
                          {proj.link && (
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                              startIcon={<LanguageIcon />}
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ color: 'white', fontWeight: 'bold' }}
                            >
                              Live Demo
                            </Button>
                          )}

                          {proj.giteaLink && (
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              startIcon={<StorageIcon />}
                              href={proj.giteaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ fontWeight: 'bold', color: headerTextColor }}
                            >
                              View on Gitea
                            </Button>
                          )}

                          {!proj.link && !proj.giteaLink && (
                            <Button
                              variant="outlined"
                              color="inherit"
                              size="small"
                              startIcon={<LockIcon />}
                              disabled
                              sx={{ color: 'text.secondary', borderColor: 'divider' }}
                            >
                              Private Project
                            </Button>
                          )}
                        </Stack>
                      </Box>

                    </Box>
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

export default Experience;