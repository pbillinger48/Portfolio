// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg-muted">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-edge">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-fg-faint sm:px-8">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </div>
  );
}
