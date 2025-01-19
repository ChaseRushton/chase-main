import React from "react";
import "../styles/NavBar.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

class NavBar extends React.Component {
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
    return (
      <nav className="nav">
        <div className="nav-items">
          <div className="nav-item">
            <a href="#about">about</a>
          </div>
          <div className="nav-item">
            <a href="#experience">experience</a>
          </div>
          <div className="nav-item">
            <a href="#presentations">presentations</a>
          </div>
          <div className="nav-item">
            <a href="#affiliations">affiliations</a>
          </div>
        </div>
        <div className="nav-icons">
          <a href="mailto:chaserushton@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 18 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/ChaseRushton" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: 17 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/chase-rushton-83abb8163/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ fontSize: 19 }}></LinkedInIcon>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
