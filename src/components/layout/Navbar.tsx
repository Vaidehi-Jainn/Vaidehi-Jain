"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useThemeMode } from "@/components/layout/Providers";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const dark = mode === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = navigation.map((item) => (
    <Link key={item.href} onClick={() => setOpen(false)} className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-primary focus:outline focus:outline-2 focus:outline-accent dark:text-slate-200 dark:hover:text-white" href={item.href}>
      {item.label}
    </Link>
  ));

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className={cn("mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl transition", scrolled ? "border-white/15 bg-white/80 shadow-card dark:bg-ink/75" : "border-white/10 bg-white/45 dark:bg-white/[0.055]")}>
        <Link href="#home" className="flex items-center gap-3 rounded-full focus:outline focus:outline-2 focus:outline-accent">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 font-display text-sm font-bold text-white dark:bg-white dark:text-slate-950">VJ</span>
          <span className="hidden text-sm font-semibold text-slate-950 dark:text-white sm:block">Vaidehi Jain</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">{navLinks}</div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle dark and light mode" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/60 text-slate-950 transition hover:border-accent/60 dark:bg-white/10 dark:text-white">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="hidden sm:block">
            <MagneticButton href="/resume/Vaidehi%20Jain.pdf" className="py-2.5">
              <Download size={16} /> Resume
            </MagneticButton>
          </div>
          <button aria-label="Open navigation menu" onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/60 text-slate-950 lg:hidden dark:bg-white/10 dark:text-white">
            <Menu size={20} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ink/80 p-4 backdrop-blur-xl lg:hidden">
            <motion.div initial={{ y: -18 }} animate={{ y: 0 }} exit={{ y: -18 }} className="rounded-2xl border border-white/10 bg-white p-5 dark:bg-slate-950">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display font-semibold dark:text-white">Navigation</span>
                <button aria-label="Close navigation menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 dark:bg-white/10">
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-2">{navLinks}</div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
