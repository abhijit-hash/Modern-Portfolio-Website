import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "C/C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind Css",
  "Express.js",
  "MongoDB",
  "React Redux",
  "Bootstrap-5",
  "MySQL",
  "Framer Motion",
  "Socket.io",
  "Power Bi"
] as const;

export const projectsData = [
    {
    title: "E-commerce App",
    description:
      "Developed a dynamic e-commerce platform with dynamic dasboard using the MERN Stack,Integrated Firebase for authentication and real-time database using MongoDB,Utilized Postman API for backend testing and validation, and Razorpay for secure payment processing, ensuring a smooth checkout experience for customers.",
    tags: ["React", "Node.js","Expressjs", "MongoDB", "Scss", "Typescript","Firebase","Redux"],
    imageUrl: "/portf-1.jpg",
  },
    {
    title: "Blog App",
    description:
      "Created a React application with client-side routing, HTTP requests and enhanced UI,Set up an Express.js server with MongoDB integration using mongoose,session management,Implemented CRUD operations for blog posts, user authentication for route protection, and connected frontend with backend to fetch and manage posts.",
    tags: ["React", "Node.js","Express.js", "MongoDB", "Javascript"],
    imageUrl: "/portf-2.png",
  },
      {
    title: "Chat App",
    description:
      "Developed a real-time chat application using React.js and Socket.io for communication between users,Implemented features like message broadcasting, and real-time updates.Designed and created a dynamic, responsive user interface with React.js.",
    tags: ["React.js", "Express.js", "Socket.io", "scss"],
    imageUrl: "/portf-3.png",
  },
        {
    title: "Portfolio",
    description:
      "Developed a dynamic project portfolio using React and Next.js, enhanced with Tailwind CSS for responsive design, Framer Motion for smooth animations, and integrated EmailJS for contact functionality. The portfolio showcases projects with an engaging, interactive user experience.",
    tags: ["React", "Next.js",  "Typescript", "Tailwind", "Framer Motion"],
    imageUrl: "/portf-4.jpg",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developement Intern at SYNC INTERN'S",
    location: "Remote",
    description:
      "As a full-stack developer at SYNC INTERN'S during my internship,I played a key role in API development,UI/UX design and website optimization using technologies like React.js,Node.js,Express.js,MongoDb,Next.js,Sass,Firebase, React Redux,Typescript.Engaging with real life problems,I gained valuable experience in backend development and API architecture and problem-solving.The diverse projects enhanced my web development perspective, contributing significantly to my professional growth.",
    icon: React.createElement(LuGraduationCap),
    date: "1st April 2023 - 1st May 2023",
  },
] as const;