"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import { FaBootstrap, FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import { SiCanvas, SiExpress, SiFigma, SiGit, SiGithubactions, SiHtml5, SiJavascript, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiNodedotjs, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Blocks, Brush, Code2, FileText, Globe2, MonitorSmartphone, Plug, RefreshCw, Users, Waypoints } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const skillIcons: Record<string, IconType | typeof Code2> = {
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "RESTful APIs": Plug,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  Bootstrap: FaBootstrap,
  "Responsive Design": MonitorSmartphone,
  "Component-Based Development": Blocks,
  "API Integration": Plug,
  "State Management": Waypoints,
  "Cross-Browser Compatibility": Globe2,
  Figma: SiFigma,
  Prototyping: Brush,
  "Responsive UI Design": MonitorSmartphone,
  "Adobe Photoshop": Brush,
  Canva: SiCanvas,
  Spline: Code2,
  "PowerPoint Presentation": FileText,
  Git: SiGit,
  GitHub: FaGithub,
  "GitHub Actions": SiGithubactions,
  "CI/CD": RefreshCw,
  "Agile/Scrum": Users,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  "VS Code": Code2,
  Postman: SiPostman,
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const skillListVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
};

const skillItemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.36, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].title);
  const category = skillCategories.find((item) => item.title === active) || skillCategories[0];

  return (
    <Section id="skills" eyebrow="Skills" title="Where clean code meets seamless user experiences." description="Practical tools and technologies, I use to design and build polished web experiences.">
      <div className="mb-6 flex flex-wrap gap-3">
        {skillCategories.map((item) => (
          <button key={item.title} onClick={() => setActive(item.title)} className={cn("rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5", active === item.title ? "border-primary bg-primary text-white shadow-glow" : "border-slate-200 bg-white/70 text-slate-700 hover:border-primary dark:border-white/10 dark:bg-white/10 dark:text-slate-200")}>
            {item.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={category.title}
          layout
          variants={skillListVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 8, transition: { duration: 0.16, ease: "easeOut" } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {category.skills.map((skill) => (
            <Reveal key={skill.name}>
              <motion.div
                layout
                variants={skillItemVariants}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ layout: { duration: 0.35, ease: smoothEase } }}
                className="group flex min-h-16 items-center gap-3 rounded-xl border border-slate-200 bg-white/65 px-4 py-3 shadow-sm backdrop-blur transition-colors duration-300 ease-out hover:border-primary/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.055] dark:hover:bg-white/[0.085]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-white">
                  {(() => {
                    const Icon = skillIcons[skill.name] || Code2;
                    return <Icon size={20} />;
                  })()}
                </span>
                <span className="font-display text-base font-semibold leading-5 text-slate-950 dark:text-white">{skill.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
