import React from "react";
import "../styles/CV.css";
import Field from "./Field";
import Section from "./Section";

export default class CV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: {
        name: { content: "My name", isEditing: false },
        job: { content: "My job", isEditing: false },
        aboutDescription: { content: "My about", isEditing: false },
      },
      contact: {
        email: { content: "My email", isEditing: false },
        phoneNuber: { content: "My phone number", isEditing: false },
        githubAccount: { content: "My GitHub Account", isEditing: false },
        linkedInAccount: { content: "My LinkedIn Account", isEditing: false },
      },
      education: {
        schoolName: { content: "My School name", isEditing: false },
        titleOfStudy: { content: "My title of Study", isEditing: false },
        dateOfStudy: { content: "My Date of Study", isEditing: false },
      },
      experience: {
        companyName: { content: "My company Name", isEditing: false },
        positionTitle: { content: "My position Title", isEditing: false },
        startDate: { content: "Start Date", isEditing: false },
        endDate: { content: "End date", isEditing: false },
        mainTaks: { content: ["Tasks"], isEditing: false },
      },
    };

    this.onFieldClick = this.onFieldClick.bind(this);
  }

  onFieldClick(e) {
    console.log(e.target);
  }

  render() {
    const { about } = this.state;

    const aboutFields = [];
    for (const key in about) {
      aboutFields.push(
        <Field
          key={key}
          className={key}
          textContent={about[key].content}
          onFieldClick={this.onFieldClick}
        />
      );
    }
    return (
      <div className="CV">
        <Section className="About">{aboutFields}</Section>
        <Section className="Contact">Contact</Section>
        <Section className="Education">Education</Section>
        <Section className="Experience">Experience</Section>
      </div>
    );
  }
}
