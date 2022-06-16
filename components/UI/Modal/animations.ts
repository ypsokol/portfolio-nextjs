import { Variants } from "framer-motion";

export const animationState = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

export const dropIn: Variants = {
  [animationState.initial]: {
    y: "-100vh",
    opacity: 0,
  },
  [animationState.animate]: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  [animationState.exit]: {
    y: "100vh",
    opacity: 0,
  },
};
