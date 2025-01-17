import React from "react";
import "../styles/Affiliations.css";
import FadeInSection from "./FadeInSection";

class Affiliations extends React.Component {
  render() {
    const affiliations = [
      {
        organization: "University of Pennsylvania",
        duration: "2019 - Present",
        role: "Bioinformatics Specialist"
      },
      {
        organization: "Genomics Organization for Academic Labs",
        duration: "2019 - Present",
        role: "Member"
      }
    ];

    return (
      <div id="affiliations">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ professional affiliations</span>
          </div>
          <div className="affiliations-content">
            {affiliations.map((affiliation, index) => (
              <FadeInSection key={index} delay={`${index + 1}00ms`}>
                <div className="affiliation-item">
                  <div className="affiliation-organization">
                    {affiliation.organization}
                  </div>
                  <div className="affiliation-duration">
                    {affiliation.duration}
                  </div>
                  <div className="affiliation-role">
                    {affiliation.role}
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

export default Affiliations;
