"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import { Badge } from "../ui/badge";
import { ArrowUpRight, Layers3 } from "lucide-react";

const ProjectsSection = () => {
  return (
    <SectionWrapper
      id="projects"
      className="relative z-10 mx-auto min-h-screen max-w-7xl px-4 py-20 md:py-28"
    >
      <SectionHeader
        id="projects"
        title="Projects"
        desc="Selected products that show my frontend, backend, and API integration work."
        className="static top-auto mb-12"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
const Modall = ({ project }: { project: Project }) => {
  const techCount =
    project.skills.frontend.length + (project.skills.backend?.length ?? 0);

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn flex w-full justify-center bg-transparent text-left">
          <div className="w-full overflow-hidden rounded-lg border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <Image
                className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover/modal-btn:scale-[1.05]"
                src={project.src}
                alt={`${project.title} project screenshot`}
                width={420}
                height={260}
              />
            </div>
            <div className="space-y-3 border-t bg-background/95 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="line-clamp-2 text-base font-semibold leading-snug text-foreground">
                  {project.title}
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-md">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="rounded-md bg-background">
                  <Layers3 className="mr-1 h-3 w-3" />
                  {techCount} tech
                </Badge>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="w-28 rounded-md border border-gray-300 bg-gray-200 px-2 py-1 text-sm text-black dark:border-border dark:bg-secondary dark:text-white">
              Cancel
            </button>
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <button className="w-28 rounded-md border border-black bg-black px-2 py-1 text-sm text-white dark:bg-white dark:text-black">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
