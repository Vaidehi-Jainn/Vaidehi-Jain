# Vaidehi Jain Portfolio

Premium frontend developer portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Material UI, Framer Motion, GSAP, Lenis, Lucide React, and React Icons.

## Features

- Responsive dark-first portfolio homepage
- Dynamic project case study pages
- Data-driven projects, skills, experience, education, services, and navigation
- Loading screen, scroll progress, smooth scrolling, theme toggle, animated sections, technology marquee, and contact form validation
- SEO metadata, Open Graph metadata, sitemap, robots file, and custom 404 page

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Scripts

```bash
npm run build
npm run typecheck
npm run lint
```

## Content Updates

Most editable content lives in `src/data`.

- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Services and process: `src/data/services.ts`
- Navigation and social links: `src/data/navigation.ts`

## Folder Structure

```text
src/
  app/
    projects/
      [slug]/
        page.tsx
    globals.css
    layout.tsx
    page.tsx
    not-found.tsx
    robots.ts
    sitemap.ts
  components/
    common/
    layout/
    sections/
    ui/
  data/
  hooks/
  lib/
  services/
  types/
```

UI files use `.tsx`. Data, services, types, hooks, and utility files use `.ts` when they do not render JSX.

## Resume

Place the final resume PDF at:

```text
public/resume/Vaidehi Jain.pdf
```

## Environment Variables

Copy `.env.example` to `.env.local` and update placeholder URLs.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/vaidehi-jain
NEXT_PUBLIC_GITHUB_URL=https://github.com/Vaidehi-Jainn
NEXT_PUBLIC_PORTFOLIO_URL=https://your-portfolio-url.com
```
