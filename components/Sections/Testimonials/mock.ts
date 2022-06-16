import testimonial1 from "../../../public/images/testimonial1.png";
import testimonial2 from "../../../public/images/testimonial2.png";
import testimonial3 from "../../../public/images/testimonial3.png";

import { StaticImageData } from "next/image";

export type Testimonial = {
  image: StaticImageData;
  name: string;
  description: string;
};

export const testimonials: Testimonial[] = [
  {
    image: testimonial1,
    name: "Jhon Doe",
    description:
      "A really good job, all aspects of the project were \n" +
      "followed step by step and with good results.",
  },
  {
    image: testimonial2,
    name: "Paula Vusy",
    description:
      "A really good job, all aspects of the project were \n" +
      "followed step by step and with good results.",
  },
  {
    image: testimonial3,
    name: "Sara Cill",
    description:
      "A really good job, all aspects of the project were \n" +
      "followed step by step and with good results.",
  },
  {
    image: testimonial1,
    name: "",
    description:
      "A really good job, all aspects of the project were \n" +
      "followed step by step and with good results.",
  },
];
