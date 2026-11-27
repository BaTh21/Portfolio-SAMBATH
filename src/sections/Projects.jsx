import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language'; // Added for live links

const projectsData = [
  {
    title: 'Khawin Company',
    role: 'Full-Stack Developer',
    description: [
      "Neco360: Engineered a comprehensive social and health platform featuring a diary feed, short-form video reels, and real-time messaging (voice/video calls). Implemented secure encrypted medical records and a robust Role-Based Access Control (RBAC) system with an admin dashboard.",
      "ChatBot: Built and integrated an AI-powered conversational chatbot to assist users, utilizing Python (FastAPI) to handle backend AI logic and API requests.",
      "Truematch360: Developed a full-stack matching platform designed to connect users, managing complex data relationships using PostgreSQL.",
      "Mobile App: Developed a mobile application alongside the web platforms, handling both frontend user interfaces (React/MUI) and API integrations."
    ],
    tech: ['React.js', 'MUI', 'FastAPI','PostgreSQL','Python', 'Docker', 'JWT', 'OAuth2', 'WebSockets'],
    link: 'https://gitea.skl-solutions.com/', 
    isPrivate: true,
    platform: 'Gitea',
    githubLink: 'https://github.com/BaTh21',
    liveLinks: [
      { label: 'Visit Neco360', url: 'https://neco.skl-solutions.com' },
      { label: 'Visit ChatBot', url: 'https://chatbot.skl-solutions.com' }
    ]
  },
  {
    title: 'GoTrade Website',
    role: 'Web Developer Intern',
    description: 'Built a responsive company website during my internship. Collaborated with the team to deliver a functional web presence using PHP and Laravel.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    link: null, 
    isPrivate: true,
    platform: 'Company Server'
  }
];

const Projects = () => {
  const theme = useTheme();
  const buttonTextColor = theme.palette.mode === 'light' ? 'white' : '#121212';

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="primary">
          Work Experience & Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 3 }}>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  
                  <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                    {project.title}
                  </Typography>
                  {/* FIXED: Changed color="secondary.main" to color="secondary" */}
                  <Typography variant="subtitle1" color="secondary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <WorkIcon fontSize="small" /> {project.role}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mb: 3, color: 'text.secondary' }}>
                    {Array.isArray(project.description) ? (
                      project.description.map((point, i) => (
                        <Typography component="li" variant="body2" key={i} sx={{ mb: 1.5, lineHeight: 1.6 }}>
                          {point}
                        </Typography>
                      ))
                    ) : (
                      <Typography component="li" variant="body2" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                        {project.description}
                      </Typography>
                    )}
                  </Box>
                  
                  <Typography variant="subtitle2" fontWeight="bold" color="text.primary" sx={{ mt: 2, mb: 1 }}>
                    Technologies Used:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tech.map((techItem, i) => (
                      <Chip key={i} label={techItem} color="primary" variant="outlined" size="small" sx={{ mb: 1, fontWeight: 'bold' }} />
                    ))}
                  </Stack>
                </CardContent>
                
                <CardActions sx={{ p: 3, pt: 0, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  
                  {/* ADDED: Live Website Buttons */}
                  {project.liveLinks && project.liveLinks.map((live, idx) => (
                    <Button 
                      key={idx}
                      size="small" 
                      color="success" 
                      variant="contained" 
                      startIcon={<LanguageIcon />} 
                      href={live.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'white', fontWeight: 'bold' }}
                    >
                      {live.label}
                    </Button>
                  ))}

                  {project.platform === 'Gitea' && (
                    <Button 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                      startIcon={<StorageIcon />} 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gitea (Private)
                    </Button>
                  )}

                  {project.githubLink && (
                    <Button 
                      size="small" 
                      color="primary" 
                      variant="contained" 
                      startIcon={<GitHubIcon />} 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ color: buttonTextColor }}
                    >
                      GitHub
                    </Button>
                  )}

                  {project.isPrivate && project.platform !== 'Gitea' && (
                    <Button 
                      size="small" 
                      color="inherit" 
                      variant="outlined" 
                      startIcon={<LockIcon />} 
                      disabled
                      sx={{ color: 'text.secondary', borderColor: 'divider' }}
                    >
                      Private Project
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;