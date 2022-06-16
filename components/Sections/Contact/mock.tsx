import { BiMailSend } from "react-icons/bi";
import { RiMessengerLine, RiTelegramLine } from "react-icons/ri";

export const contacts = [
  {
    title: "Email",
    subtitle: "madnseries@gmail.com",
    link: "mailto:madnseries@gmail.com",
    icon: <BiMailSend className="contact__card-icon" />,
  },
  {
    title: "Telegram",
    subtitle: "@ypsokol",
    link: "https://t.me/ypsokol",
    icon: <RiTelegramLine className="contact__card-icon" />,
  },
  {
    title: "Messenger",
    subtitle: "user.fb123",
    link: "",
    icon: <RiMessengerLine className="contact__card-icon" />,
  },
];
