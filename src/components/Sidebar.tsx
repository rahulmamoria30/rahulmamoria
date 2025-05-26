"use client";

import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <div
      className={`relative h-screen border-r border-border bg-background/50 backdrop-blur-sm transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-80"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 z-50 rounded-full border border-border bg-background p-1 hover:bg-accent"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      <div className="flex h-full flex-col items-center p-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/profile.jpeg"
            alt="Rahul Mamoria"
            width={isCollapsed ? 48 : 96}
            height={isCollapsed ? 48 : 96}
            className="rounded-full border-2 border-primary/20"
          />
          {!isCollapsed && (
            <div className="text-center">
              <h1 className="text-xl font-bold text-foreground">Rahul Mamoria</h1>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Social Links */}
        <div className={`mt-auto ${isCollapsed ? "flex flex-col gap-6" : "flex gap-4"}`}>
          <TooltipProvider>
            {socialLinks.map((link) => (
              <Tooltip key={link.label}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side={isCollapsed ? "right" : "top"}>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
} 