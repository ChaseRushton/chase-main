import React from "react";
import "../styles/Presentations.css";
import FadeInSection from "./FadeInSection";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const StyledPresentationItem = styled(Box)(({ theme }) => ({
  marginBottom: '1.5rem',
  padding: '1.5rem',
  backgroundColor: 'var(--lightest-navy)',
  borderRadius: '5px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateX(10px)'
  }
}));

class Presentations extends React.Component {
  render() {
    const presentations = [
      {
        role: "Speaker",
        event: "Boshel",
        years: ["2013", "2014"],
        type: "conference"
      },
      {
        role: "Speaker",
        event: "Poster, SEEPEG",
        years: ["2017"],
        type: "conference"
      },
      {
        role: "Speaker",
        event: "Auburn University Research Week",
        years: ["2017", "2018"],
        type: "university conference"
      },
      {
        role: "Poster Presenter",
        event: "Association for Molecular Pathology",
        years: ["2019", "2021", "2022", "2023"],
        type: "conference"
      },
      {
        role: "Guest Lecturer",
        event: "Auburn Genomic Biology",
        years: ["Spring 2021"],
        type: "lecture"
      },
      {
        role: "Invited Talk",
        event: "GOAL Informatics Group",
        years: ["2021", "2022", "2023"],
        type: "invited"
      },
      {
        role: "National Invited Talk",
        event: "GOAL",
        years: ["2023"],
        type: "Invited"
      }
    ];

    return (
      <div id="presentations">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ presentations & invited lectures</span>
          </div>
          
          <div className="presentations-content">
            {presentations.map((pres, index) => (
              <FadeInSection key={index} delay={`${index * 100}ms`}>
                <StyledPresentationItem>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <Box>
                      <Typography variant="h6" className="presentation-role">
                        {pres.role}
                      </Typography>
                      <Typography variant="h5" className="presentation-event">
                        {pres.event}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {pres.years.map((year, i) => (
                        <Chip
                          key={i}
                          label={year}
                          className="presentation-year"
                        />
                      ))}
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Chip
                      label={pres.type}
                      className={`presentation-type-${pres.type}`}
                    />
                  </Box>
                </StyledPresentationItem>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Presentations;
