import { mdiEmail, mdiGithub, mdiLinkedin, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Section from "./Section";

import { useField } from "../hooks";

const Contact = () => {
  const emailField = useField({
    name: "email",
    icon: <Icon path={mdiEmail} size={1} />,
    content: "johndoe@gmail.com",
    desc: "Enter your email",
    isEditing: false,
  });

  const phoneNumberField = useField({
    name: "phoneNumber",
    icon: <Icon path={mdiPhone} size={1} />,
    content: "+1 234 56789",
    desc: "Enter your Phone Number",
    isEditing: false,
  });

  const githubAccountField = useField({
    name: "githubAccount",
    icon: <Icon path={mdiGithub} size={1} />,
    content: "https://github.com/",
    desc: "Enter Your Github account",
    isEditing: false,
  });

  const linkedInAccountField = useField({
    name: "linkedInAccount",
    icon: <Icon path={mdiLinkedin} size={1} />,
    content: "https://www.linkedin.com/",
    desc: "Enter your LinkedIn account",
    isEditing: false,
  });

  return (
    <Section className="section Contact">
      {emailField}
      {phoneNumberField}
      {githubAccountField}
      {linkedInAccountField}
    </Section>
  );
};

export default Contact;
