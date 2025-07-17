import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/pulsarx.inc/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://web.facebook.com/mlk.ahmd.585443/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },

] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Flutter",
    image: "flutter.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "PuslarX Software Solutions",
    description:
    ('Pulsar X is a cutting-edge developer portfolio website built using Next.js framework and styled with Tailwind CSS for optimal performance and modern aesthetics. The portfolio serves as a comprehensive showcase of technical skills, featured projects, and demonstrates expertise in creating sleek, responsive web applications. Designed with an innovative space-inspired theme that reflects both creative vision and technical precision in web development. The platform goes beyond traditional portfolios by providing an immersive experience that tells the story of a developers professional journey and growth. Pulsar X represents not just a collection of work, but a testament to passion for web development and commitment to delivering exceptional user experiences.'),
    image: "/projects/project-1.png",
    link: "https://my-pulsarx-project.vercel.app/",
  },
  {
    title: "Rent Ease Mobile Application",
    description:
    ('A comprehensive rental management platform that allows property owners to post new rental listings for homes, apartments, and commercial stores with real-time data synchronization. The application features Firebase authentication system to ensure secure user access and data encryption for all sensitive information. Real-time data is stored in the cloud database and dynamically fetched to display updated listings on the home screen instantly. Users can browse through available properties with live updates on availability, pricing, and property details. The system provides a seamless, secure experience for both property owners posting listings and tenants searching for rental properties'),
    image: "/projects/project-2.png",
    link: "https://github.com/ahmaddii/Rent-Ease",
  },
  {
    title: "Digital Nexus Buissnes Solutions",
    description:
    ('A comprehensive recruitment management system designed specifically for software companies to streamline their hiring process and solve job recruitment challenges. The Nexus solution provides end-to-end functionality for posting job openings, managing candidate applications, and tracking the entire recruitment workflow. Built with a robust backend infrastructure using MySQL database and PHP server-side scripting to handle all data storage and processing needs seamlessly. The system enables efficient candidate screening, interview scheduling, and applicant tracking with real-time updates and secure data management. This integrated platform significantly reduces recruitment time and improves hiring efficiency for software companies while maintaining organized candidate records and streamlined communication.'),
    image: "/projects/project-3.png",
    link: "https://digitalnexuss.netlify.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/ahmaddii",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/pulsarx.inc/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "malikahmad6666666@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/ahmaddii",
};
