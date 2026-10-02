// src/components/FeaturedProject.jsx

import { FaGithub } from "react-icons/fa";
import Section from "./Section";
import { featured } from "../data";

function Screenshot() {
  if (!featured.screenshot) {
    return (
      <div
        className="flex aspect-[16/9] w-full items-center justify-center rounded border border-dashed border-edge-strong bg-surface p-6 text-center"
        role="img"
        aria-label="Placeholder for a NextMovie screenshot"
      >
        <span className="text-sm text-fg-faint">
          Screenshot placeholder
          <br />
          <span className="text-xs">TODO(Parker): add NextMovie screenshot</span>
        </span>
      </div>
    );
  }
  return (
    <img
      src={featured.screenshot}
      alt={featured.screenshotAlt}
      width="1280"
      height="720"
      loading="lazy"
      decoding="async"
      className="aspect-[16/9] w-full rounded border border-edge object-cover"
    />
  );
}

export default function FeaturedProject() {
  return (
    <Section id="nextmovie" label="Featured project" title={featured.title}>
      <p className="max-w-prose text-lg text-fg">{featured.tagline}</p>

      <div className="mt-8">
        <Screenshot />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="label-eyebrow text-fg-muted">
            Highlights
          </h3>
          <ul className="mt-4 space-y-3">
            {featured.highlights.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-fg-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-eyebrow text-fg-muted">
            Stack
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {featured.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-edge bg-surface px-2.5 py-1 text-sm text-fg-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            {featured.stackNote}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={featured.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-edge-strong px-5 py-2.5 text-fg hover:border-accent-dim"
        >
          <FaGithub aria-hidden="true" /> View source
        </a>
        {/* TODO(Parker): a "Visit site" button appears here once featured.liveUrl is set. */}
        {featured.liveUrl && (
          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-5 py-2.5 font-medium text-ink hover:bg-accent-bright"
          >
            Visit site
          </a>
        )}
      </div>
    </Section>
  );
}
