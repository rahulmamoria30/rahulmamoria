"use client";

import { useEffect, useState } from "react";
import { User, Code2, Sparkles, Rocket, Zap, Cpu, ExternalLink, Code, Server } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { FlipCard } from "@/components/ui/flip-card";

interface TrendCard {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  link: string;
}

const trendCards: TrendCard[] = [
  {
    icon: Code2,
    title: "Latest Tech Trends",
    description: "Exploring cutting-edge technologies and frameworks shaping the future of web development",
    color: "from-blue-500 to-blue-600",
    link: "https://github.com/rahulmamoria/tech-trends"
  },
  {
    icon: Sparkles,
    title: "VO SDK Kit",
    description: "A comprehensive SDK for building voice-enabled applications with advanced features",
    color: "from-purple-500 to-purple-600",
    link: "https://github.com/rahulmamoria/vo-sdk-kit"
  }
];

const skillCards = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks like React, Next.js, and TypeScript."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications and APIs using Node.js, Python, and various database technologies."
  }
];

export function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center mt-24 scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start flex-grow w-full max-w-7xl mx-auto">
        <div className="w-full">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <SectionTitle icon={User} title="Software Engineer" />

              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Hi, I'm Rahul 👋
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  Building modern web applications with a focus on user experience and performance.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {skillCards.map((card, index) => (
                  <FlipCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 