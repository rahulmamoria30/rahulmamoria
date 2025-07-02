"use client";

import { FolderGit2, Github } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { PROJECT_DATA } from "@/data/projects";
import { AppLink } from "@/components/ui/link";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/ui/motion-div";

export function Projects() {
  return (
    <MotionDiv
      variant="container"
      id="projects"
      className="space-y-6 scroll-mt-24"
    >
      <MotionDiv variant="item">
        <SectionTitle icon={FolderGit2} title="Projects" />
      </MotionDiv>
      <MotionDiv 
        variant="container"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECT_DATA.map((project, index) => (
          <MotionDiv
            key={index}
            variant="card"
            whileHover="hover"
            className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border group hover:border-primary/30 transition-all duration-300"
          >
            <div className="relative h-24">
              {/* Background Pattern */}
              <MotionDiv 
                variant="fade"
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
              />
              <MotionDiv 
                variant="fade"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))] transition-all duration-500"
              />
              {/* Title Section */}
              <div className="relative h-full flex items-center px-6">
                <div className="flex items-center gap-4 w-full">
                  <MotionDiv 
                    variant="fade"
                    className="relative flex-shrink-0"
                  >
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <project.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="absolute -inset-1 rounded-md bg-primary/5 blur-md group-hover:bg-primary/10 transition-all duration-300 -z-10" />
                  </MotionDiv>
                  <div className="flex-1 min-w-0">
                    <MotionDiv 
                      variant="slide"
                      className="text-lg font-semibold truncate"
                    >
                      <span className="relative inline-flex items-center">
                        {project.project_name}
                        <MotionDiv 
                          variant="fade"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute -bottom-0.5 left-0 h-[1px] bg-gradient-to-r from-primary/50 to-primary"
                        />
                      </span>
                    </MotionDiv>
                  </div>
                  <MotionDiv 
                    variant="fade"
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      <div className="absolute -inset-1 rounded-full bg-primary/10 blur-sm group-hover:bg-primary/20 transition-all duration-300" />
                    </div>
                  </MotionDiv>
                </div>
              </div>
            </div>
            <div className="p-6">
              <AnimatePresence mode="wait">
                <MotionDiv 
                  key="description"
                  variant="fade"
                  className="text-muted-foreground mb-4"
                >
                  {project.project_detail[0]}
                </MotionDiv>
              </AnimatePresence>
              <MotionDiv 
                variant="fade"
                className="flex flex-wrap gap-2 mb-4"
              >
                {project.techstack.map((tech, i) => (
                  <MotionDiv
                    key={i}
                    variant="fade"
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </MotionDiv>
                ))}
              </MotionDiv>
              <MotionDiv 
                variant="fade"
                className="flex gap-4"
              >
                <AppLink
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </AppLink>
                <AppLink
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <project.icon className="w-5 h-5" />
                  <span>Description</span>
                </AppLink>
              </MotionDiv>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
} 