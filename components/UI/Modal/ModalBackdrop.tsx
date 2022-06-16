import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
};

const ModalBackdrop = ({ onClose, children }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default ModalBackdrop;
