import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import * as React from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
    { name: "Projects", href: "#projects", icon: <Code size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="flex items-center gap-2 p-2 rounded-full backdrop-blur-md dark:bg-neutral-900/80 bg-white/80 border border-neutral-200 dark:border-neutral-800 shadow-2xl pointer-events-auto transition-all hover:scale-105">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex items-center gap-2 px-3 py-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-full transition-all duration-700 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <span className="transition-transform duration-700 ease-in-out group-hover:scale-110">
              {item.icon}
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium transition-all duration-700 ease-in-out group-hover:max-w-xs group-hover:ml-1">
              {item.name}
            </span>
          </a>
        ))}
        <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700 mx-1"></div>
        <div className="flex items-center gap-2 px-2">
          <a
            href="https://github.com/sasidharJasty"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"
          >
            <DiGithubBadge size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sasidhar-jasty/"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"
          >
            <AiFillLinkedin size={20} />
          </a>
          <a
            href="mailto:sasidhar.jasty@gmail.com"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"
          >
            <AiFillMail size={20} />
          </a>
        </div>
      </nav>
    </div>
  );
}
