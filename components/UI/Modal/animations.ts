import { Variants } from "framer-motion";

export const animationState = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

export const dropIn: Variants = {
  [animationState.initial]: {
    y: "-100vh",
  },
  [animationState.animate]: {
    y: 0,
    transition: {
      duration: 0.9,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  [animationState.exit]: {
    y: "100vh",
    transition: {
      duration: 0.2,
    },
  },
};
