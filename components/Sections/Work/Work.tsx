import {
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../UI/Section";
import Card from "./Card";

import { Sections } from "../../../constants/sections";
import { projectsPart } from "./mock";
import { ModalProvider } from "../../../context/modal/provider";

const Work = () => {
  return (
    <SectionContainer id={Sections.work}>
      <SectionSubtitle subtitle="Resent Works" />
      <SectionTitle title="My Portfolio" />

      <div className="work__container container grid">
        {projectsPart.map((project, index) => (
          <ModalProvider key={index}>
            <Card
              image={project.image}
              name={project.name}
              demo={project.demo}
              github={project.github}
            />
          </ModalProvider>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Work;
