import {
	SectionContainer,
	SectionSubtitle,
	SectionTitle,
} from "../../UI/Section";
import Card from "./Card";

import { Sections } from "../../../constants/sections";
import { skills } from "./mock";

const Skills = () => {
	return (
		<SectionContainer id={Sections.skills}>
			<SectionSubtitle subtitle="My abilities" />
			<SectionTitle title="My Experience" />

			<div className="skills__container container grid">
				<Card title="Frontend Developer" skills={skills.frontend} />
				<Card title="Backend Developer" skills={skills.backend} />
			</div>
		</SectionContainer>
	);
};

export default Skills;
