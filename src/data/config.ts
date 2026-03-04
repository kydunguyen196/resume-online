const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const config = {
  title: "Nguyen Tu Ky Du | Fullstack Developer",
  description: {
    long: "Fullstack Developer specializing in ReactJS, TypeScript, .NET backend development, and REST API integration. I focus on delivering responsive frontend experiences and scalable backend services for real-world products.",
    short:
      "Fullstack Developer specializing in ReactJS, TypeScript, and .NET APIs.",
  },
  keywords: [
    "Nguyen Tu Ky Du",
    "portfolio",
    "fullstack developer",
    "reactjs developer",
    ".net developer",
    "c# developer",
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
  role: "Fullstack Developer",
  location: "Hoai Duc, Hanoi, Vietnam",
  phone: "+84 344 079 399",
  email: "nguyentukydu@gmail.com",
  site: siteUrl,
  resumeUrl:
    "https://s3.topcv.vn/data-cvs/cvs/7cc88eb0db6d7f97c57c51145da10e37.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=s3-tp-topcv%2F20260304%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260304T085758Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=e9240adc19b35c26bc09aecdbc6dbc9c0616aca346b517626f823fb9cfb1dcf8#toolbar=0&navpanes=0&scrollbar=0",

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
