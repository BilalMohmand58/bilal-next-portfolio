// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { ThemeSwitch } from "./theme-switch";
// import { metaData } from "../config";

// const navItems = {
//   "/": { name: "Home" },
//   "/projects": { name: "Projects" },
//   "/works": { name: "Work Experiences" },
//   "/blog": { name: "Blogs" },
//   // "/photos": { name: "Photos" },
// };

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="lg:mb-16 mb-12 py-5">
//       <div className="flex flex-col md:flex-row md:items-center justify-between">
//         <div className="flex items-center justify-between w-full">
//           <Link href="/" className="text-xl font-semibold tracking-tight">
//             {metaData.title}
//           </Link>
//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:flex flex-col md:flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center  w-full md:w-[90%]`}
//         >
//           {Object.entries(navItems).map(([path, { name }]) => (
//             <Link
//               key={path}
//               href={path}
//               className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
//             >
//               {name}
//             </Link>
//           ))}
//           <ThemeSwitch />
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/works": { name: "Work Experiences" },
  "/blog": { name: "Blogs" },
  // "/photos": { name: "Photos" },
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300"
          >
            {/* Show menu icon when closed */}
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Show cross icon when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center w-full md:w-[90%]`}
        >
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative md:pb-0 pb-2"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
