import React from "react";
import "./App.css";
import "./styles/Global.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Presentations from "./components/Presentations";
import Affiliations from "./components/Affiliations";
import NavBar from "./components/NavBar";
import BinaryRain from "./components/BinaryRain";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BinaryRain />
        <NavBar />
        <div id="content">
          <Intro></Intro>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Presentations></Presentations>
          <Affiliations></Affiliations>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
