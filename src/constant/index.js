import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  threeD,
  // Ben,
  ReactP,
  Grocery,
} from "../assets";
  import { FaDesktop, FaHammer, FaCartArrowDown } from "react-icons/fa";
  import { TbSpeakerphone } from "react-icons/tb";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "skills",
      title: "Skills"
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const skills = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  
  const projects = [
    {
      name: "JavaScript Projects",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Grocery,
      source_code_link: "https://github.com/",
      liveLink: "",
      live: false,
    },
    {
      name: "React Projects",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: ReactP,
      source_code_link: "https://github.com/",
      liveLink: "",
      live: false,
    },
    {
      name: "Ben Alden Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Frammer_Motion",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
      liveLink: "",
      live: true,
    },
    {
      name: "3D Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threeJs",
          color: "pink-text-gradient",
        },
      ],
      image: threeD,
      source_code_link: "https://github.com/",
      liveLink: "",
      live: true,
    },
  ];
  
  const services = [
    {
      icon: FaDesktop,
      title: "Web Designing",
      desc: "Creating visually appealing and functional websites, and the use of various design elements such as layout, color, typography, and graphics to create an aesthetically pleasing and user-friendly website. ",
    },
    {
      icon: FaHammer,
      title: "Web Development",
      desc: "Building and maintaining websites and web applications and the use of programming languages such as HTML, CSS, JavaScript, and other technologies to create interactive and dynamic websites",
    },
    {
      icon: TbSpeakerphone,
      title: "SEO",
      desc: "Optimizing website's content, structure, and code to improve its visibility and ranking on search engine results pages (SERPs). And also attract organic (non-paid) traffic to a website and increase its online visibility, leading to higher visibility.",
    },
    {
      icon: FaCartArrowDown,
      title: "Ecommerce",
      desc: "Online platforms that allow businesses to sell products or services to customers globally. initializing features such as product listings, shopping carts, payment gateways, and order management systems.",
    },
  ];
  export { skills, projects, services};