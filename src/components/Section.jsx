// src/components/Section.jsx

export default function Section({ id, label, title, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-gray-800 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        {label && (
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
            {label}
          </p>
        )}
        {title && (
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
