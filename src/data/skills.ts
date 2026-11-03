import type { SkillCategory } from "@/types/common";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
      "API Integration",
    ].map((name, index) => ({ name, level: index < 8 ? "Proficient" : "Working Knowledge" })),
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs"].map((name) => ({
      name,
      level: "Working Knowledge",
    })),
  },
  {
    title: "Visual Design",
    skills: [
      "Figma",
      "Canva",
      "PowerPoint Presentation"
    ].map((name, index) => ({ name, level: index < 10 ? "Experienced" : "Working Knowledge" })),
  },
  {
    title: "Databases",
    skills: ["MongoDB"].map((name) => ({
      name,
      level: "Working Knowledge",
    })),
  },
  {
    title: "DevOps & Workflow",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Agile/Scrum", "VS Code", "Postman"].map((name) => ({
      name,
      level: name === "Git" || name === "GitHub" ? "Proficient" : "Working Knowledge",
    })),
  },
];

export const marqueeTech = [
  "HTML5",
  "Tailwind CSS",
  "React.js",
  "Next.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "GIT",
  "GitHub",
  "CI/CD",
  "Agile/Scrum",
  "VS Code",
  "Figma",
];
