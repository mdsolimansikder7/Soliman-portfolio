export const profile = {
  name: "Md. Soliman Sikder",
  role: "Frontend Developer",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/mdsolimansikder7",
  linkedin: "https://www.linkedin.com/in/mdsolimansikder7",
  email: "mdsolimansikder62@gmail.com",
  phone: "+8801791445773",
  resumePath: "/cv/SolimanCv.pdf",
  photo: "/images/profile.png",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel intuitive and polished.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Data",
    description: "Learning how the complete product works.",
    skills: [
      "Node.js",
      "REST APIs",
      "Python",
      "Django",
      "SQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Building, shipping, and improving reliably.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
      "VS Code",
      "Linux",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  challenges: string[];
  improvements: string[];
  featured: string;
};

export const projects: Project[] = [
  {
    slug: "su-calendar-sync",
    name: "SU Calendar Sync",
    category: "Productivity Tool",
    featured: "Useful Automation",

    summary:
      "A calendar-focused tool that helps students organize academic schedules and keep track of important class dates.",

    description:
      "SU Calendar Sync is designed to make academic schedules easier to manage. Students can work with class routine information and use calendar integrations to keep important dates accessible across their devices.",

    stack: [
      "JavaScript",
      "React",
      "Web APIs",
      "CSS",
    ],

    // Keep your screenshot in public/images/screenshot-home.png
    image: "/images/screenshot-home.png",

    // Replace this with your verified deployed website URL if different.
    liveUrl: "https://sucalendersync.vercel.app/",

    repoUrl:
      "https://github.com/mdsolimansikder7/SU-Calender-Sync",

    challenges: [
      "Representing academic dates and class events consistently.",
      "Making routine information easy to understand for students.",
      "Working with calendar feeds and external calendar integrations.",
    ],

    improvements: [
      "Improve routine import and export options.",
      "Enhance mobile calendar browsing.",
      "Add notifications and timezone-aware scheduling.",
    ],
  },

  {
    slug: "boss-lab-js-console",
    name: "Boss Lab — JS Console",
    category: "JavaScript Utility",
    featured: "Interactive Learning",

    summary:
      "An interactive JavaScript console for experimenting with code and practicing core language concepts.",

    description:
      "Boss Lab — JS Console is a browser-based project designed to make JavaScript practice more approachable. It provides a focused space to experiment with snippets and explore JavaScript concepts.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    image: "/images/Js console.png",

    // Verify this deployment URL if your live demo uses another address.
    liveUrl: "https://boss-lab-js-console.vercel.app/",

    repoUrl:
      "https://github.com/mdsolimansikder7/Boss-Lab--JS-Console",

    challenges: [
      "Designing a console-like interface that remains approachable for learners.",
      "Presenting input and output in a readable format.",
      "Keeping interactions usable on desktop and mobile screens.",
    ],

    improvements: [
      "Add more guided JavaScript examples.",
      "Improve output formatting and error explanations.",
      "Add beginner-friendly JavaScript practice challenges.",
    ],
  },

  {
    slug: "news-orbit",
    name: "News Orbit",
    category: "News Platform",
    featured: "Editorial Experience",

    summary:
      "A Bengali-first news experience with clear sections and readable typography.",

    description:
      "News Orbit is a news website focused on a clean reading experience, organized news sections, and a Bengali-friendly visual system. It aims to make browsing news straightforward across devices.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "REST API",
    ],

    image: "/images/news-orbit.png",

    liveUrl: "https://newsorbit-nu.vercel.app/",

    // Replace with the exact News Orbit repository URL if available.
    repoUrl: "https://github.com/mdsolimansikder7",

    challenges: [
      "Organizing multiple news sections into a consistent layout.",
      "Keeping Bengali typography readable across mobile and desktop.",
      "Handling remote API data and loading states.",
    ],

    improvements: [
      "Add search, bookmarks, and personalized topics.",
      "Improve accessibility and automated tests.",
      "Add richer article metadata and sharing actions.",
    ],
  },
];