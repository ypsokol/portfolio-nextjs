import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
};

const animation = {
  initial: "hidden",
  whileInView: "visible",
};

const headerVariants = {
  [animation.initial]: {
    opacity: 0.6,
    x: -50,
  },

  [animation.whileInView]: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <motion.div
      variants={headerVariants}
      {...animation}
      className="section__header container"
    >
      <h2 className={`section__title container`}>{title}</h2>
      <span className={`section__subtitle container`}>{subtitle}</span>
    </motion.div>
  );
};

export default SectionHeader;
