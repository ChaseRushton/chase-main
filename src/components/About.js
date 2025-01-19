import React from "react";
import "../styles/About.css";
import ScrollReveal from "./ScrollReveal";
import profileImage from "../assets/me2.jpg";

const About = () => {
  const one = (
    <p>
      I am currently a Bioinformatician at{" "}
      <a href="https://www.pennmedicine.org/">University of Pennsylvania Health System</a>, 
      where I work at the intersection of biology and computer science. I hold a Master's degree in Bioinformatics {" "}
      and completed my undergraduate studies in Microbial, Cellular, and Molecular Biology at{" "}
      <a href="https://www.auburn.edu/">Auburn University</a>.
    </p>
  );
  
  const two = (
    <p>
      My expertise spans across various NGS technologies and analysis pipelines, including WGS, WES, 
      and targeted sequencing approaches. I specialize in developing and implementing bioinformatics 
      pipelines using cloud computing platforms like AWS, Azure, and Illumina Analytics Platform (IAP).
    </p>
  );

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

  const three = (
    <p>
      Outside of work, I like to spoil my dog, cook, work on my car, gym, play video games, watch movies, build legos and tinker with my 3d printer and other tech. I'm particularly 
      interested in population genetics and the application of AI in genomics research.
    </p>
  );

  return (
    <div id="about">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A brief introduction
          </p>
        </div>
        <div className="about-content">
          <div className="about-text-content">
            <div className="about-description">
              {one}
              {two}
              {three}
            </div>
            <div className="skills-container">
              <div className="tech-stack-section">
                <h3>Technologies & Skills</h3>
                <div className="tech-categories">
                  {tech_stack.map((category, i) => (
                    <div key={i} className="tech-category">
                      <h4>{category.category}</h4>
                      <ul>
                        {category.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <div className="about-image">
              <img alt="Chase" src={profileImage} />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;
