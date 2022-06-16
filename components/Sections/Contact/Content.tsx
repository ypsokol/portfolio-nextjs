import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const Content = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="contact__content">
      <h3 className="contact__title">{title}</h3>
      {children}
    </div>
  );
};

export default Content;
