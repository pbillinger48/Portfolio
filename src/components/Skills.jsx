// src/components/Skills.jsx

import Section from "./Section";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-gray-800 bg-gray-900/60 px-2.5 py-1 text-sm text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
