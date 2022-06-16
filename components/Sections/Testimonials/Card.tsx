import { CardContainer, CardContent } from "../../UI/Card";
import { Testimonial } from "./mock";
import Image from "next/image";

const Card = ({ name, description, image }: Testimonial) => {
  return (
    <CardContainer className="testimonial__card">
      <CardContent>
        <div className="testimonial__img">
          <Image src={image} alt="" />
        </div>
        <h3 className="testimonial__name">{name}</h3>
        <p className="testimonial__description">{description}</p>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
