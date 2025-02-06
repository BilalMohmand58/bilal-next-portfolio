// import Image from "next/image";
// import { socialLinks } from "./config";

// export default function Page() {
//   return (
//     <section>
//       <a href={socialLinks.twitter} target="_blank">
//         <Image
//           src="/profile.jpg"
//           alt="Profile photo"
//           className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 "
//           unoptimized
//           width={160}
//           height={160}
//           priority
//         />
//       </a>
//       <h1 className="mb-6 text-xl font-medium tracking-tight">About Me</h1>
//       <div className="prose prose-neutral dark:prose-invert">
//         <p>
//           I'm a passionate Software Engineer and Full-Stack Developer with
//           expertise in building efficient, scalable, and user-friendly
//           solutions. Proficient in the MERN stack (MongoDB, Express.js, React,
//           Node.js), I also specialize in modern frameworks like Next.js.
//         </p>
//         <p>
//           With experience in both frontend and backend development, I deliver
//           seamless end-to-end applications tailored to solve real-world
//           problems. From crafting intuitive user interfaces to developing robust
//           server-side logic, I ensure that every project is functional,
//           innovative, and aligned with client goals.
//         </p>
//         <p>
//           I thrive in collaborative environments and embrace continuous learning
//           to stay ahead in the fast-evolving tech landscape. Let’s team up to
//           bring your vision to life!
//         </p>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { socialLinks } from "./config";
import { Download } from "lucide-react";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-6 text-xl font-medium tracking-tight">About Me</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a passionate Software Engineer and Full-Stack Developer with
          expertise in building efficient, scalable, and user-friendly
          solutions. Proficient in the MERN stack (MongoDB, Express.js, React,
          Node.js), I also specialize in modern frameworks like Next.js.
        </p>
        <p>
          With experience in both frontend and backend development, I deliver
          seamless end-to-end applications tailored to solve real-world
          problems. From crafting intuitive user interfaces to developing robust
          server-side logic, I ensure that every project is functional,
          innovative, and aligned with client goals.
        </p>
        <p>
          I thrive in collaborative environments and embrace continuous learning
          to stay ahead in the fast-evolving tech landscape. Let’s team up to
          bring your vision to life.
        </p>
      </div>
      <div className="mt-4 ">
        <p>
          <a
            href="/BilalAhmad'sCV.pdf"
            download
            className=" text-sm font-medium text-blue-500 hover:text-blue-600 underline inline-flex items-center gap-1"
          >
            Click Here To Download My CV
            <Download size={14} />
          </a>
        </p>
      </div>
    </section>
  );
}
