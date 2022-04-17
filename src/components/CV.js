import React from "react";
import "../styles/CV.css";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";

export default class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <About />
        <Contact />
        <Education />
      </div>
    );
  }
}
