// src/components/Education.jsx

import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Education">
      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map((entry) => (
          <li
            key={`${entry.school}-${entry.degree}`}
            className="flex items-center gap-4 rounded border border-gray-800 bg-gray-900/40 p-6"
          >
            <img
              src={entry.image}
              alt={`${entry.school} logo`}
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <div>
              <p className="font-semibold text-white">{entry.degree}</p>
              <p className="mt-1 text-sm text-gray-400">
                {entry.school} · {entry.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
