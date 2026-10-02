// src/components/Projects.jsx

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "./Section";
import { otherProjects, earlierWork } from "../data";

export default function Projects() {
  return (
    <Section id="projects" label="Other projects" title="Other work">
      <ul className="grid gap-4 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <li key={project.link}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <h3 className="flex items-center gap-2 font-semibold text-white">
                {project.title}
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  className="h-3 w-3 text-gray-500 group-hover:text-amber-300"
                />
              </h3>
              <p className="mt-2 leading-relaxed text-gray-300">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-gray-800 pt-8">
        <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          Earlier work
        </h3>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <a
            href={earlierWork.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline decoration-gray-700 underline-offset-4 hover:decoration-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            {earlierWork.title}
          </a>
          <span className="text-sm text-gray-400">
            {earlierWork.year} · {earlierWork.context}
          </span>
        </div>
        <p className="mt-2 max-w-prose leading-relaxed text-gray-400">
          {earlierWork.description}
        </p>
      </div>
    </Section>
  );
}
