import { mdiAccount } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import Section from "./Section";

import { getFieldView } from "../utils";

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
        {[
          [fullName, setFullName],
          [job, setJob],
          [aboutDesc, setAboutDesc],
        ].map((field) => {
          return getFieldView(field[0], field[1]);
        })}
      </div>
      <Icon path={mdiAccount} className="about-pic" />
    </Section>
  );
};

export default About;
