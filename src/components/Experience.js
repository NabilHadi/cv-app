import { useState } from "react";
import Section from "./Section";
import uniqid from "uniqid";
import ExperienceGroup from "./ExperienceGroup";

const getNewExperienceGroup = () => {
  return {
    id: uniqid(),
    companyName: {
      name: "companyName",
      content: "",
      desc: "Enter Your company Name",
      isEditing: false,
    },
    positionTitle: {
      name: "positionTitle",
      content: "",
      desc: "Enter Your position Title",
      isEditing: false,
    },
    startDate: {
      name: "startDate",
      content: "",
      desc: "Enter Start Date",
      isEditing: false,
    },
    endDate: {
      name: "endDate",
      content: "",
      desc: "Enter End date",
      isEditing: false,
    },
    mainTasks: {
      name: "mainTasks",
      content: "",
      desc: "Enter your main tasks",
      isEditing: false,
    },
  };
};

export default function Experience() {
  const [experienceList, setExperienceList] = useState([
    {
      id: uniqid(),
      companyName: {
        name: "companyName",
        content: "PLANET BEACH",
        desc: "Enter Your company Name",
        isEditing: false,
      },
      positionTitle: {
        name: "positionTitle",
        content: "Spa Consultant",
        desc: "Enter Your position Title",
        isEditing: false,
      },
      startDate: {
        name: "startDate",
        content: "July 2009",
        desc: "Enter Start Date",
        isEditing: false,
      },
      endDate: {
        name: "endDate",
        content: "present",
        desc: "Enter End date",
        isEditing: false,
      },
      mainTasks: {
        name: "mainTasks",
        content: ["Sell retail and memberships to meet company sales goals"],
        desc: "Enter your main tasks",
        isEditing: false,
      },
    },
  ]);

  const handleAddExperience = () => {
    setExperienceList([...experienceList, getNewExperienceGroup()]);
  };

  return (
    <Section className="section Experience">
      <h2 className="sectionTitle">Experience</h2>
      {experienceList.map((exp) => {
        return (
          <ExperienceGroup
            key={exp.id}
            id={exp.id}
            companyName={exp.companyName}
            postionTitle={exp.positionTitle}
            startDate={exp.startDate}
            endDate={exp.endDate}
            mainTasks={exp.mainTasks}
          />
        );
      })}
      <button onClick={handleAddExperience} className="print-hide">
        Add
      </button>
    </Section>
  );
}
