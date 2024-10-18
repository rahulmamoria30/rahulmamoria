import Title from "@/components/Title/Title";
import ProjectCard from "./project-card";

export default function ProjectsPage() {
  return (
    <main className="font-boska px-5  md:px-8">
      {/* Heading section */}

      
      <Title title="Projects" subtitle="What I developed" />


      <section className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
        <ProjectCard />
      </section>
    </main>
  );
}
