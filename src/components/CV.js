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
        email: { content: "My email", isEditing: false },
        phoneNuber: { content: "My phone number", isEditing: false },
        githubAccount: { content: "My GitHub Account", isEditing: false },
        linkedInAccount: { content: "My LinkedIn Account", isEditing: false },
      },
      education: {
        id: "education",
        schoolName: { content: "My School name", isEditing: false },
        titleOfStudy: { content: "My title of Study", isEditing: false },
        dateOfStudy: { content: "My Date of Study", isEditing: false },
      },
      experience: {
        id: "experience",
        companyName: { content: "My company Name", isEditing: false },
        positionTitle: { content: "My position Title", isEditing: false },
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
            className={key}
            value={sectionObj[key].content}
            onFieldChange={this.onFieldChange.bind(this, sectionObj.id, key)}
            onFieldSubmit={this.onFieldSubmit.bind(this, sectionObj.id, key)}
          />
        );
      } else {
        sectionFields.push(
          <Field
            key={key}
            className={key}
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
      <div className="CV">
        <Section className="About">{this.getFields(about)}</Section>
        <Section className="Contact">{this.getFields(contact)}</Section>
        <Section className="Education">{this.getFields(education)}</Section>
        <Section className="Experience">{this.getFields(experience)}</Section>
      </div>
    );
  }
}
