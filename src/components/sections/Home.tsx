"use client";

import { User, Code2, Cpu } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { FlipCard } from "@/components/ui/flip-card";
import { CodingProfile } from "@/components/ui/coding-profile";
import { skillCards, profileData, introduction } from "@/constants/home";
import { MotionDiv } from "@/components/ui/motion-div";

export function Home() {
  return (
    <MotionDiv
      variant="container"
      id="home"
      className="min-h-screen flex flex-col justify-center py-24 space-y-12"
    >
      <MotionDiv variant="item">
        <SectionTitle icon={User} title="Software Engineer" />
      </MotionDiv>

      <div className="space-y-12">
        <MotionDiv 
          variant="item"
          className="relative"
        >
          <div className="relative space-y-6">
            <MotionDiv 
              variant="slide"
              className="text-3xl sm:text-4xl block font-medium tracking-wide text-primary/90"
            >
              {introduction.greeting}
            </MotionDiv>
            <MotionDiv 
              variant="slide"
              className="text-5xl sm:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                {introduction.name}
              </span>
            </MotionDiv>
            <MotionDiv 
              variant="fade"
              className="text-xl sm:text-2xl text-muted-foreground/90 max-w-3xl leading-relaxed tracking-wide"
            >
              {introduction.description}
            </MotionDiv>
          </div>
        </MotionDiv>

        <MotionDiv variant="item" className="space-y-6">
          <MotionDiv 
            variant="slide"
            className="text-2xl sm:text-3xl font-semibold flex items-center gap-3 tracking-wide"
          >
            <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              What I Do ... ?
            </span>
          </MotionDiv>
          <MotionDiv 
            variant="container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {skillCards.map((card, index) => (
              <MotionDiv
                key={index}
                variant="card"
                whileHover="hover"
              >
                <FlipCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>

        <MotionDiv variant="item" className="space-y-6">
          <MotionDiv 
            variant="slide"
            className="text-2xl sm:text-3xl font-semibold flex items-center gap-3 tracking-wide"
          >
            <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </MotionDiv>
          <MotionDiv 
            variant="container"
            className="flex flex-wrap gap-6"
          >
            {profileData.map((profile, index) => (
              <MotionDiv
                key={index}
                variant="card"
                whileHover="hover"
              >
                <CodingProfile
                  url={profile.url}
                  title={profile.title}
                  imagePath={profile.imagePath}
                />
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
} 