import { BriefcaseBusiness, Code2, Database, GitBranch, GraduationCap, Mail, MonitorSmartphone, Phone } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { education } from "@/data/education";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

const highlights = [
  {
    title: "Full Stack Development",
    description: "Building end-to-end web applications using the MERN stack with seamless integration.",
    Icon: Code2,
  },
  {
    title: "Responsive Design",
    description: "Building responsive, high-performance interfaces with React.js and Next.js using reusable components.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Version Control & CI/CD",
    description: "Managing code with Git and GitHub while streamlining deployment workflow",
    Icon: GitBranch,
  },
  {
    title: "Database Management",
    description: "Designing MongoDB schemas and optimizing data storage and retrieval.",
    Icon: Database,
  },
];

const profileDetails = [
  {
    label: "Email",
    value: "vaidehijain.work@gmail.com",
    href: "mailto:vaidehijain.work@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 8824633438",
    href: "tel:+91 8824633438",
    Icon: Phone,
  },
  {
    label: "Experience",
    value: "2 years",
    Icon: BriefcaseBusiness,
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From interface to database, I build the complete experience." description="I transform ideas and designs into complete web applications with intuitive interfaces and reliable backends.">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <GlassCard className="gradient-border h-full">
            <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Available for full stack opportunities and freelance work</div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              I&apos;m a Full-Stack Developer with 2 years of experience building scalable, production-ready web applications using the MERN stack. I specialize in developing responsive, high-performance interfaces, RESTful APIs, and efficient data-driven solutions using modern frontend and backend technologies. With experience across enterprise dashboards, B2B marketplaces, e-commerce platforms, and email automation tools, I focus on writing clean, modular, and maintainable code. I also bring working knowledge of Figma, visual design, and CI/CD workflows to bridge the gap between design and development. I&apos;m passionate about solving real-world problems, continuously learning, and building intuitive digital products that deliver seamless user experiences.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {profileDetails.map(({ label, value, href, Icon }) => {
                const content = (
                  <div className="rounded-xl border border-slate-200 bg-white/70 p-3 transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/10">
                    <Icon className="mb-3 text-primary" size={22} />
                    <p className="text-[0.68rem] font-semibold uppercase text-slate-500 dark:text-slate-400">{label}</p>
                    <p className="mt-1.5 whitespace-nowrap text-[0.72rem] font-semibold text-slate-950 dark:text-white sm:text-[0.65rem] md:text-xs lg:text-[0.65rem] xl:text-xs">{value}</p>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} aria-label={`${label}: ${value}`}>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </GlassCard>
        </Reveal>
        <div className="space-y-4">
          <Reveal>
            <GlassCard className="p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Education</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">{education.degree}</h3>
                  <p className="mt-1 text-base text-slate-700 dark:text-slate-200">{education.field}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{education.institution}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">{education.period}</span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-500">
                      {education.scoreLabel}: {education.score}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map(({ title, description, Icon }) => (
                <div key={title} className="group rounded-lg border border-slate-200 bg-white/60 p-4 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/90 dark:border-white/10 dark:bg-white/[0.045] dark:hover:bg-white/[0.075]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-6 text-slate-950 dark:text-white">{title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
