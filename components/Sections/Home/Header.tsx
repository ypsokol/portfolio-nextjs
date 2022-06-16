import Link from "next/link";

import { motion } from "framer-motion";
import { Sections } from "../../../constants/sections";

export const animation = {
  initial: "hidden",
  whileInView: "visible",
};
const headerVariants = {
  [animation.initial]: {
    opacity: 0,
    scale: 0.2,
    y: -100,
  },

  [animation.whileInView]: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = () => {
  return (
    <motion.div className="home__data" variants={headerVariants} {...animation}>
      <span className="home__greeting">Hello, I&apos;m</span>
      <h1 className="home__name">Ansel Klee</h1>
      <h3 className="home__education">Frontend Developer</h3>

      <div className="home__buttons">
        <Link href="" download>
          <a className="btn btn-outline">Download CV</a>
        </Link>
        <Link href={`#${Sections.about}`}>
          <a className="btn">About Me</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
