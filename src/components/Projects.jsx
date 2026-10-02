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
              className="group block h-full rounded border border-edge bg-surface p-6 hover:border-accent-dim"
            >
              <h3 className="flex items-center gap-2 font-semibold text-fg">
                {project.title}
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  className="h-3 w-3 text-fg-faint group-hover:text-accent"
                />
              </h3>
              <p className="mt-2 leading-relaxed text-fg-muted">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-edge pt-8">
        <h3 className="label-eyebrow text-fg-muted">
          Earlier work
        </h3>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <a
            href={earlierWork.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-fg underline decoration-edge-strong underline-offset-4 hover:decoration-accent"
          >
            {earlierWork.title}
          </a>
          <span className="text-sm text-fg-muted">
            {earlierWork.year} · {earlierWork.context}
          </span>
        </div>
        <p className="mt-2 max-w-prose leading-relaxed text-fg-muted">
          {earlierWork.description}
        </p>
      </div>
    </Section>
  );
}
