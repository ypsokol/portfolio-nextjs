import { PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";

import { useModal } from "../../../context/modal/context";

import { CardActions, CardContainer, CardContent } from "../../UI/Card";

type Props = {
  title: string;
};

const Card = ({ title, children }: PropsWithChildren<Props>) => {
  const { isOpen, change } = useModal();

  return (
    <CardContainer>
      <CardContent>
        <h3 className="services__title">
          {title.split(" ").map((string, i) => (
            <p key={i}>{string}</p>
          ))}
        </h3>
        <CardActions title="See More" onClick={change} />

        <AnimatePresence>{isOpen && children}</AnimatePresence>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
