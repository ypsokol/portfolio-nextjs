import { FC } from "react";

type Props = {};

const title = "loading something cool";

const Fallback = (props: Props) => {
  return (
    <div className="circle__container">
      <h2 className="circle__text">
        {title.split("").map((letter, i) => (
          <span key={i} style={{ transform: `rotate(${i * 16}deg)` }}>
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Fallback;
