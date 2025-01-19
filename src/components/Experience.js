import React from "react";
import "../styles/Experience.css";
import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  const experiences = [
    {
      company: "University of Pennsylvania",
      role: "Bioinformatics Specialist II",
      date: "2024 - Present",
      responsibilities: [
        "Manage current clinical pipelines for over 6,000 patients annually",
        "Develop new cutting-edge pipelines and tools for molecular pathology and oncology",
        "Manage ~1Petabyte of clinical data",
        "Host and curate a data lake of all pipeline outputs and statistics for research use",
        "Migrated and curated 11 years of patient information and results to a new LIMS and database",
        "Headed QC project to ensure correct probes are mailed from vendor for clinical use"
      ],
      tech: ["NGS Analysis", "Pipeline Development", "Data Management", "LIMS", "QC"],
      logo: "",
      link: ""
    },
    {
      company: "University of Pennsylvania",
      role: "Bioinformatics Specialist",
      date: "2019 - 2024",
      responsibilities: [
        "Assisted in creating a targeted cancer panel at the vet school",
        "Contributed to bringing cancer detection and treatments to developing countries in Africa (ICC)",
        "Created tutorial videos and informational content for emerging labs (ICC & GOAL)",
        "Initial member in the GOAL consortium to unify cancer genomics"
      ],
      tech: ["Cancer Genomics", "Education", "International Collaboration", "Pipeline Development"],
      logo: "",
      link: ""
    }
  ];

  return (
    <ScrollReveal>
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-description">
          Where I've worked and made an impact
        </p>
      </div>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              {experience.logo && (
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="company-logo"
                />
              )}
              <h3 className="role-title">{experience.role}</h3>
              <div className="company-name">{experience.company}</div>
              <div className="date-range">{experience.date}</div>
            </div>
            <div className="experience-content">
              <ul className="responsibilities">
                {experience.responsibilities.map((item, i) => (
                  <li key={i} className="responsibility-item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="tech-stack">
                {experience.tech.map((tech, i) => (
                  <span key={i} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {experience.link && (
              <div className="experience-links">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                >
                  Visit Website →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default Experience;
