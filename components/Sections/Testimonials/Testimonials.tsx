import { SectionContainer, SectionHeader } from "../../UI/Section";
import { Sections } from "../../../constants/sections";
import { testimonials } from "./mock";
import Card from "./Card";

const Testimonials = () => {
  return (
    <SectionContainer id={Sections.testimonials}>
      <SectionHeader title="Reviews" subtitle="Some of them can describe me" />

      <div className="testimonial__container container">
        <div>
          {testimonials.map((testimonial, index) => (
            <Card key={index} isEven={index % 2 === 0} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
