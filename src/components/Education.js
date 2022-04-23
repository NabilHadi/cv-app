import { useState } from "react";
import EducationGroup from "./EducationGroup";
import Section from "./Section";
import uniqid from "uniqid";

const getNewEducationGroup = () => {
  return {
    id: uniqid(),
    schoolName: {
      name: "schoolName",
      content: "",
      desc: "Enter your School Name",
      isEditing: false,
    },
    titleOfStudy: {
      name: "titleOfStudy",
      content: "",
      desc: "Enter your title of study",
      isEditing: false,
    },
    dateOfStudy: {
      name: "dateOfStudy",
      content: "",
      desc: "Enter your date of Study",
      isEditing: false,
    },
  };
};

export default function Education() {
  const [educationList, setEducationList] = useState([
    {
      id: uniqid(),
      schoolName: {
        name: "schoolName",
        content: "UNIVERSITY OF MINNESOTA",
        desc: "Enter your School Name",
        isEditing: false,
      },
      titleOfStudy: {
        name: "titleOfStudy",
        content: "College of Design",
        desc: "Enter your title of study",
        isEditing: false,
      },
      dateOfStudy: {
        name: "dateOfStudy",
        content: "May 2011",
        desc: "Enter your date of Study",
        isEditing: false,
      },
    },
  ]);

  const handleAddSchool = () => {
    setEducationList([...educationList, getNewEducationGroup()]);
  };

  return (
    <Section className="section Education">
      <h2 className="sectionTitle">Education</h2>
      {educationList.map((edu) => {
        return (
          <EducationGroup
            key={edu.id}
            id={edu.id}
            schoolName={edu.schoolName}
            titleOfStudy={edu.titleOfStudy}
            dateOfStudy={edu.dateOfStudy}
          />
        );
      })}
      <button onClick={handleAddSchool} className="print-hide">
        Add
      </button>
    </Section>
  );
}
