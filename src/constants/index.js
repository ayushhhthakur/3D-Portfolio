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
      title: "CTF Player",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js",
      company_name: "None",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2022 - present",
      points: [
        "Developing a project for the database course using React.js and other related technologies.",
        "Collaborating with a team to make an app with React Native.",
        "Making portfolio with React.js.",
      ],
    },
    {
      title: "Java",
      company_name: "none",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Feb 2023",
      points: [
        "Developing a bomberman man game using and other related technologies.",
        "Creating a backend server with Java Springboot.",
      ],
    },
    {
      title: "Pascal",
      company_name: "none",
      icon: shopify,
      iconBg: "#383E56",
      date: "jun 2016 - Jan 2018",
      points: [
        "Printing hello world using Pascal.",
        "Creating a simple game using Pascal.",
        "Learning algorithm and data structure."
      ],
    },
    {
      title: "Scratch",
      company_name: "none",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Jun 2016",
      points: [
        "Learning the basics of programming.",
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