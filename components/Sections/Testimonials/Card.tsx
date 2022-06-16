import Image from "next/image";

import { motion } from "framer-motion";

import { CardContainer, CardContent } from "../../UI/Card";
import { Testimonial } from "./mock";

export const animation = {
  initial: "hidden",
  whileInView: "visible",
};
const testimonialVariants = (isEven: boolean) => ({
  [animation.initial]: {
    opacity: 0,
    scale: 0.2,
    x: isEven ? 100 : -100,
  },

  [animation.whileInView]: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
});

const Card = ({
  name,
  description,
  image,
  isEven,
}: Testimonial & { isEven: boolean }) => {
  return (
    <motion.div variants={testimonialVariants(isEven)} {...animation}>
      <CardContainer className="testimonial__card">
        <CardContent>
          <div className="testimonial__img">
            <Image src={image} alt="" placeholder="blur" />
          </div>
          <h3 className="testimonial__name">{name}</h3>
          <p className="testimonial__description">{description}</p>
        </CardContent>
      </CardContainer>
    </motion.div>
  );
};

export default Card;
