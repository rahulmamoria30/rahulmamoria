"use client";

import { Home } from "@/components/sections/Home";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="px-12">
      <Home />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
