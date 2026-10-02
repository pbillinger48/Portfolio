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
      className="inline-flex items-center gap-2 rounded border border-edge-strong px-3 py-1.5 text-sm text-fg hover:border-accent-dim"
    >
      {copied ? (
        <FaCheck aria-hidden="true" className="text-accent" />
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
          <h3 className="label-eyebrow text-fg-muted">
            Email
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="text-fg underline decoration-edge-strong underline-offset-4 hover:decoration-accent"
            >
              {contact.email}
            </a>
            <CopyEmailButton />
          </div>

          <h3 className="mt-8 label-eyebrow text-fg-muted">
            Location
          </h3>
          <p className="mt-3 text-fg-muted">{contact.location}</p>
        </div>

        <div>
          <h3 className="label-eyebrow text-fg-muted">
            Elsewhere
          </h3>
          <ul className="mt-3 space-y-3">
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fg hover:text-accent"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fg hover:text-accent"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>

          <h3 className="mt-8 label-eyebrow text-fg-muted">
            Résumé
          </h3>
          <p className="mt-3">
            <a
              href={contact.resume}
              className="text-fg underline decoration-edge-strong underline-offset-4 hover:decoration-accent"
            >
              Download PDF
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
