"use client";

import { Home } from "@/components/sections/Home";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <section id="home" className="min-h-screen scroll-mt-24">
        <Home />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen scroll-mt-24">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen scroll-mt-24">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen scroll-mt-24">
        <Contact />
      </section>
    </main>
  );
}
