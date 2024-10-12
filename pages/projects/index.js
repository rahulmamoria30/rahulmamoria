import ProjectCard from "./project-card";

export default function ProjectsPage() {
  return (
    <main className="font-boska px-5  md:px-8">
      {/* Heading section */}
      <div className="flex items-center space-x-4">
      
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 sm:py-6 md:py-8 lg:py-12">
          Projects
        </h1>
      </div>

      <section className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
        <ProjectCard />
      </section>
    </main>
  );
}
