import React from "react";
import "../styles/About.css";
import ScrollReveal from "./ScrollReveal";
import profilePic from "../assets/me2.jpg";

const About = () => {
  const tech_stack = [
    {
      category: "Programming & Development",
      items: ["Python", "R", "Bash", "Git", "REST API", "WDL"]
    },
    {
      category: "Cloud & Databases",
      items: ["AWS", "Azure", "IAP", "SQL", "SQLite"]
    },
    {
      category: "NGS & Analysis",
      items: ["WGS/WES", "NGS Analysis", "Gene Expression", "SNP Analysis", "ML/AI"]
    },
    {
      category: "Tools & Systems",
      items: ["Linux/Unix", "SECTRA", "Docker", "Snakemake"]
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
                Hello! I'm Chase, a bioinformatician with a passion for genomics and software development. 
                My journey in bioinformatics began during my undergraduate years at Auburn University, 
                where I combined my interests in molecular biology and computer science.
              </p>
              <p className="body-text">
                Currently, I specialize in developing and optimizing bioinformatics pipelines for genomic analysis. 
                My work focuses on making complex genomic data analysis more accessible and efficient through 
                automation and cloud computing solutions.
              </p>
              <p className="body-text">
                When I'm not coding or analyzing genomic data, I enjoy contributing to open-source bioinformatics 
                tools and staying updated with the latest developments in genomics and computational biology.
              </p>
            </div>

            <div className="tech-stack-section">
              <h3 className="title-text">Technologies & Skills</h3>
              <div className="tech-categories">
                {tech_stack.map((category, i) => (
                  <div key={i} className="tech-category">
                    <h4 className="subtitle-text">{category.category}</h4>
                    <ul className="tech-items-list">
                      {category.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
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
