import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import BinaryRain from "./BinaryRain";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
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
      <div id="intro">
        <div id="intro-content">
          <div className="intro-title">
            <Typist avgTypingDelay={70} cursor={{ hideWhenDone: true }}>
              hi, <span className="intro-name">chase</span> here.
            </Typist>
          </div>
          <div className="intro-subtitle">
            <Typist avgTypingDelay={50} startDelay={1500} cursor={{ hideWhenDone: true }}>
              I create genomic solutions through code.
            </Typist>
          </div>
          <div className="intro-desc">
            I'm a bioinformatician specializing in next-generation sequencing
            analysis and pipeline development. Currently working at{" "}
            <a href="https://www.pennmedicine.org/">
              University of Pennsylvania Health System
            </a>
            .
          </div>
          <a
            href="mailto:chaserushton@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </div>
        <div id="animations-container">
          <BinaryRain />
        </div>
      </div>
    );
  }
}

export default Intro;
