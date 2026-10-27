export const profile = {
  name: "Md. Soliman Sikder",
  role: "Full Stack Developer",
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

    stack: ["JavaScript", "React", "Web APIs", "CSS"],

    image: "/images/screenshot-home.webp",

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
  slug: "boss-lab-console",
  name: "Boss Lab — Multi-language Code Console",
  category: "Developer Tool",
  featured: "Interactive Coding & Learning",

  summary:
    "A browser-based multi-language code playground for writing, running, and experimenting with JavaScript, Python, C, and C++.",

  description:
    "Boss Lab is an interactive coding environment built to make programming practice easier and more accessible. It features a Monaco-powered code editor, a smart console for displaying output and errors, multi-language execution, reusable code snippets, customizable editor settings, theme options, and shareable code links. The application is designed with a responsive interface for both desktop and mobile users.",

  stack: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS v4",
    "Monaco Editor",
    "Lucide React",
    "Motion",
    "Vercel"
  ],

  image: "/images/boss-console.webp",

  liveUrl: "https://boss-lab-console.vercel.app/",

  repoUrl:
    "https://github.com/mdsolimansikder7/Boss-Lab-Console",

  challenges: [
    "Building a responsive coding workspace with an editor and console.",
    "Supporting multiple programming languages through a unified interface.",
    "Integrating remote compilation for Python, C, and C++ while keeping JavaScript execution in the browser.",
    "Displaying program output, compiler errors, execution status, and timing clearly.",
    "Managing editor preferences, saved code, themes, and reusable snippets.",
    "Making the coding experience accessible across desktop and mobile layouts."
  ],

  improvements: [
    "Add more beginner-friendly coding examples and guided exercises.",
    "Expand the snippets library with algorithms and data structure examples.",
    "Improve compiler error explanations and debugging assistance.",
    "Add code formatting and more editor customization options.",
    "Introduce coding challenges with test cases and expected outputs.",
    "Explore additional programming language support."
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

    image: "/images/news-orbit.webp",

    liveUrl: "https://newsorbit-nu.vercel.app/",

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

  {
    slug: "medical-management",
    name: "Medical Management",
    category: "Healthcare Management System",
    featured: "Hospital Management Dashboard",

    summary:
      "A modern healthcare management dashboard for organizing patients, doctors, appointments, and hospital operations.",

    description:
      "Medical Management (MediCare) is a responsive hospital management dashboard designed to simplify healthcare administration. It provides dedicated interfaces for managing appointments, patients, doctors, consultations, laboratory workflows, pharmacy inventory, medical records, billing, reports, and staff. The application includes authentication interfaces, interactive charts, and light and dark themes.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Lucide React",
    ],

    image: "/images/medical-mang.webp",

    liveUrl: "https://medical-managment-seven.vercel.app/",

    repoUrl:
      "https://github.com/mdsolimansikder7/Medical-managment",

    challenges: [
      "Organizing multiple hospital management modules into a consistent dashboard.",
      "Building reusable and responsive UI components for healthcare workflows.",
      "Presenting dashboard statistics through interactive charts.",
      "Designing clear navigation for different management modules.",
    ],

    improvements: [
      "Integrate a secure backend and database for persistent medical records.",
      "Implement production-ready authentication and role-based authorization.",
      "Add real-time appointment scheduling and notifications.",
      "Strengthen patient data security and access controls.",
      "Add automated tests and improve accessibility.",
    ],
    
  },
  {
  slug: "krishi-bondu",
  name: "Krishi-Bondu",
  category: "Agriculture Technology Platform",
  featured: "Full-Stack Digital Agriculture Assistant",

  summary:
    "A Bengali-first digital agriculture platform that helps farmers access weather updates, crop market prices, farming guides, AI-assisted disease analysis, and essential agricultural tools.",

  description:
    "Krishi-Bondu is a full-stack digital agriculture platform designed to make farming information and tools more accessible to farmers in Bangladesh. Built with React, TypeScript, Vite, Node.js, Express, and MongoDB, the application brings together weather forecasts, crop market prices, cultivation guides, AI-assisted disease analysis, an agricultural calendar, farm expense tracking, a marketplace, and a farming Q&A system. It integrates Better Auth for authentication, Open-Meteo for weather data, and the Google Gemini API for optional AI-powered features. Its modular architecture separates frontend components, backend APIs, shared business logic, and authentication to support maintainability and deployment.",

  stack: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Lucide React",
    "Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Better Auth",
    "Google Gemini API",
    "Open-Meteo API",
    "Vercel",
  ],

  image: "/images/krishi-bondu.webp",

  liveUrl: "https://krishi-bondu.vercel.app/",

  repoUrl:
    "https://github.com/mdsolimansikder7/Krishi-Bondu",

  challenges: [
    "Integrating weather information, agricultural data, and AI-assisted features into a unified platform.",
    "Designing a modular monorepo structure for the frontend, backend, and shared business logic.",
    "Implementing authentication and coordinating secure communication between the frontend and backend APIs.",
    "Building farmer-focused tools for market prices, crop guidance, farm management, and agricultural calculations.",
    "Configuring Vercel deployment, API routing, environment variables, and database connectivity.",
  ],

  improvements: [
    "Integrate verified agricultural market data sources for more reliable and up-to-date crop prices.",
    "Improve AI-assisted crop disease analysis with reliable agricultural datasets and expert-reviewed guidance.",
    "Add advanced farm analytics, expense reports, and crop profitability calculations.",
    "Expand the agricultural marketplace with secure transactions and improved seller management.",
    "Strengthen automated testing, accessibility, API security, and application performance monitoring.",
  ],
},
{
  slug: "chatly",
  name: "Chatly",
  category: "Real-Time Messaging Platform",
  featured: "Full-Stack Chat Application",

  summary:
    "A modern messaging platform for real-time conversations, friend connections, and interactive communication.",

  description:
    "Chatly is a full-stack messaging application designed to provide a smooth and interactive communication experience. The frontend is built with React and Vite, while the backend uses Node.js, Express, and MongoDB. The application integrates Socket.IO for real-time messaging and communication events, Better Auth for authentication support, and REST APIs for application features. Its modular architecture separates the frontend, backend, authentication, conversations, messages, and user management.",

  stack: [
    "React",
    "Vite",
    "React Router",
    "Tailwind CSS",
    "Axios",
    "Socket.IO",
    "Better Auth",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
  ],

  image: "/images/chatly.webp",

  liveUrl: "https://chatly-message.vercel.app/",

  repoUrl:
    "https://github.com/mdsolimansikder7/Chatly-message",

  challenges: [
    "Integrating real-time messaging with the frontend and backend.",
    "Organizing authentication, users, conversations, and messages into modular components.",
    "Managing client-server communication through REST APIs and Socket.IO.",
    "Building a responsive and interactive messaging interface.",
    "Configuring frontend and backend communication across deployed environments.",
  ],

  improvements: [
    "Improve message delivery reliability and reconnection handling.",
    "Add message search, pagination, and advanced conversation management.",
    "Strengthen authentication, authorization, and API security.",
    "Improve deployment configuration for persistent real-time connections.",
    "Add automated tests, accessibility improvements, and performance monitoring.",
  ],
},

  
];
