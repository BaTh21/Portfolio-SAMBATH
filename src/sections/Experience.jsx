import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, Stack, Button, Divider, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';

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
        link: 'https://neco.skl-solutions.com'
      },
      {
        title: 'ChatBot',
        subtitle: 'AI Conversational Assistant',
        desc: 'Built and integrated an AI-powered conversational chatbot. Utilized Python (FastAPI) to handle backend AI logic, API requests, and prompt engineering.',
        tech: ['Python', 'FastAPI', 'AI Integration', 'React.js'],
        link: 'https://chatbot.skl-solutions.com'
      },
      {
        title: 'Truematch360',
        subtitle: 'Matching Platform',
        desc: 'Developed a full-stack matching platform designed to connect users. Managed complex data relationships and optimized database queries.',
        tech: ['Python','FastAPI', 'PostgreSQL', 'React.js', 'MUI', 'WebSockets'],
        link: null
      }
    ]
  },
  {
    company: 'GoTrade',
    companyLink: null, // No public link for GoTrade
    role: 'Web Developer Intern',
    duration: 'Mar 2025 – Jun 2025',
    description: 'Built a responsive company website during my internship. Collaborated with the team to deliver a functional web presence.',
    projects: [
      {
        title: 'GoTrade Website',
        subtitle: 'Company Web Presence',
        desc: 'Developed the frontend and backend of the company website using PHP and Laravel, ensuring a seamless user experience.',
        tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
        link: null
      }
    ]
  }
];

const Experience = () => {
  const theme = useTheme();
  // Dynamic text color for headers based on dark/light mode
  const headerTextColor = theme.palette.mode === 'light' ? 'white' : '#121212';

  return (
    <Box id="experience" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <WorkIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
          <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
            Work Experience
          </Typography>
          <Typography variant="h6" color="text.secondary">
            My professional journey and the impactful products I've built.
          </Typography>
        </Box>

        <Stack spacing={6}>
          {experienceData.map((exp, index) => (
            <Card key={index} sx={{ boxShadow: 4, borderRadius: 4, overflow: 'hidden' }}>
              
              {/* Company Header */}
              <Box sx={{ 
                backgroundColor: 'primary.main', 
                color: headerTextColor, 
                p: 3, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2
              }}>
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    {exp.company}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    {exp.role} | {exp.duration}
                  </Typography>
                </Box>

                {/* Company Website Link Button */}
                {exp.companyLink && (
                  <Button 
                    variant="outlined" 
                    startIcon={<BusinessIcon />}
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: headerTextColor, 
                      borderColor: headerTextColor,
                      '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
                    }}
                  >
                    Visit Company
                  </Button>
                )}
              </Box>

              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="body1" color="text.primary" sx={{ mb: 4, fontSize: '1.1rem' }}>
                  {exp.description}
                </Typography>

                <Divider sx={{ mb: 4 }} />

                {/* Projects Built Here */}
                <Typography variant="h6" fontWeight="bold" color="secondary" gutterBottom sx={{ mb: 3 }}>
                  Key Projects Delivered:
                </Typography>

                <Stack spacing={4}>
                  {exp.projects.map((proj, pIndex) => (
                    <Box key={pIndex} sx={{ 
                      backgroundColor: 'background.paper', 
                      p: 3, 
                      borderRadius: 2, 
                      border: '1px solid', 
                      borderColor: 'divider' 
                    }}>
                      <Typography variant="h5" color="primary" fontWeight="bold">
                        {proj.title} <Typography component="span" variant="subtitle1" color="text.secondary" fontWeight="normal">- {proj.subtitle}</Typography>
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ my: 2, lineHeight: 1.7 }}>
                        {proj.desc}
                      </Typography>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {proj.tech.map((tech, i) => (
                            <Chip key={i} label={tech} size="small" color="primary" variant="outlined" sx={{ fontWeight: 'bold' }} />
                          ))}
                        </Stack>

                        {/* Show Live Link if exists */}
                        {proj.link ? (
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
                        ) : (
                          /* Show Private Badge if no link (e.g., GoTrade / Truematch) */
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