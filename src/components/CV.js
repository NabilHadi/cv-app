import React from "react";
import "../styles/CV.css";
import Section from "./Section";

export default class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <Section className="About" />
        <Section className="Contact" />
        <Section className="Education" />
        <Section className="Experience" />
      </div>
    );
  }
}
