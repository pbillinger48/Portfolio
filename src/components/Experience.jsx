// src/components/Experience.jsx

import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ol className="space-y-12 border-l border-gray-800 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[1.8125rem] h-2 w-2 rounded-full bg-amber-300 sm:-left-[2.3125rem]"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold text-white">
                {job.role}
                <span className="text-gray-400"> · {job.company}</span>
              </h3>
              <p className="text-sm whitespace-nowrap text-gray-400">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed text-gray-300">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-600"
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
