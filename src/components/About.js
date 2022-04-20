import { mdiAccount } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import EditableField from "./EditableField";
import Field from "./Field";
import Section from "./Section";

const getFieldView = (field, setField) => {
  if (field.isEditing) {
    return (
      <EditableField
        className={"field " + field.name}
        placeHolder={field.desc}
        icon={field.icon}
        value={field.content}
        onFieldChange={(e) => {
          setField({
            ...field,
            content: e.target.value,
          });
        }}
        onFieldSubmit={() => {
          setField({
            ...field,
            isEditing: false,
          });
        }}
      />
    );
  } else {
    return (
      <Field
        className={"field " + field.name}
        onFieldClick={() =>
          setField({
            ...field,
            isEditing: true,
          })
        }
      >
        {field.icon}
        {field.content ? field.content : field.desc}
      </Field>
    );
  }
};

const About = () => {
  const [fullName, setFullName] = useState({
    name: "fullName",
    content: "John Doe",
    desc: "Enter your full name",
    isEditing: false,
  });

  const [job, setJob] = useState({
    name: "job",
    content: "Software engineer",
    desc: "Enter your curront position",
    isEditing: false,
  });

  const [aboutDesc, setAboutDesc] = useState({
    name: "aboutDesc",
    content:
      "More than eight years of experience in the Software industry. Involved in product testing, management, and rollout in the direct telemarketing channel of the new products.",
    desc: "Enter A brief description about you",
    isEditing: false,
  });

  return (
    <Section className="section About">
      <div>
        {getFieldView(fullName, setFullName)}
        {getFieldView(job, setJob)}
        {getFieldView(aboutDesc, setAboutDesc)}
      </div>
      <Icon path={mdiAccount} className="about-pic" />
    </Section>
  );
};

export default About;
