import { mdiAccount } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Section from "./Section";

import { useField } from "../hooks";
import TextAreaField from "./TextAreaField";

const About = () => {
  const fullNameField = useField({
    name: "fullName",
    content: "John Doe",
    desc: "Enter your full name",
    isEditing: false,
  });

  const jobField = useField({
    name: "job",
    content: "Software engineer",
    desc: "Enter your curront position",
    isEditing: false,
  });

  const aboutDescField = useField({
    name: "aboutDesc",
    content:
      "More than eight years of experience in the Software industry. Involved in product testing, management, and rollout in the direct telemarketing channel of the new products.",
    desc: "Enter A brief description about you",
    isEditing: false,
    EditingFieldType: TextAreaField,
  });

  return (
    <Section className="section About">
      <div>
        {fullNameField}
        {jobField}
        {aboutDescField}
      </div>
      <Icon path={mdiAccount} className="about-pic" />
    </Section>
  );
};

export default About;
