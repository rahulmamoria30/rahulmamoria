"use client";

import { Home, Briefcase, FolderGit2, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#projects", icon: FolderGit2, label: "Projects" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export function TopNav() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    // Handle initial hash
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveHash(window.location.hash);
      }
    }

    // Handle hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      setActiveHash(href);
    }
  };

  return (
    <nav className="fixed top-6 right-8 z-50">
      <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              activeHash === item.href && "bg-accent text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
} 