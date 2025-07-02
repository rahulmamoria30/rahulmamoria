"use client";

import { useParams } from "next/navigation";
import { PROJECT_DATA } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/ui/link";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function ProjectPage() {
  const params = useParams();
  const project = PROJECT_DATA.find((p) => p.slug === params.slug);

  if (!project) {
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <AppLink href="/" className="text-primary hover:underline">
            Return to Home
          </AppLink>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
          <Image
            src={project.image}
            alt={project.project_name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              {project.project_name}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Button */}
          <AppLink
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </AppLink>

          {/* Project Links */}
          <div className="flex gap-4 mb-8">
            <AppLink
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              View Code
            </AppLink>
            {project.project_link ? (
              <AppLink
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Live Demo
              </AppLink>
            ) : (
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <button
                    disabled
                    className="px-4 py-2 bg-primary/50 text-primary-foreground/50 rounded-lg cursor-not-allowed"
                  >
                    Live Demo
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  Live demo is not available right now
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
                  <h1 className="text-3xl font-bold mb-6" {...props}>
                    {children}
                  </h1>
                ),
                h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
                  <h2 className="text-2xl font-semibold mt-8 mb-4" {...props}>
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3" {...props}>
                    {children}
                  </h3>
                ),
                p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
                  <p className="text-muted-foreground mb-4" {...props}>
                    {children}
                  </p>
                ),
                ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
                  <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
                    {children}
                  </ol>
                ),
                li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
                  <li className="text-muted-foreground" {...props}>
                    {children}
                  </li>
                ),
                strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
                  <strong className="text-foreground font-semibold" {...props}>
                    {children}
                  </strong>
                ),
                a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => (
                  <a
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => (
                  <code
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    {...props}
                  >
                    {children}
                  </code>
                ),
              }}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
} 