import Image from "next/image";

import { CardContainer, CardContent } from "../../UI/Card";
import { Testimonial } from "./mock";

const Card = ({ name, description, image }: Testimonial) => {
  return (
    <CardContainer className="testimonial__card">
      <CardContent className="testimonial__comment">
        <div className="testimonial__img">
          <Image src={image} alt="" placeholder="blur" objectFit="fill" />
        </div>
        <div>
          <h3 className="testimonial__name">{name}</h3>
          <p className="testimonial__description">{description}</p>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
