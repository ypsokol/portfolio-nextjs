import { HTMLInputTypeAttribute } from "react";

type Input = {
  label?: string;
  type?: HTMLInputTypeAttribute;
  textarea?: boolean;
  [x: string]: any;
};

const Input = ({ type = "text", label, textarea, ...props }: Input) => {
  return (
    <div
      className={`contact__form-container ${textarea && "contact__form-area"}`}
    >
      <label htmlFor="" className="contact__form-tag">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className="contact__form-input" />
      ) : (
        <input type={type} {...props} className="contact__form-input" />
      )}
    </div>
  );
};

export default Input;
