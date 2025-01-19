import React from "react";
import "../styles/About.css";
import ScrollReveal from "./ScrollReveal";
import profilePic from "../assets/me2.jpg";

const About = () => {
  const skillCategories = [
    {
      title: "Bioinformatics & NGS",
      skills: [
        { name: "WGS Analysis", level: "expert" },
        { name: "WES Analysis", level: "expert" },
        { name: "Population Genetics", level: "expert" },
        { name: "Pipeline Development", level: "expert" },
        { name: "Gene Expression", level: "expert" },
        { name: "SNP Analysis", level: "expert" },
        { name: "Sequence Capture", level: "expert" },
        { name: "Targeted Panels", level: "expert" },
        { name: "Genomic Integration", level: "expert" },
        { name: "Variant Calling", level: "expert" },
        { name: "RNA-Seq", level: "expert" },
        { name: "ChIP-Seq", level: "expert" },
        { name: "Metagenomics", level: "expert" },
        { name: "CNV Analysis", level: "expert" }
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", level: "expert" },
        { name: "R", level: "expert" },
        { name: "Bash", level: "expert" },
        { name: "Git", level: "expert" },
        { name: "REST APIs", level: "expert" },
        { name: "WDL", level: "expert" },
        { name: "Snakemake", level: "expert" },
        { name: "GATK", level: "expert" },
        { name: "Nextflow", level: "advanced" },
        { name: "CWL", level: "advanced" },
        { name: "Java", level: "advanced" },
        { name: "Jupyter", level: "expert" },
        { name: "RStudio", level: "expert" },
        { name: "VS Code", level: "expert" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: "expert" },
        { name: "Azure", level: "expert" },
        { name: "IAP", level: "expert" },
        { name: "PMACS", level: "expert" },
        { name: "Linux/Unix", level: "expert" },
        { name: "Docker", level: "advanced" },
        { name: "CI/CD", level: "advanced" },
        { name: "HPC Systems", level: "expert" },
        { name: "SLURM", level: "expert" },
        { name: "BaseSpace", level: "expert" },
        { name: "DNAnexus", level: "advanced" },
        { name: "Google Cloud", level: "advanced" }
      ]
    },
    {
      title: "Data & Analysis",
      skills: [
        { name: "SQL", level: "expert" },
        { name: "SQLite", level: "expert" },
        { name: "SECTRA", level: "advanced" },
        { name: "FileMaker Pro", level: "advanced" },
        { name: "Data Integration", level: "expert" },
        { name: "AI/ML", level: "advanced" },
        { name: "Data Visualization", level: "expert" },
        { name: "Statistical Analysis", level: "expert" },
        { name: "Tableau", level: "advanced" },
        { name: "BioPython", level: "expert" },
        { name: "Bioconductor", level: "expert" },
        { name: "DESeq2", level: "expert" },
        { name: "IGV", level: "expert" },
        { name: "UCSC Tools", level: "expert" }
      ]
    },
    {
      title: "Molecular Biology",
      skills: [
        { name: "PCR/qPCR", level: "expert" },
        { name: "DNA/RNA Seq", level: "expert" },
        { name: "Cell Culture", level: "expert" },
        { name: "Cloning", level: "expert" },
        { name: "Primer Design", level: "expert" },
        { name: "Sequenom", level: "advanced" },
        { name: "Protein Purification", level: "expert" },
        { name: "Microbial ID", level: "expert" },
        { name: "Assay Development", level: "expert" },
        { name: "SNP Genotyping", level: "expert" },
        { name: "Sanger Seq", level: "expert" },
        { name: "Microarrays", level: "expert" },
        { name: "Flow Cytometry", level: "advanced" },
        { name: "Western Blot", level: "expert" }
      ]
    },
    {
      title: "Research & Analysis",
      skills: [
        { name: "Experimental Design", level: "expert" },
        { name: "Quality Control", level: "expert" },
        { name: "Data Analysis", level: "expert" },
        { name: "Protocol Development", level: "expert" },
        { name: "Literature Review", level: "expert" },
        { name: "Grant Writing", level: "advanced" },
        { name: "Technical Writing", level: "expert" },
        { name: "Project Management", level: "expert" },
        { name: "Team Leadership", level: "expert" },
        { name: "Collaboration", level: "expert" },
        { name: "Problem Solving", level: "expert" },
        { name: "Method Validation", level: "expert" },
        { name: "SOP Development", level: "expert" },
        { name: "Risk Assessment", level: "expert" },
        { name: "Regulatory Compliance", level: "expert" }
      ]
    }
  ];

  return (
    <div className="section-container" id="about">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A brief introduction and background
          </p>
        </div>

        <div className="about-content">
          <div className="about-text-container">
            <div className="about-description">
              <p className="body-text">
                I am a Bioinformatician at the <a href="https://www.pennmedicine.org/" target="_blank" rel="noopener noreferrer" className="highlight-link">University of Pennsylvania Health System</a>, working at the fascinating crossroads of biology and computer science. I hold a Master's degree in Bioinformatics and earned my undergraduate degree in Microbial, Cellular, and Molecular Biology from Auburn University.
              </p>
              <p className="body-text">
                My expertise lies in next-generation sequencing (NGS) technologies and analysis pipelines, including WGS, WES, and targeted sequencing approaches. I specialize in building and optimizing bioinformatics pipelines using cloud computing platforms such as AWS, Azure, and the Illumina Analytics Platform (IAP).
              </p>
              <p className="body-text">
                When I'm not immersed in genomics, I enjoy spoiling my dog, experimenting in the kitchen, working on my car, hitting the gym, gaming, watching movies, building intricate LEGO sets, and tinkering with my 3D printer and other tech gadgets. I'm particularly passionate about population genetics and exploring how AI can advance genomics research.
              </p>
            </div>

            <div className="tech-stack-section">
              <h3 className="tech-stack-title">Technologies & Skills</h3>
              <div className="skills-grid">
                {skillCategories.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h4 className="category-title">{category.title}</h4>
                    <div className="tech-list">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className={`tech-tag ${skill.level}`}
                          title={`${skill.name} - ${skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src={profilePic} alt="Chase Rushton" className="profile-image" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;
