"use client";

import { Home, Briefcase, FolderGit2, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/experience", icon: Briefcase, label: "Experience" },
    { href: "/projects", icon: FolderGit2, label: "Projects" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-primary hover:scale-105"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 