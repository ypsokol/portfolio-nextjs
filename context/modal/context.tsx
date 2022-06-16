import { createContext, useContext } from "react";

export type Context = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  change: () => void;
};

export const ModalContext = createContext<Context>({
  isOpen: false,
  open: () => undefined,
  close: () => undefined,
  change: () => undefined,
});

export const useModal = () => useContext<Context>(ModalContext);
