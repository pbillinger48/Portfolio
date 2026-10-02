// src/components/Navbar.jsx

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, contact } from "../data";

const links = [
  { href: "#nextmovie", label: "NextMovie" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-edge">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-4 sm:px-8 md:flex-row">
        <a
          href="#top"
          className="font-semibold tracking-tight text-fg"
        >
          {profile.name}
        </a>
        <nav
          aria-label="Sections"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:ml-auto"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-fg-muted hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:ml-6">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-fg"
          >
            <FaLinkedin size={20} aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-fg"
          >
            <FaGithub size={20} aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
