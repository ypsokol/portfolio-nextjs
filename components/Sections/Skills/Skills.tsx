import { SectionContainer, SectionHeader } from "../../UI/Section";
import Card from "./Card";

import { Sections } from "../../../constants/sections";
import { skills } from "./mock";

const Skills = () => {
  return (
    <SectionContainer id={Sections.skills}>
      <SectionHeader title="My Experience" subtitle="My abilities" />

      <div className="skills__container container grid">
        <Card title="Frontend Developer" skills={skills.frontend} />
        <Card title="Backend Developer" skills={skills.backend} />
      </div>
    </SectionContainer>
  );
};

export default Skills;
