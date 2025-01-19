import React from "react";
import "../styles/Affiliations.css";
import ScrollReveal from "./ScrollReveal";

const Affiliations = () => {
  const affiliations = [
    {
      organization: "University of Pennsylvania",
      duration: "2019 - Present",
      role: "Bioinformatics Specialist",
      description: "Leading bioinformatics initiatives and developing genomic analysis pipelines",
      type: "academic",
      url: "https://www.upenn.edu/"
    },
    {
      organization: "Genomics Organization for Academic Labs",
      duration: "2019 - Present",
      role: "Member",
      description: "Contributing to standardization of genomic analysis practices across academic laboratories",
      type: "professional",
      url: "https://www.goalabs.org/labs"
    },
    {
      organization: "Association for Molecular Pathology",
      duration: "2019 - Present",
      role: "Active Member",
      description: "Participating in molecular diagnostics advancement and knowledge sharing",
      type: "professional",
      url: "https://www.amp.org/"
    },
    {
      organization: "International Federation of Clinical Chemistry and Laboratory Medicine",
      duration: "2019 - Present",
      role: "Member",
      description: "Contributing to global advancement of clinical laboratory science and patient care",
      type: "professional",
      url: "https://ifcc.org/"
    }
  ];

  return (
    <div id="affiliations">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Professional Affiliations</h2>
          <p className="section-description">
            Organizations I'm actively involved with
          </p>
        </div>
        <div className="affiliations-grid">
          {affiliations.map((affiliation, index) => (
            <div className="affiliation-item" key={index}>
              <div className="affiliation-content">
                <div className="affiliation-header">
                  <h3 className="affiliation-role">{affiliation.role}</h3>
                  <div className="affiliation-duration">{affiliation.duration}</div>
                </div>
                <h4 className="affiliation-organization">
                  {affiliation.url ? (
                    <a href={affiliation.url} target="_blank" rel="noopener noreferrer">
                      {affiliation.organization} ↗
                    </a>
                  ) : (
                    affiliation.organization
                  )}
                </h4>
                <p className="affiliation-description">{affiliation.description}</p>
                <div className="affiliation-footer">
                  <span className={`affiliation-type ${affiliation.type}`}>
                    {affiliation.type.charAt(0).toUpperCase() + affiliation.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Affiliations;
