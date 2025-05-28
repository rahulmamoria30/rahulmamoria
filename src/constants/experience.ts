import { Code, Server, Database, Wrench, Briefcase } from "lucide-react";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  logo: string;
}

export const sectionConfig = {
  id: "experience",
  className: "pb-24 space-y-6 scroll-mt-24",
  title: {
    icon: Briefcase,
    text: "Experience & Skills"
  }
};

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 70 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 50 }
    ]
  },
  {
    title: "System Design",
    icon: Server,
    skills: [
      { name: "OOPS(Java)", level: 80 },
      { name: "DBMS", level: 75 },
      { name: "Design Patterns", level: 85 }
    ]
  },
  {
    title: "Web Development",
    icon: Database,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Unit Testing", level: 85 },
      { name: "Spring Boot", level: 65 },
      { name: "MongoDB", level: 60 }
    ]
  },
  {
    title: "Certifications & Problem Solving",
    icon: Wrench,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Google Digital Leader", level: 90 }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Grid Dynamics",
    period: "Sept 2023 - Present",
    type: "Full-time",
    logo: "/images/grid-dynamics.png",
    description: [
      "Developed a scalable web platform to manage pet health campaigns (for example puppy weight check, dog poop scan, tooth scan) to enhance pet wellness tracking",
      "Designed and implemented reusable, scalable, and maintainable UI components using React, Vite, and Ant Design, ensuring a seamless user experience",
      "Built a campaign management system for easy creation, tracking, and monitoring of pet care campaigns, improving workflow automation",
      "Optimized application performance and reliability by writing unit tests with Vitest, ensuring high code quality and reducing regressions",
      "Developed an NPM package for reusable UI components to maintain consistency and accelerate development across projects",
      "Enhanced application responsiveness by following best UI/UX practices, ensuring smooth user interaction across devices"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Flyzy",
    period: "Jun 2023 - Aug 2023",
    type: "Internship",
    logo: "/images/flyzy.png",
    description: [
      "Integrated external APIs with MongoDB: Efficiently connected external APIs to MongoDB, optimizing data fetching and management processes",
      "Designed and implemented core application logic, database management, and API integrations to enhance back-end performance and streamline data handling",
      "Optimized database queries and indexing to improve data retrieval speed and reduce latency in API responses, ensuring a seamless user experience"
    ]
  }
]; 