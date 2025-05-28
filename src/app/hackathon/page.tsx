"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Trophy, ArrowLeft, Image as ImageIcon, Share2, Code2, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import { hackathonImages, linkedinPosts, recruitmentSteps } from "@/constants/hackathon";

export default function HackathonPage() {
  return (
    <main className="min-h-screen pt-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
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

        <SectionTitle icon={Trophy} title="Hackathon Diaries" />

        {/* Hackathon Achievement */}
        <section className="mt-12 mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
                  <Trophy className="text-3xl text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Grid Dynamics Hackathon 2025</h2>
                  <p className="text-lg text-muted-foreground mt-1">1st Place Winners</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our team (Binary Bandits) emerged victorious in the Grid Dynamics Hackathon 2025, showcasing innovative solutions and technical excellence.
                We developed an AI-powered recruitment platform.
              </p>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="mb-16">
          <SectionTitle icon={Code2} title="Recruitment Process Flow" />
          <div className="mt-8 space-y-8">
            {recruitmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < recruitmentSteps.length - 1 && (
                  <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-border" />
                )}
                
                <div className="flex gap-6">
                  {/* Icon circle */}
                  <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <SectionTitle icon={ImageIcon} title="Photo Gallery" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border"
              >
                <div className="relative h-48">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LinkedIn Posts */}
        <section>
          <SectionTitle icon={Share2} title="LinkedIn Updates" />
          <div className="mt-8 space-y-6">
            {linkedinPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <FaLinkedin className="text-2xl text-blue-600" />
                    </div>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">{post.content}</p>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
} 