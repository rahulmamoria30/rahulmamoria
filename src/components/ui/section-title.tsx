"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function SectionTitle({ icon: Icon, title, className }: SectionTitleProps) {
  return (
    <div className={cn(
      "flex items-center gap-5 w-fit group",
      className
    )}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-colors duration-300" />
        <div className="relative flex items-center justify-center h-10 w-10 rounded-full border border-primary/10 bg-background/50 backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-300">
          <Icon className="h-4 w-4 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
        </div>
      </div>
      <div className="relative">
        <h1 className="text-xl font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
          {title}
        </h1>
        <div className="absolute -bottom-0.5 left-0 h-[1px] w-8 bg-gradient-to-r from-primary/30 to-transparent group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
} 