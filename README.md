# Soliman Portfolio

A clean, responsive portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, HeroUI, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. On Acode/Android, use:

```bash
npm run dev -- --hostname 127.0.0.1
```

## Project structure

- `src/app/` — App Router pages and project detail route
- `src/components/portfolio/` — small, reusable UI components
- `src/lib/data.ts` — profile, skills, and project content
- `public/images/profile.png` — profile photo
- `public/projects/` — local SVG project covers

## Personalize

Edit `src/lib/data.ts` to update your email, LinkedIn URL, phone number, resume path, skills, and project links. The LinkedIn URL and email are clearly marked placeholders until you update them. Add your PDF resume as `public/resume/soliman-resume.pdf`; then set `resumePath` to `/resume/soliman-resume.pdf`.

## Notes

The previous monolithic `portfolio-home.tsx` is not part of this clean project. The home page is composed from separate components.
