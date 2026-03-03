export type EducationItem = {
  degree: string;
  school: string;
  graduation: string;
  gpa?: string;
  details: string[];
};

export type ProfileData = {
  summary: string;
  valueProposition: string[];
  education: EducationItem[];
  languages: string[];
};

export const profileData: ProfileData = {
  summary:
    "Fullstack Developer focused on building responsive web applications with ReactJS/TypeScript on the frontend and reliable REST APIs on the backend using .NET and Java stacks.",
  valueProposition: [
    "Design and implement frontend features with clean component architecture and reusable patterns.",
    "Build backend services and REST APIs with clear contracts, secure auth flow, and maintainable code structure.",
    "Deliver end-to-end product features from database/API to responsive user interface.",
    "Troubleshoot UI/API/data issues quickly and keep delivery stable in Agile sprints.",
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      school: "FPT University",
      graduation: "January 2025",
      gpa: "3.0",
      details: [
        "Completed Java Fullstack Web Developer training during studies/internship.",
        "Built and maintained fullstack modules including design, coding, testing, and deployment.",
        "Worked with senior developers on real-world project challenges.",
      ],
    },
  ],
  languages: [
    "Vietnamese (Native)",
    "English (Intermediate, able to read technical documentation)",
  ],
};
