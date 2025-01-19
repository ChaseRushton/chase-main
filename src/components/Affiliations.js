import React from "react";
import "../styles/Affiliations.css";
import ScrollReveal from "./ScrollReveal";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Affiliations = () => {
  const affiliations = [
    {
      title: "International Federation of Clinical Chemistry and Laboratory Medicine",
      organization: "Member",
      date: "2019 - Present",
      description: "Contributing to global advancement of clinical laboratory science and patient care",
      link: "https://ifcc.org/",
      type: "professional"
    },
    {
      title: "Genomics Organization for Academic Labs",
      organization: "Member",
      date: "2019 - Present",
      description: "Contributing to standardization of genomic analysis practices across academic laboratories",
      link: "https://www.goalabs.org/labs",
      type: "professional"
    },
    {
      title: "University of Pennsylvania",
      organization: "Bioinformatics Specialist",
      date: "2019 - Present",
      description: "Leading bioinformatics initiatives and developing genomic analysis pipelines",
      link: "https://www.upenn.edu/",
      type: "academic"
    },
    {
      title: "Association for Molecular Pathology",
      organization: "Active Member",
      date: "2019 - Present",
      description: "Participating in molecular diagnostics advancement and knowledge sharing",
      link: "https://www.amp.org/",
      type: "professional"
    }
  ];

  return (
    <div className="section-container" id="affiliations">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Professional Affiliations</h2>
          <p className="section-description">
            Organizations I'm actively involved with
          </p>
        </div>

        <div className="affiliations-content">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="affiliation-card">
              <div className="affiliation-header">
                <h3 className="affiliation-title">{affiliation.title}</h3>
                <p className="affiliation-organization">{affiliation.organization}</p>
                <p className="affiliation-date">{affiliation.date}</p>
              </div>
              
              <p className="affiliation-description">{affiliation.description}</p>
              
              <div className="affiliation-footer">
                <span className={`affiliation-type ${affiliation.type}`}>
                  {affiliation.type.charAt(0).toUpperCase() + affiliation.type.slice(1)}
                </span>
                
                {affiliation.link && (
                  <div className="affiliation-links">
                    <a href={affiliation.link} target="_blank" rel="noopener noreferrer" className="affiliation-link">
                      <FaExternalLinkAlt /> Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Affiliations;
