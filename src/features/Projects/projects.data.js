import ecommerceImage from "../../assets/projects/nextjs.jpeg";
import automationImage from "../../assets/projects/reactjs.png";
import portfolioImage from "../../assets/projects/reactjs.png";

const projectsData = [
  {
    title: "Used Car Market Place",
    category: "Frontend Developement",
    description:
      "A modern e-commerce experience focused on responsive interfaces, product discovery and seamless user interactions.",
    technologies: ["Next", "TypeScript" , "Shad CN"],
    image: ecommerceImage,
  },

  {
    title: "Smart Automation",
    category: "Frontend Developement",
    description:
      "A web-based automation solution designed to simplify repetitive tasks and make automation accessible to non-technical users.",
    technologies: ["React"],
    image: automationImage,
  },

  {
    title: "Modern Portfolio",
    category: "Web Development",
    description:
      "A responsive personal portfolio built with a modern component-based architecture, reusable UI components and theme support.",
    technologies: ["React", "JavaScript", "CSS"],
    image: portfolioImage,
  },
];

export default projectsData;