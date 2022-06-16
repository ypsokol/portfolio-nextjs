import { Projects } from "../../../types/projects";

import work1 from "../../../public/images/work1.jpg";
import work2 from "../../../public/images/work2.jpg";
import work3 from "../../../public/images/work3.jpg";
import work4 from "../../../public/images/work4.jpg";
import work5 from "../../../public/images/work5.jpg";

import ElecarImg from "../../../public/images/Elecar1.jpg";

export const projects: Projects = [
  {
    id: "project0",
    name: "Electronic car store",
    type: "web",
    images: [ElecarImg],
    demo: "https://electronic-cars-store.vercel.app/",
    github: "https://github.com/ypsokol/electronic-cars-store",
    description: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
  },
  {
    id: "project1",
    name: "Projects Name",
    type: "web",
    images: [work1],
    description: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
  },
  {
    id: "project2",
    name: "Projects Name",
    type: "web",
    images: [work2],
    description: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
  },
  {
    id: "project3",
    name: "Projects Name",
    type: "web",
    images: [work3],
    description: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
  },
  {
    id: "project4",
    name: "Projects Name",
    type: "web",
    images: [work4],
    description: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
  },
  {
    id: "project5",
    name: "Projects Name",
    type: "web",
    images: [work5],
    description: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
  },
];

export const projectsPart = projects.map((item) => ({
  id: item.id,
  name: item.name,
  type: item.type,
  demo: item.demo,
  github: item.github,
  image: item.images[0],
}));
