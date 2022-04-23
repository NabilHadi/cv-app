import React from "react";
import "../styles/CV.css";

import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

const CV = () => {
  return (
    <div className="CV" id="CV">
      <About />
      <Contact />
      <Education />
      <Experience />
    </div>
  );
};

export default CV;
