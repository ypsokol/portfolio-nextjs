import { FaAward } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

export type About = {
  title: string;
  subtitle: string;
  icon: any;
};

export const about: About[] = [
  {
    title: "Experience",
    subtitle: "8 Years Working",
    icon: <FaAward className="about__icon" />,
  },
  {
    title: "Completed",
    subtitle: "48 + Projects",
    icon: <HiOutlineBriefcase className="about__icon" />,
  },
  {
    title: "Support",
    subtitle: "Online 24/7",
    icon: <BiSupport className="about__icon" />,
  },
];

export const description =
  "Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.";
