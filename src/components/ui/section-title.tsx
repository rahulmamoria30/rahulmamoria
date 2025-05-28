"use client";

import { LucideIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

export function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 bg-background/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 w-fit shadow-sm">
      <Avatar className="h-7 w-7 bg-primary/10 flex items-center justify-center">
        <Icon className="h-4 w-4 text-primary" />
      </Avatar>
      <h1 className="text-3xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {title}
      </h1>
    </div>
  );
} 