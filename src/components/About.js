import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import profileImage from "../assets/me2.jpg";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Bioinformatician</b> at{" "}
        <a href="https://www.pennmedicine.org/">University of Pennsylvania Health System</a>, 
        where I work at the intersection of biology and computer science. I hold a <b>Master's degree in Bioinformatics</b>{" "}
        and completed my undergraduate studies in <b>Microbial, Cellular, and Molecular Biology</b> at{" "}
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
      // Programming & Development
      "Python",
      "R",
      "Bash",
      "Git",
      "REST API",
      "WDL",
      
      // Cloud & Databases
      "AWS",
      "Azure",
      "IAP",
      "SQL",
      "SQLite",
      
      // NGS & Analysis
      "WGS/WES",
      "NGS Analysis",
      "Gene Expression",
      "SNP Analysis",
      "ML/AI",
      
      // Tools & Systems
      "Linux/Unix",
      "SECTRA",
      "Docker",
      "Snakemake"
    ];

    const three = (
      <p>
        Outside of work, I like to cook, work on my car, gym, play video games, watch movies, build legos and tinker with my 3d printer and other tech. I'm particularly 
        interested in population genetics and the application of AI in genomics research.
      </p>
    );

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some key technologies and skills I work with:"}
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                ))}
              </ul>
              {[two]}
              {[three]}
            </div>
            <div className="about-image">
              <img alt="Chase" src={profileImage} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
