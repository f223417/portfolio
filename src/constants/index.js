import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  // Make sure these imports match what's actually exported from assets/index.js
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  typescript,
  gsap,
  framer,
  // These are defined as constants in assets/index.js
  python,
  csharp,
  assembly,
  // Project images
  gearXpert,
  project2,
  project3,
  // New project images
  senseminder,
  wave,
  flappybird,
  snakegame,
  lms,
  timetable,
  // Testimonial images
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Engineer",
    icon: web, // Replace with appropriate icon
  },
  {
    title: "Cloud Engineer",
    icon: mobile, // Replace with appropriate icon
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: "Assembly",
    icon: assembly,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
];

const experiences = [
  {
    title: "Cloud Engineer",
    company_name: "Freelance",
    icon: tekisky, // Replace with appropriate icon
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Designing and implementing cloud infrastructure solutions on AWS for various clients.",
      "Building and deploying serverless applications using AWS Lambda, API Gateway, and DynamoDB.",
      "Creating CI/CD pipelines for automated testing and deployment of cloud resources.",
      "Optimizing cloud costs while maintaining high availability and performance standards.",
    ],
  },
  {
    title: "ML Engineer",
    company_name: "Freelance",
    icon: tekisky, // Replace with appropriate icon
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Developing machine learning models for image recognition, natural language processing, and predictive analytics.",
      "Implementing and fine-tuning neural networks using TensorFlow and PyTorch frameworks.",
      "Processing and analyzing large datasets for training accurate machine learning models.",
      "Deploying ML models to production environments with monitoring and performance optimization.",
    ],
  },
  {
    title: "SenseMinder Project Lead",
    company_name: "Personal Project",
    icon: tekisky, // Replace with appropriate icon
    iconBg: "#383E56",
    date: "Mar 2024 - Dec 2024",
    points: [
      "Architected and built a cloud-based IoT platform using AWS services including EC2, S3, and Lambda.",
      "Developed RESTful APIs with Node.js to interface with IoT devices and frontend applications.",
      "Created data processing pipelines using Python for real-time analytics and visualization.",
      "Integrated the backend with a React frontend for comprehensive user dashboard experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "SenseMinder",
    description:
      "A cloud-based IoT platform built on AWS that enables users to rent smart sensors for home and business monitoring. Features real-time analytics, customizable alerts, and comprehensive dashboard for device management.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: senseminder,
    source_code_link: "https://github.com/",
  },
  {
    name: "Wave",
    description:
      "A secure P2P chatting application with end-to-end encryption, real-time messaging, file sharing capabilities, and customizable user profiles. Designed for privacy-focused communications with minimal data storage.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: wave,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flappy Bird",
    description:
      "A recreation of the classic Flappy Bird game using PyGame. Features smooth physics, progressively increasing difficulty, score tracking, and customizable bird characters with optimized collision detection.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyGame",
        color: "green-text-gradient",
      },
      {
        name: "Game Development",
        color: "pink-text-gradient",
      },
    ],
    image: flappybird,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snake Game",
    description:
      "A classic Snake game implemented in Assembly language. Features pixel-perfect collision detection, increasing speed as the game progresses, and efficient memory management using low-level programming techniques.",
    tags: [
      {
        name: "Assembly",
        color: "blue-text-gradient",
      },
      {
        name: "Low-level",
        color: "white-text-gradient",
      },
      {
        name: "Game Development",
        color: "pink-text-gradient",
      },
    ],
    image: snakegame,
    source_code_link: "https://github.com/",
  },
  {
    name: "Learning Management System",
    description:
      "A comprehensive LMS built with C# and .NET framework. Includes course creation, student enrollment, assignment submission, grade tracking, and integrated discussion forums with real-time notifications.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/",
  },
  {
    name: "University Timetable System",
    description:
      "An automated timetable generation system for universities built with Node.js. Features conflict resolution algorithms, resource allocation optimization, and customizable constraints with a user-friendly interface.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: timetable,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
