import React from "react";
import "../styles/Projects.css";
import ScrollReveal from "./ScrollReveal";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Illumina Connected Analytics",
      description: "Led the development of a cloud-based platform for genomic data analysis and management. Implemented scalable solutions for processing large-scale genomic data and integrated automated quality control pipelines.",
      technologies: ["Python", "AWS", "Docker", "NextFlow", "WDL", "SQL", "DRAGEN"],
      github: "",
      live: "https://www.illumina.com/products/by-type/informatics-products/connected-analytics.html"
    },
    {
      title: "Genomic Datalake",
      description: "Architected and implemented a comprehensive genomic data lake solution for storing and analyzing large-scale sequencing data. Developed automated ETL pipelines and optimized data access patterns for efficient querying and analysis.",
      technologies: ["Python", "SQL", "Databricks"],
      github: "",
      live: ""
    },
    {
      title: "Archer QC",
      description: "Developed a comprehensive quality control system for next-generation sequencing data. Created automated workflows for detecting sample quality issues and generating detailed QC reports for clinical validation.",
      technologies: ["Python", "R", "API", "VM"],
      github: "",
      live: ""
    },
    {
      title: "Rapid Heme (PiVat)",
      description: "Built a rapid variant analysis tool for hematologic malignancies. Engineered a streamlined pipeline for quick turnaround of clinical genomic data, enabling faster diagnosis and treatment decisions.",
      technologies: ["Python", "API", "VM", "DRAGEN"],
      github: "",
      live: ""
    }
  ];

  return (
    <div className="section-container" id="projects">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Current Projects</h2>
          <p className="section-description">
            Some things I've been working on
          </p>
        </div>

        <div className="projects-content">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Projects;
