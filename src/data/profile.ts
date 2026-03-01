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
    "Frontend Developer focused on building responsive, user-centered web applications with ReactJS, JavaScript, and TypeScript. Strong in converting requirements into maintainable UI modules and integrating smoothly with backend REST APIs.",
  valueProposition: [
    "Design and implement frontend features with clean component architecture and reusable patterns.",
    "Deliver responsive interfaces optimized for usability, readability, and maintainability.",
    "Integrate frontend modules with REST APIs and collaborate effectively with backend engineers.",
    "Troubleshoot UI/data issues quickly and keep feature delivery stable in Agile sprints.",
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
