// src/components/Experience.jsx

import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ol className="space-y-12 border-l border-edge pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[1.8125rem] h-2 w-2 rounded-full bg-accent sm:-left-[2.3125rem]"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold text-fg">
                {job.role}
                <span className="text-fg-muted"> · {job.company}</span>
              </h3>
              <p className="text-sm whitespace-nowrap text-fg-muted">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed text-fg-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-faint"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
