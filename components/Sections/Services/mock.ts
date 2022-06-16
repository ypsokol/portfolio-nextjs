export type Service = {
  title: string;
  description: string;
  list: string[];
};

export const services: Service[] = [
  {
    title: "Frontend Developer",
    description:
      "Providing quality work to clients and companies. I have many areas of responsibility, but the main are: ",
    list: [
      "Creating web and mobile applications",
      "Maintaining, optimizing, troubleshooting, and improving websites",
      "Implementation of apps and landing pages from concept through deployment",
      "Code reviewing your project and ideas",
      "Organizing your secret desires into a working code that brings you income",
      "Assistance with the selection of the necessary technologies to realize your goals",
    ],
  },
  {
    title: "Backend Developer",
    description: "Sufficient level of knowledge to support your product",
    list: [
      "Building scalable nodejs systems or support your own",
      "Creating or modifying you API",
    ],
  },
  {
    title: "UI/UX Designer",
    description: "...",
    list: ["Adding zest to your design with meticulous attention to details"],
  },
];
