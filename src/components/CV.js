import React from "react";
import "../styles/CV.css";
import EditableField from "./EditableField";
import Field from "./Field";
import Section from "./Section";

export default class CV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: {
        id: "about",
        fullName: { content: "Your Name", isEditing: false },
        job: { content: "Your job", isEditing: false },
        aboutDescription: {
          content: "About You",
          isEditing: false,
        },
      },
      contact: {
        id: "contact",
        email: { content: "Your email", isEditing: false },
        phoneNuber: { content: "Your phone number", isEditing: false },
        githubAccount: { content: "Your GitHub Account", isEditing: false },
        linkedInAccount: { content: "Your LinkedIn Account", isEditing: false },
      },
      education: {
        id: "education",
        schoolName: { content: "Your School name", isEditing: false },
        titleOfStudy: { content: "Your title of Study", isEditing: false },
        dateOfStudy: { content: "Your Date of Study", isEditing: false },
      },
      experience: {
        id: "experience",
        companyName: { content: "Your company Name", isEditing: false },
        positionTitle: { content: "Your position Title", isEditing: false },
        startDate: { content: "Start Date", isEditing: false },
        endDate: { content: "End date", isEditing: false },
        mainTaks: { content: ["Tasks"], isEditing: false },
      },
    };

    this.onFieldClick = this.onFieldClick.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onFieldSubmit = this.onFieldSubmit.bind(this);
  }

  onFieldClick(parent, key, e) {
    this.setState((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [key]: {
          ...prevState[parent][key],
          isEditing: true,
        },
      },
    }));
  }

  onFieldSubmit(parent, key, e) {
    this.setState((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [key]: {
          ...prevState[parent][key],
          isEditing: false,
        },
      },
    }));
  }

  onFieldChange(parent, key, e) {
    this.setState((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [key]: {
          ...prevState[parent][key],
          content: e.target.value,
        },
      },
    }));
  }

  getFields(sectionObj) {
    const sectionFields = [];
    for (const key in sectionObj) {
      if (key === "id") continue;
      if (sectionObj[key].isEditing) {
        sectionFields.push(
          <EditableField
            key={key}
            className={"field " + key}
            value={sectionObj[key].content}
            onFieldChange={this.onFieldChange.bind(this, sectionObj.id, key)}
            onFieldSubmit={this.onFieldSubmit.bind(this, sectionObj.id, key)}
          />
        );
      } else {
        sectionFields.push(
          <Field
            key={key}
            className={"field " + key}
            textContent={sectionObj[key].content}
            onFieldClick={this.onFieldClick.bind(this, sectionObj.id, key)}
          />
        );
      }
    }

    return sectionFields;
  }

  render() {
    const { about, contact, education, experience } = this.state;

    const aboutFields = [];
    for (const key in about) {
      if (about[key].isEditing) {
        aboutFields.push(
          <EditableField
            key={key}
            value={about[key].content}
            onFieldChange={this.onFieldChange.bind(this, "about", key)}
            onFieldSubmit={this.onFieldSubmit.bind(this, "about", key)}
          />
        );
      } else {
        aboutFields.push(
          <Field
            key={key}
            className={key}
            textContent={about[key].content}
            onFieldClick={this.onFieldClick.bind(this, "about", key)}
          />
        );
      }
    }
    return (
      <div className="CV" id="CV">
        <Section className="section About">{this.getFields(about)}</Section>
        <Section className="section Contact">{this.getFields(contact)}</Section>
        <Section className="section Education">
          <h2 className="sectionTitle">Education</h2>
          {this.getFields(education)}
        </Section>
        <Section className="section Experience">
          <h2 className="sectionTitle">Experience</h2>
          {this.getFields(experience)}
        </Section>
      </div>
    );
  }
}
