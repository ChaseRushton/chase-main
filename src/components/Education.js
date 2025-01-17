import React from "react";
import "../styles/Education.css";
import FadeInSection from "./FadeInSection";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StyledEducationItem = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: 'var(--lightest-navy)',
  borderRadius: '5px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateX(10px)'
  }
}));

class Education extends React.Component {
  render() {
    return (
      <div id="education">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ education</span>
          </div>
          
          <div className="education-content">
            <StyledEducationItem>
              <Typography variant="h5" className="education-school">
                Auburn University
              </Typography>
              <Typography variant="h6" className="education-degree">
                M.S. Bioinformatics
              </Typography>
              <Typography variant="body1" className="education-details">
                <ul>
                  <li>Thesis: "Broad characterization of structural variation and genetic differentiation in two hybridizing macaque species"</li>
                  <li>Advisor: Dr. Laurie Stevison</li>
                  <li>Led a side project using the Sequenom iPLEX ADME PGx Panel on the MassARRAY System to genotype polymorphisms in D. pseudoobscura</li>
                </ul>
              </Typography>
            </StyledEducationItem>

            <StyledEducationItem>
              <Typography variant="h5" className="education-school">
                Auburn University
              </Typography>
              <Typography variant="h6" className="education-degree">
                B.S. Molecular and Cellular Microbiology
              </Typography>
              <Typography variant="body1" className="education-details">
                <ul>
                  <li>Laboratory of Ramesh Jeganathan, Ph.D., Director of Diabetes and Alzheimer Research Laboratory</li>
                  <li>Focused on insulin signaling in animal models of obesity and type 2 diabetes</li>
                  <li>Investigated molecular mechanisms responsible for insulin resistance in type 2 diabetes</li>
                  <li>Explored the link between Alzheimer's disease and type 2 diabetes</li>
                </ul>
              </Typography>
            </StyledEducationItem>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Education;
