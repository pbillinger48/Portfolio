// src/components/FeaturedProject.jsx

import { FaGithub } from "react-icons/fa";
import Section from "./Section";
import { featured } from "../data";

function Screenshot() {
  if (!featured.screenshot) {
    return (
      <div
        className="flex aspect-[16/9] w-full items-center justify-center rounded border border-dashed border-gray-700 bg-gray-900/60 p-6 text-center"
        role="img"
        aria-label="Placeholder for a NextMovie screenshot"
      >
        <span className="text-sm text-gray-500">
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
      className="aspect-[16/9] w-full rounded border border-gray-800 object-cover"
    />
  );
}

export default function FeaturedProject() {
  return (
    <Section id="nextmovie" label="Featured project" title={featured.title}>
      <p className="max-w-prose text-lg text-gray-200">{featured.tagline}</p>

      <div className="mt-8">
        <Screenshot />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Highlights
          </h3>
          <ul className="mt-4 space-y-3">
            {featured.highlights.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-gray-300">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Stack
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {featured.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-gray-800 bg-gray-900/60 px-2.5 py-1 text-sm text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {featured.stackNote}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={featured.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-gray-700 px-5 py-2.5 text-gray-200 hover:border-gray-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        >
          <FaGithub aria-hidden="true" /> View source
        </a>
        {/* TODO(Parker): a "Visit site" button appears here once featured.liveUrl is set. */}
        {featured.liveUrl && (
          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-amber-300 px-5 py-2.5 font-medium text-gray-950 hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Visit site
          </a>
        )}
      </div>
    </Section>
  );
}
