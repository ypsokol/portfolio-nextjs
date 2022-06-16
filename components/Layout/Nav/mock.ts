import { Sections } from "../../../constants/sections";

export type Drawer = {
  title: string;
  link: string;
};

export const sections: Drawer[] = [
  {
    title: "Home",
    link: `#${Sections.home}`,
  },
  {
    title: "About",
    link: `#${Sections.about}`,
  },
  {
    title: "Skills",
    link: `#${Sections.skills}`,
  },
  {
    title: "Work",
    link: `#${Sections.work}`,
  },
  {
    title: "Contact",
    link: `#${Sections.contact}`,
  },
];
