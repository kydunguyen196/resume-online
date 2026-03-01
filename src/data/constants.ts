export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  DOCKER = "docker",
  JAVA = "java",
  SPRING_BOOT = "spring-boot",
  SPRING_SECURITY = "spring-security",
  HIBERNATE = "hibernate",
  MYSQL = "mysql",
  REST_API = "rest-api",
  AGILE = "agile",
  DEBUGGING = "debugging",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core language for building interactive frontend features.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe frontend code for maintainable React applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic markup for accessible and SEO-friendly interfaces.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Responsive layouts and polished UI styling for production pages.",
    color: "#2965f1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "ReactJS",
    shortDescription: "Main frontend framework for modular, reusable components.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue.js",
    shortDescription: "Additional frontend framework used for selected product modules.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Framework for modern React apps with strong DX and performance.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first styling for fast and consistent frontend delivery.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Used to support API integration and fullstack collaboration.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "Lightweight backend layer for REST endpoints and data flows.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database used in fullstack and API-driven projects.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Document database for flexible schemas and quick iteration.",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control and collaboration for reliable delivery.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting, pull-request workflow, and project collaboration.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Consistent code formatting to keep frontend codebases clean.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerized development and deployment workflows.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 17,
    name: "java",
    label: "Java",
    shortDescription: "Backend development and enterprise-grade application modules.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRING_BOOT]: {
    id: 18,
    name: "spring-boot",
    label: "Spring Boot",
    shortDescription: "Building structured REST APIs and backend services.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.SPRING_SECURITY]: {
    id: 19,
    name: "spring-security",
    label: "Spring Security",
    shortDescription: "Authentication and authorization setup for secure APIs.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.HIBERNATE]: {
    id: 20,
    name: "hibernate",
    label: "Hibernate",
    shortDescription: "ORM-based persistence for Java backend applications.",
    color: "#59666c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 21,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational database design and data-query optimization.",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.REST_API]: {
    id: 22,
    name: "rest-api",
    label: "REST API",
    shortDescription: "Strong at integrating frontend UIs with backend API contracts.",
    color: "#3b82f6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
  [SkillNames.AGILE]: {
    id: 23,
    name: "agile",
    label: "Agile",
    shortDescription: "Experience working in sprint-based team environments.",
    color: "#0ea5e9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  [SkillNames.DEBUGGING]: {
    id: 24,
    name: "debugging",
    label: "Debugging",
    shortDescription: "Diagnosing and fixing issues quickly in real project timelines.",
    color: "#1f2937",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2023",
    endDate: "Jan 2025",
    title: "Frontend-Focused Developer / Member",
    company: "Smart Lab - FPT University",
    description: [
      "Built and maintained frontend modules with ReactJS, JavaScript, HTML, and CSS in real-world university projects.",
      "Collaborated with backend services through REST APIs to deliver end-to-end product features.",
      "Participated in prototyping, feature implementation, and code reviews to improve product quality.",
      "Applied software engineering practices to ship practical, user-focused web experiences.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.TS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.REST_API,
      SkillNames.GIT,
      SkillNames.DOCKER,
      SkillNames.POSTGRES,
    ],
  },
  {
    id: 2,
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    title: "Software Engineer Intern (Frontend + API Integration)",
    company: "FPT Software",
    description: [
      "Integrated frontend interfaces with backend RESTful APIs to streamline client-server data flow.",
      "Developed web modules using JavaScript and Java while keeping the frontend user experience as a priority.",
      "Collaborated with senior developers on enterprise projects and delivered tasks on schedule.",
      "Worked in Agile team processes and adapted quickly to changing requirements.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.REST_API,
      SkillNames.JAVA,
      SkillNames.SPRING_BOOT,
      SkillNames.MYSQL,
      SkillNames.AGILE,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
