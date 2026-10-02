// src/components/Hero.jsx

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, contact } from "../data";

function Headshot() {
  if (!profile.headshot) {
    return (
      <div
        className="flex aspect-square w-full items-center justify-center rounded border border-dashed border-edge-strong bg-surface p-6 text-center"
        role="img"
        aria-label="Placeholder for a headshot photo"
      >
        <span className="text-sm text-fg-faint">
          Headshot placeholder
          <br />
          <span className="text-xs">TODO(Parker): add photo</span>
        </span>
      </div>
    );
  }
  return (
    <img
      src={profile.headshot}
      alt={profile.headshotAlt}
      width="640"
      height="640"
      className="aspect-square w-full rounded object-cover object-center"
    />
  );
}

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[3fr_2fr] md:gap-14">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-base text-accent sm:text-lg">
            {profile.positioning}
          </p>
          <p className="mt-6 max-w-prose leading-relaxed text-fg-muted">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={contact.resume}
              className="rounded bg-accent px-5 py-2.5 font-medium text-ink hover:bg-accent-bright"
            >
              Résumé
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-edge-strong px-5 py-2.5 text-fg hover:border-accent-dim"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-edge-strong px-5 py-2.5 text-fg hover:border-accent-dim"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="mx-auto w-2/3 max-w-[320px] md:w-full">
          <Headshot />
        </div>
      </div>
    </section>
  );
}
