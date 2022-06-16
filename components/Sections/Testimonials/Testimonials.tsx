import {
	SectionContainer,
	SectionSubtitle,
	SectionTitle,
} from "../../UI/Section";
import { Sections } from "../../../constants/sections";
import { testimonials } from "./mock";
import Card from "./Card";

const Testimonials = () => {
	return (
		<SectionContainer id={Sections.testimonials}>
			<SectionSubtitle subtitle="My clients say" />
			<SectionTitle title="Testimonials" />

			<div className="testimonial__container container">
				<div>
					{testimonials.map((testimonial, index) => (
						<Card key={index} {...testimonial} />
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default Testimonials;
