import React from "react";
import "../styles/Education.css";
import ScrollReveal from "./ScrollReveal";

const Education = () => {
  const education = [
    {
      school: "Auburn University",
      degree: "M.S. Bioinformatics",
      details: [
        "Thesis: \"Broad characterization of structural variation and genetic differentiation in two hybridizing macaque species\"",
        "Advisor: Dr. Laurie Stevison",
        "Led a side project using the Sequenom iPLEX ADME PGx Panel on the MassARRAY System to genotype polymorphisms in D. pseudoobscura"
      ]
    },
    {
      school: "Auburn University",
      degree: "B.S. Microbial, Cellular, and Molecular Biology",
      details: [
        "Minor in Computer Science",
        "Graduated Cum Laude",
        "Undergraduate research in bioinformatics and molecular biology"
      ]
    }
  ];

  return (
    <div className="section-container" id="education">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-description">Academic background and achievements</p>
        </div>
        
        <div className="education-content grid-layout">
          {education.map((item, index) => (
            <div key={index} className="education-item card-container">
              <h3 className="title-text">{item.school}</h3>
              <h4 className="subtitle-text">{item.degree}</h4>
              <ul className="styled-list">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Education;
