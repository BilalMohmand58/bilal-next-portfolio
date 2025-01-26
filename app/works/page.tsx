import Link from "next/link";
import type { Metadata } from "next";
import { workExperiences } from "./work-experience-data"; // Ensure to import from the correct data file

export const metadata: Metadata = {
  title: "Work Experiences",
  description: "Bilal Ahmad's Work",
};

export default function Works() {
  return (
    <section className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">My Work Experiences</h1>
      <div>
        {workExperiences.map((work, index) => (
          <div key={index} className="mb-6 border-b pb-4 last:border-none">
            <div>
              <h2 className="  text-lg font-semibold text-gray-900 dark:text-white">
                {work.title}
              </h2>
              <div className=" text-sm text-gray-500 dark:text-gray-400">
                <span className="block">{work.company}</span>
                <span>
                  {work.startYear} {work.endYear && `- ${work.endYear}`}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
