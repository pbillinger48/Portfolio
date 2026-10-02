// src/components/Contact.jsx

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaRegCopy, FaCheck } from "react-icons/fa6";
import Section from "./Section";
import { contact } from "../data";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      // Clipboard API unavailable or blocked. The address is selectable text
      // right next to this button, so there is still a way to copy it.
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded border border-gray-700 px-3 py-1.5 text-sm text-gray-200 hover:border-gray-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
    >
      {copied ? (
        <FaCheck aria-hidden="true" className="text-amber-300" />
      ) : (
        <FaRegCopy aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Get in touch">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Email
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-100 underline decoration-gray-700 underline-offset-4 hover:decoration-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              {contact.email}
            </a>
            <CopyEmailButton />
          </div>

          <h3 className="mt-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Location
          </h3>
          <p className="mt-3 text-gray-300">{contact.location}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Elsewhere
          </h3>
          <ul className="mt-3 space-y-3">
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>

          <h3 className="mt-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Résumé
          </h3>
          <p className="mt-3">
            <a
              href={contact.resume}
              className="text-gray-200 underline decoration-gray-700 underline-offset-4 hover:decoration-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Download PDF
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
