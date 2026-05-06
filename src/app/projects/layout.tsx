import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Nguyen Tu Ky Du",
  description:
    "Selected fullstack and frontend projects covering React, TypeScript, .NET, Java, REST APIs, and database-backed product workflows.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
