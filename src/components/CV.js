import React from "react";
import "../styles/CV.css";
import EditableField from "./EditableField";
import Field from "./Field";
import Section from "./Section";

import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiPhone,
} from "@mdi/js";

export default class CV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: {
        id: "about",
        fullName: {
          content: "John Doe",
          desc: "Enter your full name",
          isEditing: false,
        },
        job: {
          content: "Software engineer",
          desc: "Enter your curront position",
          isEditing: false,
        },
        aboutDescription: {
          content:
            "More than eight years of experience in the medical industry. Involved in product testing, management, and rollout in the direct telemarketing channel of the new products.",
          desc: "Enter A brief description about you",
          isEditing: false,
        },
      },
      contact: {
        id: "contact",
        email: {
          icon: <Icon path={mdiEmail} size={1} />,
          content: "johndoe@gmail.com",
          desc: "Enter your email",
          isEditing: false,
        },
        phoneNuber: {
          icon: <Icon path={mdiPhone} size={1} />,
          content: "+1 234 56789",
          desc: "Enter your Phone Number",
          isEditing: false,
        },
        githubAccount: {
          icon: <Icon path={mdiGithub} size={1} />,
          content: "https://github.com/",
          desc: "Enter Your Github account",
          isEditing: false,
        },
        linkedInAccount: {
          icon: <Icon path={mdiLinkedin} size={1} />,
          content: "https://www.linkedin.com/",
          desc: "Enter your LinkedIn account",
          isEditing: false,
        },
      },
      education: {
        id: "education",
        schoolName: {
          content: "UNIVERSITY OF MINNESOTA",
          desc: "Enter your School Name",
          isEditing: false,
        },
        titleOfStudy: {
          content: "College of Design",
          desc: "Enter your title of study",
          isEditing: false,
        },
        dateOfStudy: {
          content: "May 2011",
          desc: "Enter your date of Study",
          isEditing: false,
        },
      },
      experience: {
        id: "experience",
        companyName: {
          content: "PLANET BEACH",
          desc: "Enter Your company Name",
          isEditing: false,
        },
        positionTitle: {
          content: "Spa Consultant",
          desc: "Enter Your position Title",
          isEditing: false,
        },
        startDate: {
          content: "July 2009",
          desc: "Enter Start Date",
          isEditing: false,
        },
        endDate: {
          content: "present",
          desc: "Enter End date",
          isEditing: false,
        },
        mainTasks: {
          content: ["Sell retail and memberships to meet company sales goals"],
          desc: "Enter your main tasks",
          isEditing: false,
        },
      },
    };

    this.onFieldClick = this.onFieldClick.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onFieldSubmit = this.onFieldSubmit.bind(this);
  }

  onFieldClick(parent, key) {
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

  onFieldSubmit(parent, key) {
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
      if (key === "id" || sectionObj[key].ignore) continue;
      if (sectionObj[key].isEditing) {
        sectionFields.push(
          <EditableField
            key={key}
            className={"field " + key}
            placeHolder={sectionObj[key].desc}
            icon={sectionObj[key].icon}
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
            placeHolder={sectionObj[key].desc}
            textContent={sectionObj[key].content}
            icon={sectionObj[key].icon}
            onFieldClick={this.onFieldClick.bind(this, sectionObj.id, key)}
          />
        );
      }
    }

    return sectionFields;
  }

  render() {
    const { about, contact, education, experience } = this.state;

    return (
      <div className="CV" id="CV">
        <Section className="section About">
          <div>{this.getFields(about)}</div>
          <Icon path={mdiAccount} className="about-pic" />
        </Section>
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
