import {
    mobile,
    backend,
    creator,
    web,
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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    bomberman,
    HPDBMS,
    algorithms,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Linux Enthusiast",
      icon: backend,
    },
    {
      title: "Shell Scripting Wizard",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js",
      company_name: "None",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - present",
      points: [
        "Developing a project on Tezos blockchain for the Tez Azia Hackathon using React.js, SmartPy, Taquito and other technologies.",
        "Developed a single page web application for an institute/orginization.",
        "Making portfolio with React.js.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "None",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "At Nucleon, IIT Jammu",
      ],
    },
    {
      title: "Social Media Head",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2022 - June 2023",
      points: [
        "At IUCEE - Student Chapter, MIET Jammu",
      ], 
    },
    {
      title: "Java Script",
      company_name: "none",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2022 - Oct 2022",
      points: [
        "Developing a bomberman man game using and other related technologies.",
        "Creating a backend server with Java Springboot.",
      ],
    },
    {
      title: "Python",
      company_name: "none",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2022 - May 2022",
      points: [
        "Created My First Web App with Python and Flask",
        "Creating an online platform for coder to connect with each other.",
        "Learning OOPS data structure."
      ],
    },
    {
      title: "Linux/Ubuntu",
      company_name: "none",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - March 2022",
      points: [
        "Introduction to Shell Scripting.",
        "Developed a linux based simulator that simulates the functions of page replacement algorithms.",
      ],
    },
    {
      title: "Data Structure",
      company_name: "none",
      icon: meta,
      iconBg: "#383E56",
      date: "June 2021 - Oct 2022",
      points: [
        "Effectively used fundamental data structures like arrays, linked lists, and stacks.",
        "Implemented advanced data structures such as trees, graphs.",
      ],
    },
    
    {
      title: "Scratch",
      company_name: "none",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - April 2021",
      points: [
        "Learning the basics of C programming.",
        "Creating a simple game using Scratch.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Tao Làm được",
      name: "Quang",
      designation: "BE Developer",
      company: "pencil",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Tin chuẩn chưa anh",
      name: "Phúc",
      designation: "FE Developer",
      company: "minecraft",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Tui nấu được",
      name: "Khang",
      designation: "Fullstack Developer",
      company: "Self Employed",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bomberman",
      description:
        "A Java swing game that is inspired by the classic Bomberman game.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Java-Swing",
          color: "green-text-gradient",
        },
      ],
      image: bomberman,
      source_code_link: "https://github.com/tpSpace/Bomberman-Adventure?organization=tpSpace&organization=tpSpace",
    },
    {
      name: "Hospitals DBMS",
      description:
        "Web application that allows users to book appointments with doctors, and allows doctors to manage their patients.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: HPDBMS,
      source_code_link: "https://github.com/tpSpace/Hospital-DBMS",
    },
    {
      name: "Algorithms Visualizer",
      description:
        "A simple web application that visualizes some of the most popular algorithms.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: algorithms,
      source_code_link: "https://github.com/tpSpace/Algorithms-Visualizer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };