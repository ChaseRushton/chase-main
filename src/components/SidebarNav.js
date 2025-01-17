import React from "react";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";
import "../styles/SidebarNav.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
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
    const { expanded } = this.state;

    const links = [
      <Link to="/#about">about</Link>,
      <Link to="/#experience">experience</Link>,
      <Link to="/#publications">publications</Link>,
      <Link to="/#presentations">presentations</Link>,
      <Link to="/#affiliations">affiliations</Link>
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <div className="nav-links">
            {links.map((link, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <div>{link}</div>
              </FadeInSection>
            ))}
          </div>
        )}
        <div className="social-links">
          <a href="mailto:chaserushton@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/chase-rushton-83abb8163/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ChaseRushton">
            <GitHubIcon />
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
