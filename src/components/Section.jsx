// src/components/Section.jsx

export default function Section({ id, label, title, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-edge ${className}`}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        {label && (
          <p className="label-eyebrow mb-3 flex items-center gap-3 text-accent">
            <span aria-hidden="true" className="h-px w-6 bg-accent-dim" />
            {label}
          </p>
        )}
        {title && (
          <h2 className="mb-10 text-2xl font-semibold text-fg sm:text-3xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
