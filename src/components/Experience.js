import React from "react";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const experiences = [
      {
        company: "University of Pennsylvania",
        position: "Bioinformatics Specialist II",
        duration: "2024 - Present",
        description: [
          "Manage current clinical pipelines for over 6,000 patients annually",
          "Develop new cutting-edge pipelines and tools for molecular pathology and oncology",
          "Manage ~1Petabyte of clinical data",
          "Host and curate a data lake of all pipeline outputs and statistics for research use",
          "Migrated and curated 11 years of patient information and results to a new LIMS and database",
          "Headed QC project to ensure correct probes are mailed from vendor for clinical use"
        ],
        tags: ["NGS Analysis", "Pipeline Development", "Data Management", "LIMS", "QC"]
      },
      {
        company: "University of Pennsylvania",
        position: "Bioinformatics Specialist",
        duration: "2019 - 2024",
        description: [
          "Assisted in creating a targeted cancer panel at the vet school",
          "Contributed to bringing cancer detection and treatments to developing countries in Africa (ICC)",
          "Created tutorial videos and informational content for emerging labs (ICC & GOAL)",
          "Initial member in the GOAL consortium to unify cancer genomics"
        ],
        tags: ["Cancer Genomics", "Education", "International Collaboration", "Pipeline Development"]
      }
    ];

    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ work experience</span>
          </div>
          <div className="experience-content">
            {experiences.map((exp, index) => (
              <FadeInSection delay={`${index + 1}00ms`} key={index}>
                <div className="job-card">
                  <div className="job-company">{exp.company}</div>
                  <div className="job-position">{exp.position}</div>
                  <div className="job-duration">{exp.duration}</div>
                  <ul className="job-description">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="job-tags">
                    {exp.tags.map((tag, i) => (
                      <span className="job-tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
