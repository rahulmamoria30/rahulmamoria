"use client";


import { SectionTitle } from "@/components/ui/section-title";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { sectionConfig, skillCategories, experiences, ExperienceItem } from "@/constants/experience";
import { MotionDiv } from "@/components/ui/motion-div";

export function Experience() {
  return (
    <MotionDiv
      variant="container"
      id={sectionConfig.id}
      className={sectionConfig.className}
    >
      <MotionDiv variant="item">
        <SectionTitle icon={sectionConfig.title.icon} title={sectionConfig.title.text} />
      </MotionDiv>
      <MotionDiv 
        variant="container"
        className="flex flex-col gap-8 flex-wrap"
      >
        {experiences.map((exp: ExperienceItem, index: number) => (
          <MotionDiv
            key={index}
            variant="card"
            whileHover="hover"
            className="group relative bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {exp.title}
                </h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                    {exp.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full bg-card/80 border border-border overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-medium">{exp.company}</h4>
              </div>
              <ul className="list-none space-y-3 text-muted-foreground">
                {exp.description.map((item: string, i: number) => (
                  <MotionDiv
                    key={i}
                    variant="fade"
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </MotionDiv>
                ))}
              </ul>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionDiv 
        variant="container"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {skillCategories.map((category) => (
          <MotionDiv
            key={category.title}
            variant="card"
            whileHover="hover"
          >
            <Card className="bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <MotionDiv
                      key={skill.name}
                      variant="fade"
                      transition={{ delay: 0.1 * skillIndex }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-0.5 bg-primary/10 rounded-full overflow-hidden">
                        <Progress 
                          value={skill.level} 
                          max={100}
                          className="h-full bg-primary/10"
                        />
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
} 