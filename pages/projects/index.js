import Title from "@/components/Titile/Title";
import ProjectCard from "./project-card";

export default function ProjectsPage() {
  return (
    <main className="font-boska px-5  md:px-8">
      {/* Heading section */}
      <div className="flex items-center space-x-4">
      
      <Title title="Projects" />
      </div>

      <section className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
        <ProjectCard />
      </section>
    </main>
  );
}
