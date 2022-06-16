import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "../sendEmail";

export type Form = {
  name: string;
  email: string;
  description: string;
};

type ChangeType = "name" | "email" | "description";
const initialValues: Form = {
  name: "",
  email: "",
  description: "",
};

const UseForm = () => {
  const [state, setState] = useState<Form>(initialValues);

  const handleOnChange =
    (type: ChangeType) => (e: ChangeEvent<HTMLInputElement>) => {
      return setState({ ...state, [type]: e.target.value });
    };

  const handeOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, description } = state;

    const isValidEmail = () => {
      const regEmail = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
      return regEmail.test(email);
    };
    if (name && description && isValidEmail()) {
      await sendEmail({ name, email, description });
      return setState(initialValues);
    }
    return console.log("error");
  };

  return { state, handeOnSubmit, handleOnChange };
};

export default UseForm;
