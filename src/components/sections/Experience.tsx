"use client";

import { Briefcase } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Company Name",
    period: "2022 - Present",
    description: [
      "Developed and maintained full-stack applications using React, Node.js, and TypeScript",
      "Implemented responsive designs and optimized application performance",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    title: "Junior Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    description: [
      "Built and maintained web applications using modern JavaScript frameworks",
      "Participated in code reviews and implemented best practices",
      "Worked on both frontend and backend development tasks"
    ]
  }
];

export function Experience() {
  return (
    <div className="flex flex-col items-start flex-grow w-full">
      <div className="w-full">
        <div className="space-y-6">
          <SectionTitle icon={Briefcase} title="Experience" />
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 mt-4 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 