export interface Project {
  title: string;
  year: number;
  description: string;
  githubUrl?: string; // Optional field for GitHub link
  liveUrl?: string; // Optional field for Live project link
}

export const projects: Project[] = [
  {
    title: "YTMatic",
    year: 2024,
    description:
      "YTMatic is an AI-driven SaaS platform for effortless video creation, offering niche-based content generation, AI voice-overs, stock visuals, subtitles, branding, and real-time previews for creators and businesses.",
    githubUrl: "",
    liveUrl: "https://ytmatic.com",
  },
  {
    title: "Hello Entertainer",
    year: 2025,
    description:
      "Hello Entertainer is an innovative platform providing unmatched buy one, get one deals without restrictions, empowering entrepreneurs and influencers to generate income while creating joyful experiences for customers.",
    githubUrl: "",
    liveUrl: "https://vs-website-frontend.vercel.app/",
  },
  {
    title: "Sanabil",
    year: 2025,
    description:
      "A secure and flexible mobile device financing solution, making it easier for users to acquire smartphones through manageable payment plans.",
    githubUrl: "",
    liveUrl: "https://sanabil.so/en/",
  },
  {
    title: "EcomFill",
    year: 2025,
    description:
      "EcomFill simplifies eBay business operations by offering fast, reliable fulfillment services, including inventory management and efficient shipping, ensuring a hassle-free experience for sellers.",
    githubUrl: "",
    liveUrl: "https://www.ecomfill.com/",
  },
  {
    title: "Bredwares Web Tracker",
    year: 2024,
    description:
      "Bredwares Tracker is a desktop application built with React, Supabase, and Electron, designed to help employers track employees' activities during working hours. The app records and monitors employee tasks, providing insights into productivity and task progress. Real-time syncing with Supabase ensures accurate data tracking.",
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Touristoo Web App",
    year: 2024,
    description:
      "Touristoo is full stack app where user can post beautiful tourists spots around the world also user can pass comments and reviews on other users posts.",
    githubUrl: "https://github.com/BilalMohmand58/Touristoo-app",
    liveUrl: "",
  },
];
