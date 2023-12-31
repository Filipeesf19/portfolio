import { nanoid } from "nanoid";
import { ReactNode } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

interface Link {
  id: string;
  href: string;
  text: string;
}

export const links: Link[] = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

interface Skill {
  id: string;
  title: string;
  icon: ReactNode;
  text: string;
}

export const skills: Skill[] = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

interface Project {
  id: string;
  img: string;
  url: string;
  github: string;
  title: string;
  text: string;
}

export const projects: Project[] = [
  {
    id: nanoid(),
    img: "src/assets/PYRT.JPG",
    url: "https://pyrt.netlify.app/",
    github: "https://github.com/Filipeesf19/PYRT",
    title: "PYRT",
    text: "A app that will help you plan your meals, shopping list and aid you during cooking.",
  },
  {
    id: nanoid(),
    img: "src/assets/PYLT.JPG",
    url: "https://pylt.netlify.app/",
    github: "https://github.com/Filipeesf19/PYLT",
    title: "PYLT",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
