"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () => import("@/components/animated-background"),
  {
    ssr: false,
    loading: () => null,
  }
);

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
