import emailjs from "@emailjs/browser";
import { Form } from "./hooks/useForm";

export const sendEmail = async ({ name, description, email }: Form) => {
  await emailjs.send(
    process.env.SERVICE_ID as string,
    process.env.TEMPLATE_ID as string,
    {
      name,
      email,
      description,
    },
    process.env.PUBLICK_KEY
  );
};
