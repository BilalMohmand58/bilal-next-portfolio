import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Import icons

export const metadata: Metadata = {
  title: "Projects",
  description: "Bilal Ahmad's Projects",
};

export default function Projects() {
  return (
    <section className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">My Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-6 border-b pb-4 last:border-none">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-4">
                <span className="block">{project.description}</span>
              </div>
              <div className="mt-2 flex space-x-2">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-lg" />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="text-lg" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
