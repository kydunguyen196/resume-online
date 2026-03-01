const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const config = {
  title: "Nguyen Tu Ky Du | Frontend Developer",
  description: {
    long: "Frontend Developer specializing in ReactJS, JavaScript, TypeScript, and REST API integration. I focus on delivering responsive, maintainable, and user-friendly web interfaces for real-world products.",
    short:
      "Frontend Developer specializing in ReactJS, TypeScript, and scalable UI delivery.",
  },
  keywords: [
    "Nguyen Tu Ky Du",
    "portfolio",
    "frontend developer",
    "reactjs developer",
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "REST API",
    "PostgreSQL",
    "UI/UX",
  ],
  author: "Nguyen Tu Ky Du",
  role: "Frontend Developer",
  location: "Hoai Duc, Hanoi, Vietnam",
  phone: "+84 344 079 399",
  email: "nguyentukydu@gmail.com",
  site: siteUrl,
  resumeUrl: "https://github.com/kydunguyen196",

  // for github stars button
  githubUsername: "kydunguyen196",
  githubRepo: "Future-Me-FE",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "https://github.com/kydunguyen196",
  },
};
export { config };
