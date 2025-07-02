"use client";

import { User, Code2, } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { CodingProfile } from "@/components/ui/coding-profile";
import {  profileData, introduction } from "@/constants/home";
import { MotionDiv } from "@/components/ui/motion-div";
import { Card } from "@/components/ui/card";

const experienceTimeline = [
  { value: '2', label: 'Years of Experience' },
  { value: '6', label: 'Months SDE Internship' },
  { value: '3', label: 'Months Backend Internship' },
];

export function Home() {
  return (
    <MotionDiv
      variant="container"
      id="home"
      className="min-h-screen flex flex-col justify-center py-24 space-y-6"
    >
      <MotionDiv variant="item">
        <SectionTitle icon={User} title="Software Engineer" />
      </MotionDiv>

      <div className="space-y-6">
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
              className="text-base sm:text-lg text-muted-foreground/90 max-w-3xl leading-relaxed tracking-wide"
            >
              {introduction.description}
            </MotionDiv>
          </div>
        </MotionDiv>

       

        <MotionDiv variant="item" className="space-y-6">
          <MotionDiv 
            variant="slide"
            className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-wide"
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
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

        
        {/* <MotionDiv variant="item" className="space-y-6">
          <MotionDiv 
            variant="slide"
            className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-wide"
          >
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              What I Do ... ?
            </span>
          </MotionDiv>
          <MotionDiv 
            variant="container"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {skillCards.map((card, index) => (
              <MotionDiv
                key={index}
                variant="card"
                whileHover="hover"
                className="h-[300px]"
              >
                <FlipCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv> */}
        
      </div>
      {/* Experience Section: Responsive, Styled Horizontal Card Timeline */}
      <div className="w-full flex flex-col mt-12">
        <Card className="w-full max-w-2xl bg-card rounded-lg border shadow-md py-8 px-2 sm:px-6 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:gap-8 md:gap-12 max-w-full overflow-x-auto px-1">
            {experienceTimeline.map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center flex-1 min-w-[70px] sm:min-w-[90px] md:min-w-[120px] relative z-10 min-w-0">
                {/* Gradient Border Circle */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center mb-2 border-2 border-transparent bg-clip-padding group transition-transform duration-200 hover:scale-105 shadow-lg" style={{ borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1' }}>
                  <span className="text-primary font-extrabold text-base sm:text-lg md:text-xl tracking-tight drop-shadow-sm">
                    {step.value}
                  </span>
                </div>
                <span className="mt-2 font-bold text-[11px] sm:text-sm md:text-base text-primary text-center leading-tight">
                  {step.label}
                </span>
                {/* Line between steps */}
                {idx !== experienceTimeline.length - 1 && (
                  <span className="absolute top-1/2 left-full transform -translate-y-1/2 w-6 sm:w-8 md:w-12 h-1 bg-primary/20 rounded-full z-0" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MotionDiv>
  );
} 