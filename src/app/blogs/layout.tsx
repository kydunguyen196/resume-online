import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Nguyen Tu Ky Du",
  description:
    "Technical notes, learning milestones, and project updates from Nguyen Tu Ky Du.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
