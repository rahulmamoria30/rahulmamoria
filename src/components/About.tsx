"use client";

import { Github, Linkedin, Twitter, MapPin } from "lucide-react";
import Image from "next/image";
import { SocialLink } from "@/components/ui/social-link";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub Profile"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn Profile"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter Profile"
  }
];

export function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-24 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/profile.jpeg"
                alt="Rahul Mamoria"
                width={120}
                height={120}
                className="rounded-full border-2 border-primary/20"
              />
              <div className="text-center">
                <h1 className="text-2xl font-bold text-foreground">Rahul Mamoria</h1>
                <p className="text-sm text-muted-foreground mt-1">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Passionate about building modern web applications and creating
                exceptional user experiences. Currently focused on React, Next.js,
                and TypeScript.
              </p>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.href}
                  icon={link.icon}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 