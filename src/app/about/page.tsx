"use client";

import { User, GraduationCap, Heart, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { MotionDiv } from "@/components/ui/motion-div";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { education, hobbies, galleryImages, aboutContent } from "@/constants/about";
import { useState } from "react";

export default function About() {
  const [showAllImages, setShowAllImages] = useState(false);
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 4);

  return (
    <main className="min-h-screen pt-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <MotionDiv variant="item">
          <SectionTitle icon={User} title="About Me" />
        </MotionDiv>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image and Basic Info */}
          <MotionDiv 
            variant="item"
            className="flex flex-col items-center lg:w-1/3"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 relative rounded-2xl overflow-hidden border border-border">
              <Image
                height={400}
                width={400}
                src="/profile.jpeg"
                alt={aboutContent.name}
                className="object-cover w-full h-full"
              />
            </div>
          </MotionDiv>

          {/* Right Column - About Content */}
          <MotionDiv 
            variant="item"
            className="lg:w-2/3"
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">{aboutContent.journey.title}</h3>
              <div className="space-y-4">
                {aboutContent.journey.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-muted-foreground leading-relaxed break-words"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Education Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={GraduationCap} title="Education" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20" />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <MotionDiv
                  key={index}
                  variant="item"
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="text-sm font-medium text-primary">{edu.year}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground font-medium">{edu.field}</p>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* Hobbies Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={Heart} title="Hobbies & Interests" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <MotionDiv
                key={index}
                variant="card"
                className="p-6 space-y-2"
              >
                <h3 className="text-lg font-medium">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Gallery Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={ImageIcon} title="Gallery" />
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayedImages.map((image, index) => (
                <MotionDiv
                  key={index}
                  variant="card"
                  className="aspect-square relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </MotionDiv>
              ))}
            </div>
            
            {galleryImages.length > 4 && (
              <div className="flex justify-start">
                <button
                  onClick={() => setShowAllImages(!showAllImages)}
                  className="bg-transparent rounded-lg px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {showAllImages ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </MotionDiv>
      </motion.div>
    </main>
  );
} 