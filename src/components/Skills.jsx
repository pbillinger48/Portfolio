// src/components/Skills.jsx

import Section from "./Section";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="label-eyebrow text-accent">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-edge bg-surface px-2.5 py-1 text-sm text-fg-muted"
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
