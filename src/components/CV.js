import React from "react";
import "../styles/CV.css";
import About from "./About";

export default class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <About />
      </div>
    );
  }
}
