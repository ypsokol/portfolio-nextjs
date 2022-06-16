export type Skills = {
  frontend: Skill[];
  backend: Skill[];
};

export type Skill = {
  name: string;
  level: string;
};

export const skills: Skills = {
  frontend: [
    {
      name: "HTML",
      level: "Advanced",
    },
    {
      name: "CSS/SCSS",
      level: "Advanced",
    },
    {
      name: "JavaScript TypeScript",
      level: "Advanced",
    },
    {
      name: "Responsive Design",
      level: "Advanced",
    },
    {
      name: "Git",
      level: "Intermediate",
    },
    {
      name: "React-native",
      level: "Advanced",
    },

    // {
    //   name: "React/Next.js",
    //   level: "Advanced",
    // },
    // {
    //   name: "React/Next.js",
    //   level: "Advanced",
    // },
  ],
  backend: [
    {
      name: "Nodejs",
      level: "Intermediate",
    },
    {
      name: "Express",
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
    },
    {
      name: "Firebase",
      level: "Advanced",
    },
    {
      name: "Nest.js",
      level: "Basic",
    },
  ],
};
