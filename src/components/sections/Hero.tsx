"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import { socials } from "@/data/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";

const roles = ["MERN Stack Developer", "React.js Developer", "Next.js Developer", "Node.js Developer"];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-intro", { opacity: 0, y: 28, duration: 0.9, stagger: 0.12, ease: "power3.out" });
      gsap.to(".float-tech", { y: -14, repeat: -1, yoyo: true, duration: 2.4, stagger: 0.2, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="hero-intro mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur dark:bg-white/10 dark:text-cyan-100">
            <Sparkles size={16} /> Full Stack Developer
          </p>
          <h1 className="hero-intro font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Vaidehi Jain
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              crafting modern digital experiences.
            </span>
          </h1>
          <div className="hero-intro mt-5 h-8 overflow-hidden text-lg font-semibold text-primary dark:text-cyan-200">
            <motion.div animate={{ y: roles.map((_, index) => `${index * -2}rem`) }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}>
              {roles.map((role) => (
                <p key={role} className="h-8">{role}</p>
              ))}
            </motion.div>
          </div>
          <p className="hero-intro mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I build responsive, scalable, extensible and high-performance web applications using the MERN stack, combining React and Next.js with Node.js, Express.js and MongoDB to deliver seamless end-to-end experiences.
          </p>
          <div className="hero-intro mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">View My Work <ArrowRight size={16} /></MagneticButton>
            <MagneticButton href="/resume/Vaidehi%20Jain.pdf" variant="ghost" target="_blank" rel="noopener noreferrer">Download Resume</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Contact Me</MagneticButton>
          </div>
          <div className="hero-intro mt-8 flex gap-3">
            {socials.map(({ label, href }) => {
              return (
                <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/60 text-slate-800 transition hover:-translate-y-1 hover:border-accent/60 dark:bg-white/10 dark:text-white">
                  {label === "LinkedIn" && <FaLinkedin size={18} />}
                  {label === "GitHub" && <FaGithub size={18} />}
                  {label === "Email" && <Mail size={18} />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <GlassCard className="gradient-border relative overflow-hidden p-5">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="rounded-xl bg-slate-950 p-5 font-mono text-sm text-slate-200">
              <p><span className="text-cyan-300">const</span> developer = &#123;</p>
              <p className="pl-4">name: <span className="text-emerald-300">&quot;Vaidehi Jain&quot;</span>,</p>
              <p className="pl-4">focus: <span className="text-emerald-300">&quot;Full Stack Development&quot;</span>,</p>
              <p className="pl-4">stack: [<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;MongoDB&quot;</span>],</p>
              <p className="pl-4">designSense: <span className="text-purple-300">true</span></p>
              <p>&#125;;</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["End-to-End Development", "Authentication & Authorization", "API Integration", "Performance Optimization"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-slate-950/5 p-3 text-sm font-medium text-slate-700 dark:bg-white/5 dark:text-slate-200">{item}</div>
              ))}
            </div>
          </GlassCard>
          <div title="React.js" className="float-tech absolute -left-3 top-12 grid h-14 w-14 place-items-center rounded-2xl bg-white text-sky-500 shadow-card"><FaReact size={26} aria-label="React.js" /></div>
          <div title="Next.js" className="float-tech absolute -right-2 top-24 grid h-14 w-14 place-items-center rounded-2xl bg-white text-black shadow-card"><SiNextdotjs size={25} aria-label="Next.js" /></div>
          <div title="MongoDB" className="float-tech absolute bottom-20 -left-4 grid h-14 w-14 place-items-center rounded-2xl bg-white text-green-600 shadow-card"><SiMongodb size={26} aria-label="MongoDB" /></div>
          <div title="GitHub" className="float-tech absolute -bottom-16 left-28 grid h-14 w-14 place-items-center rounded-2xl bg-white text-black shadow-card"><FaGithub size={26} aria-label="GitHub" /></div>
          <div title="Node.js" className="float-tech absolute bottom-4 right-10 grid h-14 w-14 place-items-center rounded-2xl bg-white text-green-600 shadow-card"><SiNodedotjs size={24} aria-label="Node.js" /></div>
          <div title="Express.js" className="float-tech absolute right-24 top-0 grid h-14 w-14 place-items-center rounded-2xl bg-white text-black shadow-card"><SiExpress size={24} aria-label="Express.js" /></div>
        </div>
      </div>
    </section>
  );
}
