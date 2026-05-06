"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import projects from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-24 font-sans">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Selected Projects
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          Practical fullstack and frontend work focused on responsive UIs,
          REST API integration, authentication flows, and maintainable product
          modules.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-lg border bg-background/80 shadow-sm backdrop-blur-sm"
          >
            <div className="relative aspect-[16/10] bg-muted">
              <Image
                src={project.src}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-5">
              <div className="space-y-2">
                <Badge variant="secondary">{project.category}</Badge>
                <h2 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {[...project.skills.frontend, ...project.skills.backend]
                  .slice(0, 6)
                  .map((skill) => (
                    <Badge key={skill.title} variant="outline">
                      {skill.title}
                    </Badge>
                  ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={project.gitFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Source
                  </Button>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="gap-2">
                    Visit
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
