import React from "react";
import "../styles/Experience.css";
import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  const experiences = [
    {
      title: "Bioinformatics Specialist II",
      company: "University of Pennsylvania",
      duration: "2024 - Present",
      description: "Manage current clinical pipelines for over 6,000 patients annually and develop new cutting-edge pipelines and tools for molecular pathology and oncology.",
      responsibilities: [
        "Manage current clinical pipelines for over 6,000 patients annually",
        "Develop new cutting-edge pipelines and tools for molecular pathology and oncology",
        "Manage ~1Petabyte of clinical data",
        "Host and curate a data lake of all pipeline outputs and statistics for research use",
        "Migrated and curated 11 years of patient information and results to a new LIMS and database",
        "Headed QC project to ensure correct probes are mailed from vendor for clinical use"
      ],
      technologies: ["NGS Analysis", "Pipeline Development", "Data Management", "LIMS", "QC"]
    },
    {
      title: "Bioinformatics Specialist",
      company: "University of Pennsylvania",
      duration: "2019 - 2024",
      description: "Assisted in creating a targeted cancer panel at the vet school and contributed to bringing cancer detection and treatments to developing countries in Africa (ICC).",
      responsibilities: [
        "Assisted in creating a targeted cancer panel at the vet school",
        "Contributed to bringing cancer detection and treatments to developing countries in Africa (ICC)",
        "Created tutorial videos and informational content for emerging labs (ICC & GOAL)",
        "Initial member in the GOAL consortium to unify cancer genomics"
      ],
      technologies: ["Cancer Genomics", "Education", "International Collaboration", "Pipeline Development"]
    }
  ];

  return (
    <div className="section-container" id="experience">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            Where I've worked and made an impact
          </p>
        </div>

        <div className="experience-content">
          {experiences.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <div className="job-title-group">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company-name">{job.company}</p>
                </div>
                <p className="job-duration">{job.duration}</p>
              </div>

              <div className="job-description">
                <p>{job.description}</p>
              </div>

              <ul className="responsibilities">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="tech-used">
                {job.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Experience;
