import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navigation, socials } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-10 backdrop-blur dark:border-white/10 dark:bg-white/[0.035]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Vaidehi Jain</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Software Engineer</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {navigation.map((item) => (
              <Link className="text-sm text-slate-600 transition hover:text-primary dark:text-slate-300" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <Link key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-primary">
                {social.label}
              </Link>
            ))}
            <Link aria-label="Back to top" href="#home" className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <ArrowUp size={17} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
