import React from "react";
import "../styles/Publications.css";
import FadeInSection from "./FadeInSection";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const StyledPublicationItem = styled(Box)(({ theme }) => ({
  marginBottom: '1.5rem',
  padding: '1.5rem',
  backgroundColor: 'var(--lightest-navy)',
  borderRadius: '5px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateX(10px)'
  }
}));

class Publications extends React.Component {
  render() {
    const publications = [
      {
        title: "Technical considerations and challenges of validating a clinical anchored multiplex NGS based assay for known and novel fusion detection in cancer",
        type: "paper"
      },
      {
        title: "Current clinical practices and challenges in molecular testing: A goal consortium hematopathology working group report",
        type: "paper"
      },
      {
        title: "A rapid automated and integrated NGS based method simultaneous effectively detects somatic DNA and RNA aberrations in myeloid neoplasms",
        type: ["poster", "paper"]
      },
      {
        title: "CNVvis: an Rshiny application for interactive copy number variant visualization in cancer",
        type: ["poster", "paper"]
      },
      {
        title: "The power of collaboration: The Genomics organization for academic laboratories (GOAL) consensus bioinformatics pipeline development",
        type: ["poster", "paper"]
      },
      {
        title: "Validation of PennSeq HEME: A custom targeted hybrid capture Next generation sequencing assay for hematological malignancies",
        type: "poster"
      },
      {
        title: "Evaluation of an integrated NGS platform for rapid detection of genomic aberrations in solid tumors",
        type: ["poster", "paper"]
      },
      {
        title: "TERT gene rearrangement in chordomas and comparison to other TERT-rearranged solid tumors",
        type: "paper"
      },
      {
        title: "Homologous recombination pathway gene variants identified by tumor only sequencing assays in lung carcinoma patients",
        type: "paper"
      },
      {
        title: "Incorporation of alternative transcript annotation into a clinical oncology pipeline",
        type: "paper"
      },
      {
        title: "TRG poster at AMP",
        type: "poster"
      },
      {
        title: "Tumor mutational burden 0.5mb & 3mb versions",
        type: ["poster", "presentation"],
        note: "Poster at AMP/ Invited GOAL talk"
      },
      {
        title: "High degree of NGS concordance in a 9-laboratory study: data from the genomics organization for academic laboratories",
        type: "paper"
      },
      {
        title: "GOAL concordance SNVs",
        type: ["poster", "paper"],
        note: "in prep"
      },
      {
        title: "GOAL concordance CNVs",
        type: ["poster", "paper"],
        note: "in prep"
      },
      {
        title: "Azuify- pathogenicity classification of somatic mutations in clinical diagnostics through online machine learning",
        type: "paper",
        note: "in prep"
      },
      {
        title: "Passionate Hobbies Is All You Need: A meta-analysis of astronomical resources and their application to medical imaging technology. An elucidation of the fact we are all made of stardust",
        type: "paper",
        note: "in prep"
      }
    ];

    return (
      <div id="publications">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ publications & presentations</span>
          </div>
          
          <div className="publications-content">
            {publications.map((pub, index) => (
              <FadeInSection key={index} delay={`${index % 4 * 100}ms`}>
                <StyledPublicationItem>
                  <Typography variant="h6" className="publication-title">
                    {pub.title}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {Array.isArray(pub.type) ? (
                      pub.type.map((type, i) => (
                        <Chip
                          key={i}
                          label={type}
                          className={`publication-type-${type}`}
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))
                    ) : (
                      <Chip
                        label={pub.type}
                        className={`publication-type-${pub.type}`}
                        sx={{ mr: 1, mb: 1 }}
                      />
                    )}
                    {pub.note && (
                      <Chip
                        label={pub.note}
                        className="publication-note"
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                    )}
                  </Box>
                </StyledPublicationItem>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Publications;
