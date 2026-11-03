import type { ElementType } from "react";
import { Infinity, Users } from "lucide-react";
import { FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiExpress, SiGit, SiMongodb, SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { marqueeTech } from "@/data/skills";

const icons: Record<string, ElementType> = {
  HTML5: FaHtml5,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Express.js": SiExpress,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  GIT: SiGit,
  GitHub: FaGithub,
  "CI/CD": Infinity,
  "Agile/Scrum": Users,
  Figma: FaFigma,
  "VS Code": VscCode,
};

export function TechnologyMarquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="border-y border-slate-200/70 bg-white/50 py-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.035]">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {items.map((tech, index) => {
            const Icon = icons[tech];
            return (
              <div key={`${tech}-${index}`} className="flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-100">
                <Icon className="text-primary" size={19} />
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
