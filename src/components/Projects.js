import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";

const Projects = () => {
  const projects = [
    {
      title: "Illumina Connected Analytics",
      description: "Led the development of a cloud-based platform for genomic data analysis and management. Implemented scalable solutions for processing large-scale genomic data and integrated automated quality control pipelines.",
      tech: ["Python", "AWS", "Docker", "NextFlow", "WDL", "SQL", "DRAGEN"],
      demo: "https://www.illumina.com/products/by-type/informatics-products/connected-analytics.html"
    },
    {
      title: "Genomic Datalake",
      description: "Architected and implemented a comprehensive genomic data lake solution for storing and analyzing large-scale sequencing data. Developed automated ETL pipelines and optimized data access patterns for efficient querying and analysis.",
      tech: ["Python", "SQL", "Databricks"],
      demo: null
    },
    {
      title: "Archer QC",
      description: "Developed a comprehensive quality control system for next-generation sequencing data. Created automated workflows for detecting sample quality issues and generating detailed QC reports for clinical validation.",
      tech: ["Python", "R", "API", "VM"],
      demo: null
    },
    {
      title: "Rapid Heme (PiVat)",
      description: "Built a rapid variant analysis tool for hematologic malignancies. Engineered a streamlined pipeline for quick turnaround of clinical genomic data, enabling faster diagnosis and treatment decisions.",
      tech: ["Python", "API", "VM", "DRAGEN"],
      demo: null
    }
  ];

  return (
    <div id="projects">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Notable contributions in genomics and bioinformatics
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Projects;
