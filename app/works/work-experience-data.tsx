export interface WorkExperience {
  company: string;
  title: string;
  startYear: string;
  endYear?: string;
  description: string;
  url?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Bredwares Technologies",
    title: "Full Stack Developer [Next Js]",
    startYear: "Sept, 2024",
    endYear: "March, 2025",
    description:
      "Developing and maintaining scalable web applications, integrating APIs, and working with both frontend and backend technologies.",
    url: "#",
  },
  {
    company: "Agile Vectors",
    title: "Mern Stack Developer [Apprenticeship]",
    startYear: "Aug, 2024",
    endYear: "Sept, 2024",
    description:
      "Worked on the Hello Entertainer project, handling API integration and frontend development using Next.js. Also contributed to the Sanabil project, applying modern web technologies and collaborating on project implementation.",
    url: "#",
  },
  {
    company: "Maidaan",
    title: "Web Developer",
    startYear: "July, 2023",
    endYear: "Aug, 2024",
    description:
      "Developed and maintained responsive websites, focusing on performance, security, and SEO. Collaborated using Git for version control and streamlined site maintenance.",
    url: "#",
  },
];
