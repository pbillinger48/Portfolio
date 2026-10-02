// src/components/Hero.jsx

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, contact } from "../data";

function Headshot() {
  if (!profile.headshot) {
    return (
      <div
        className="flex aspect-[4/5] w-full items-center justify-center rounded border border-dashed border-gray-700 bg-gray-900/60 p-6 text-center"
        role="img"
        aria-label="Placeholder for a headshot photo"
      >
        <span className="text-sm text-gray-500">
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
      height="800"
      className="aspect-[4/5] w-full rounded object-cover object-center"
    />
  );
}

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[3fr_2fr] md:gap-14">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-base text-amber-300 sm:text-lg">
            {profile.positioning}
          </p>
          <p className="mt-6 max-w-prose leading-relaxed text-gray-300">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={contact.resume}
              className="rounded bg-amber-300 px-5 py-2.5 font-medium text-gray-950 hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Résumé
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-gray-700 px-5 py-2.5 text-gray-200 hover:border-gray-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-gray-700 px-5 py-2.5 text-gray-200 hover:border-gray-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="mx-auto w-2/3 max-w-xs md:w-full md:max-w-none">
          <Headshot />
        </div>
      </div>
    </section>
  );
}
