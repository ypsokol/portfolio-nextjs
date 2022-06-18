import { MouseEvent, PropsWithChildren, useEffect } from "react";

import { motion } from "framer-motion";

import ModalBackdrop from "./ModalBackdrop";
import { animationState, dropIn } from "./animations";
import { useModal } from "../../../context/modal/context";

type Props = {
  className?: string;
};

const ModalContainer = ({
  className = "",
  children,
}: PropsWithChildren<Props>) => {
  const { close } = useModal();
  const handleClickOnModal = (e: MouseEvent<HTMLElement>) =>
    e.stopPropagation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal">
      <ModalBackdrop onClose={close} />
      <motion.div
        className={`modal-container ${className}`}
        onClick={handleClickOnModal}
        {...animationState}
        variants={dropIn}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ModalContainer;
