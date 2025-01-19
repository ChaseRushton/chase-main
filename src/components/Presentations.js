import React from "react";
import "../styles/Presentations.css";
import ScrollReveal from "./ScrollReveal";
import { FaCalendar, FaMicrophoneAlt, FaTag } from 'react-icons/fa';

const Presentations = () => {
  const presentations = [
    {
      role: "Speaker",
      event: "Boshel",
      years: ["2013", "2014"],
      type: "conference"
    },
    {
      role: "Speaker",
      event: "Poster, SEEPEG",
      years: ["2017"],
      type: "conference"
    },
    {
      role: "Speaker",
      event: "Auburn University Research Week",
      years: ["2017", "2018"],
      type: "university conference"
    },
    {
      role: "Poster Presenter",
      event: "Association for Molecular Pathology",
      years: ["2019", "2021", "2022", "2023"],
      type: "conference"
    },
    {
      role: "Guest Lecturer",
      event: "Auburn Genomic Biology",
      years: ["Spring 2021"],
      type: "lecture"
    },
    {
      role: "Invited Talk",
      event: "GOAL Informatics Group",
      years: ["2021", "2022", "2023"],
      type: "invited"
    },
    {
      role: "National Invited Talk",
      event: "GOAL",
      years: ["2023"],
      type: "invited"
    }
  ];

  return (
    <div className="section-container" id="presentations">
      <ScrollReveal>
        <div className="section-header">
          <h2 className="section-title">Presentations & Invited Lectures</h2>
          <p className="section-description">
            Speaking engagements and research presentations
          </p>
        </div>
        
        <div className="presentations-content">
          {presentations.map((presentation, index) => (
            <div key={index} className="presentation-card">
              <div className="presentation-header">
                <h3 className="presentation-title">{presentation.event}</h3>
              </div>
              
              <div className="presentation-meta">
                <div className="meta-item">
                  <FaMicrophoneAlt className="meta-icon" />
                  <span>{presentation.role}</span>
                </div>
                <div className="meta-item">
                  <FaCalendar className="meta-icon" />
                  <span>{presentation.years.join(", ")}</span>
                </div>
                <div className="meta-item">
                  <FaTag className="meta-icon" />
                  <span>{presentation.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Presentations;
