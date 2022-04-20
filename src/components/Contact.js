import { mdiEmail, mdiGithub, mdiLinkedin, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import Section from "./Section";

import { getFieldView } from "../utils";

const Contact = () => {
  const [email, setEmail] = useState({
    name: "email",
    icon: <Icon path={mdiEmail} size={1} />,
    content: "johndoe@gmail.com",
    desc: "Enter your email",
    isEditing: false,
  });

  const [phoneNumber, setPhoneNumber] = useState({
    name: "phoneNumber",
    icon: <Icon path={mdiPhone} size={1} />,
    content: "+1 234 56789",
    desc: "Enter your Phone Number",
    isEditing: false,
  });

  const [githubAccount, setGithubAccount] = useState({
    name: "githubAccount",
    icon: <Icon path={mdiGithub} size={1} />,
    content: "https://github.com/",
    desc: "Enter Your Github account",
    isEditing: false,
  });

  const [linkedInAccount, setLinkedInAccount] = useState({
    name: "linkedInAccount",
    icon: <Icon path={mdiLinkedin} size={1} />,
    content: "https://www.linkedin.com/",
    desc: "Enter your LinkedIn account",
    isEditing: false,
  });

  return (
    <Section className="section Contact">
      {[
        [email, setEmail],
        [phoneNumber, setPhoneNumber],
        [githubAccount, setGithubAccount],
        [linkedInAccount, setLinkedInAccount],
      ].map((field) => {
        return getFieldView(field[0], field[1]);
      })}
    </Section>
  );
};

export default Contact;
