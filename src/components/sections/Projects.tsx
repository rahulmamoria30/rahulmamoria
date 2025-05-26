"use client";

import { FolderGit2, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and TypeScript.",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+One",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/username/project1",
    liveUrl: "https://project1.com"
  },
  {
    title: "Project Two",
    description: "A mobile-first responsive website with modern design principles.",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Two",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/project2"
  }
];

export function Projects() {
  return (
    <div className="flex flex-col items-start flex-grow w-full">
      <div className="w-full">
        <div className="space-y-6">
          <SectionTitle icon={FolderGit2} title="Projects" />
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 