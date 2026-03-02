import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Link2 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  gitFrontend,
  gitBackend,
}: {
  gitFrontend: string;
  gitBackend?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={gitFrontend}
      >
        <Button variant={"default"} size={"sm"}>
          Git FE
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {gitBackend && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={gitBackend}
        >
          <Button variant={"default"} size={"sm"}>
            Git BE
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  react: {
    title: "ReactJS",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  restApi: {
    title: "REST API",
    bg: "black",
    fg: "white",
    icon: <Link2 />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">J</span>,
  },
  springBoot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">SB</span>,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">SQL</span>,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">JWT</span>,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  git: {
    title: "Git",
    bg: "black",
    fg: "white",
    icon: <SiGit />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  gitFrontend: string;
  gitBackend?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "future-me-fe",
    category: "Frontend Web App",
    title: "FUTURE-ME-FE",
    src: "/assets/projects-screenshots/futureme/home.png",
    screenshots: ["home.png", "test.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [PROJECT_SKILLS.restApi, PROJECT_SKILLS.git],
    },
    live: "https://github.com/kydunguyen196/Future-Me-FE",
    gitFrontend: "https://github.com/kydunguyen196/Future-Me-FE",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Frontend project built with ReactJS, JavaScript, HTML, and CSS. The
            application consumes RESTful APIs and focuses on clean user flows and
            maintainable component structure.
          </TypographyP>
          <ProjectsLinks gitFrontend={this.gitFrontend} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Built responsive UI components for core user journeys.</li>
            <li>Integrated REST APIs to handle dynamic content and data updates.</li>
            <li>Organized reusable components for easier maintenance and scaling.</li>
          </ul>
          <SlideShow
            images={[`${BASE_PATH}/futureme/home.png`, `${BASE_PATH}/futureme/test.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "fe-trotot",
    category: "Frontend Web App",
    title: "FE-TroTot",
    src: "/assets/projects-screenshots/trotot/home.png",
    screenshots: ["home.png", "login.png", "aboutus.png", "regulation.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.restApi, PROJECT_SKILLS.git],
    },
    live: "https://github.com/kydunguyen196/FE-TroTot",
    gitFrontend: "https://github.com/kydunguyen196/FE-TroTot",
    gitBackend: "https://github.com/kydunguyen196/BE-TroTot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Frontend application developed with ReactJS and JavaScript, integrated
            with backend REST APIs to deliver practical features and a smooth
            experience for end users.
          </TypographyP>
          <ProjectsLinks
            gitFrontend={this.gitFrontend}
            gitBackend={this.gitBackend}
          />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Connected frontend modules to backend APIs for real-time data.</li>
            <li>Focused on readable code and component-level reusability.</li>
            <li>Collaborated through Git-based workflow for consistent delivery.</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/trotot/home.png`,
              `${BASE_PATH}/trotot/login.png`,
              `${BASE_PATH}/trotot/aboutus.png`,
              `${BASE_PATH}/trotot/regulation.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "freelancer-job-matching-system",
    category: "Fullstack Platform",
    title: "Freelancer Job Matching System",
    src: "/assets/projects-screenshots/freelancerjobmatchingsystem/home.png",
    screenshots: ["home.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.restApi,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springBoot,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.git,
      ],
    },
    live: "https://github.com/kydunguyen196/freelancer-job-matching-system-fe",
    gitFrontend: "https://github.com/kydunguyen196/freelancer-job-matching-system-fe",
    gitBackend: "https://github.com/kydunguyen196/freelancer-job-matching-system",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Fullstack project where I handled frontend and backend delivery. Built
            responsive React UI, integrated authentication flows, and collaborated
            on backend API contracts and service architecture.
          </TypographyP>
          <ProjectsLinks
            gitFrontend={this.gitFrontend}
            gitBackend={this.gitBackend}
          />
          <TypographyH3 className="my-4 mt-8">Frontend Scope</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Developed responsive UI using ReactJS.</li>
            <li>Integrated RESTful APIs for authentication and user features.</li>
            <li>Implemented form validation and dynamic state handling.</li>
            <li>Built reusable components and modular structure.</li>
            <li>Implemented role-based UI rendering.</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Backend Scope</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Designed service-oriented backend with Spring Boot.</li>
            <li>Built authentication service using JWT.</li>
            <li>Developed RESTful APIs for job and user management.</li>
            <li>Integrated frontend with backend services end-to-end.</li>
          </ul>
          <SlideShow
            images={[`${BASE_PATH}/freelancerjobmatchingsystem/home.png`]}
          />
        </div>
      );
    },
  },
];

export default projects;
