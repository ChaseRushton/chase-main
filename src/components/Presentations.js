import React from "react";
import "../styles/Presentations.css";
import ScrollReveal from "./ScrollReveal";

const Presentations = () => {
  const presentations = [
    {
      role: "Speaker",
      event: "Boshel",
      years: ["2013", "2014"],
      type: "conference",
      description: "Presented research findings on genomic analysis techniques"
    },
    {
      role: "Speaker",
      event: "Poster, SEEPEG",
      years: ["2017"],
      type: "conference",
      description: "Showcased developments in NGS pipeline optimization"
    },
    {
      role: "Speaker",
      event: "Auburn University Research Week",
      years: ["2017", "2018"],
      type: "university conference",
      description: "Presented advancements in bioinformatics research"
    },
    {
      role: "Poster Presenter",
      event: "Association for Molecular Pathology",
      years: ["2019", "2021", "2022", "2023"],
      type: "conference",
      description: "Demonstrated innovations in molecular diagnostic testing"
    },
    {
      role: "Guest Lecturer",
      event: "Auburn Genomic Biology",
      years: ["Spring 2021"],
      type: "lecture",
      description: "Delivered comprehensive lectures on genomic biology concepts"
    },
    {
      role: "Invited Talk",
      event: "GOAL Informatics Group",
      years: ["2021", "2022", "2023"],
      type: "invited",
      description: "Shared insights on bioinformatics pipeline development"
    },
    {
      role: "National Invited Talk",
      event: "GOAL",
      years: ["2023"],
      type: "invited",
      description: "Presented national-level findings on genomic analysis"
    }
  ];

  return (
    <div className="section-container" id="presentations">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Presentations & Invited Lectures</h2>
          <p className="section-description">Speaking engagements and research presentations</p>
        </div>
        
        <div className="presentations-content grid-layout">
          {presentations.map((presentation, index) => (
            <div key={index} className="presentation-item card-container">
              <h3 className="title-text">{presentation.event}</h3>
              <div className="presentation-meta">
                <span className="subtitle-text">{presentation.role}</span>
                <span className="tag">{presentation.years.join(", ")}</span>
                <span className="tag">{presentation.type}</span>
              </div>
              <p className="body-text">{presentation.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Presentations;
