import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  name: string;
  type: Type;
  description: Description[];
  images: Images[];
};

export type Projects = Project[];

export type Description = {
  title: string;
  subtitle: string;
};

export type Images = StaticImageData;

export type Type = "web" | "design";
