import { SKILLS, SkillNames } from "@/data/constants";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const skillGroups = [
  {
    title: "Frontend",
    desc: "Build responsive, accessible, and maintainable interfaces.",
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.TAILWIND,
    ],
    focus: ["Component architecture", "Responsive UI", "API integration"],
  },
  {
    title: "Backend",
    desc: "Deliver REST APIs and service logic for product features.",
    skills: [
      SkillNames.JAVA,
      SkillNames.SPRING_BOOT,
      SkillNames.SPRING_SECURITY,
      SkillNames.HIBERNATE,
      SkillNames.CSHARP,
      SkillNames.DOTNET,
      SkillNames.ENTITY_FRAMEWORK,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.REST_API,
      SkillNames.SWAGGER,
      SkillNames.JWT,
    ],
    focus: ["REST contracts", "Authentication", "Service layering"],
  },
  {
    title: "Database",
    desc: "Model relational data and connect it cleanly to application flows.",
    skills: [
      SkillNames.MYSQL,
      SkillNames.POSTGRES,
      SkillNames.SQL_SERVER,
      SkillNames.MONGODB,
    ],
    focus: ["Schema design", "Query debugging", "ORM integration"],
  },
  {
    title: "Tools & Workflow",
    desc: "Keep delivery stable through version control and team practices.",
    skills: [
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.DOCKER,
      SkillNames.PRETTIER,
      SkillNames.AGILE,
      SkillNames.DEBUGGING,
    ],
    focus: ["Pull requests", "Container workflow", "Issue triage"],
  },
];

const capabilityStats = [
  { label: "Frontend stack", value: "React / Next.js / TypeScript" },
  { label: "Backend stack", value: "Java Spring Boot / .NET / Node.js" },
  { label: "Data layer", value: "MySQL / PostgreSQL / Entity Framework" },
  { label: "Delivery style", value: "Agile, Git, Docker, API-first" },
];

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="relative z-10 min-h-screen w-full px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="A complete view of the technologies I use to build fullstack web applications."
          className="static top-auto mb-12"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityStats.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="border-border/80 bg-background/90 shadow-sm backdrop-blur"
            >
              <CardHeader className="space-y-2">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <CardTitle className="text-2xl">{group.title}</CardTitle>
                    <CardDescription className="mt-2 leading-6">
                      {group.desc}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {group.skills.length} technologies
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.skills.map((skillName) => {
                    const skill = SKILLS[skillName];

                    return (
                      <div
                        key={skill.name}
                        className="flex min-h-24 gap-3 rounded-lg border bg-card/70 p-3 transition-colors hover:border-primary/30 hover:bg-secondary/40"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-background">
                          <Image
                            src={skill.icon}
                            alt={skill.label}
                            width={24}
                            height={24}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold leading-none">
                            {skill.label}
                          </p>
                          <p className="mt-2 text-sm leading-5 text-muted-foreground">
                            {skill.shortDescription}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2 border-t pt-4">
                  {group.focus.map((item) => (
                    <Badge key={item} variant="outline" className="bg-background">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
