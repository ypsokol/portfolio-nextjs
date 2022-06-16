import { PropsWithChildren, useState } from "react";
import { ModalContext } from "./context";

export const ModalProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const change = () => setIsOpen(!isOpen);

  return (
    <ModalContext.Provider value={{ isOpen, open, close, change }}>
      {children}
    </ModalContext.Provider>
  );
};
