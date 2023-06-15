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
  Ben,
  Grocery,
  ReactNative,
  patrix,
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
        "This is a collection of simple JavaScript projects that I have worked on, it includes a Grocery List, a React Accordion and so on.",
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
      source_code_link: "https://github.com/OlamidotunIY/JavaScript_Project",
      liveLink: "",
      live: false,
    },
    {
      name: "React Native Projects",
      description:
        "This is a collection of React Native projects that I have worked on, it includes a mobile app for a restaurant(RUNU APP)",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: ReactNative,
      source_code_link: "https://github.com/OlamidotunIY/ReactNative",
      liveLink: "",
      live: false,
    },
    {
      name: "Ben Alden Portfolio",
      description:
        "This is a personal portfolio website that allows users to view the services offered, and Project Templates. it was built using React, Tailwind, and Framer Motion.",
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
      image: Ben,
      source_code_link: "https://github.com/OlamidotunIY/ben-aiden_portfolio-website",
      liveLink: "https://ben-aiden-portfolio-website.vercel.app",
      live: true,
    },
    {
      name: "3D Portfolio",
      description:
        "This is a 3D personal portfolio website that allows users to view the services offered, and Work Timeline. it was built using React, Tailwind, and threeJs.",
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
      source_code_link: "https://github.com/OlamidotunIY/3D_portfolio_website",
      liveLink: "https://3-d-portfolio-website-eight.vercel.app",
      live: true,
    },
    {
      name: "Patrix Clone",
      description:
        "This project is a clone of the Patrix website. It is a portfolio website that allows users to view the services offered by the company. it was built using HTML, CSS, and Bootstrap.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: patrix,
      source_code_link: "https://github.com/OlamidotunIY/3D_portfolio_website",
      liveLink: "https://patrick-clone.netlify.app",
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
      icon: FaHammer,
      title: "Mobile Development",
      desc: "Building and maintaining mobile applications and the use of programming languages such as React Native, JavaScript, and other technologies to create interactive and dynamic mobile applications",
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