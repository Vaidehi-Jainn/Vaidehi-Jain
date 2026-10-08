"use client";

import { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  const timeline = experience.flatMap((item) =>
    item.roles.map((role) => ({
      ...role,
      company: item.company,
      location: item.location,
    })),
  );

  return (
    <Section id="experience" eyebrow="Experience" title="Professional timeline." description="Where I have worked, the roles I have contributed to, and how I have grown as a frontend developer.">
      <div className="relative grid gap-5 before:absolute before:left-5 before:top-6 before:h-[calc(100%-3rem)] before:w-px before:bg-gradient-to-b before:from-primary before:via-accent before:to-secondary md:before:left-1/2">
        {timeline.map((item, index) => {
          const isOpen = open === index;

          return (
            <div key={`${item.company}-${item.title}`} className={`relative grid gap-5 md:grid-cols-2 ${index % 2 ? "" : "md:[&>div]:col-start-2"}`}>
              <span className="absolute left-0 top-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                <BriefcaseBusiness size={18} />
              </span>
              <GlassCard
                className="ml-14 md:ml-0"
                onMouseEnter={() => setOpen(index)}
                onMouseLeave={() => setOpen(null)}
                onFocus={() => setOpen(index)}
                onBlur={() => setOpen(null)}
              >
                <div tabIndex={0} className="w-full text-left outline-none">
                  <p className="text-sm font-semibold text-accent">
                    {item.period} · {item.duration}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{item.company}</p>
                  {item.location && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.location}</p>}
                </div>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                  <ul className="min-h-0 overflow-hidden space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((task) => (
                      <li key={task}>- {task}</li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
