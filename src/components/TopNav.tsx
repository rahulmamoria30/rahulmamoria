"use client";

import { Home, Briefcase, FolderGit2, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AppLink } from "@/components/ui/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/#home", icon: Home, label: "Home" },
  { href: "/#experience", icon: Briefcase, label: "Experience" },
  { href: "/#projects", icon: FolderGit2, label: "Projects" },
  { href: "/#contact", icon: Mail, label: "Contact" },
  
];

export function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState(pathname);

  useEffect(() => {
    // Handle initial hash
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveHash(window.location.hash);
      }
    }

    // Handle hash changes
    const handleHashChange = () => {
      if (typeof window !== 'undefined') {
        setActiveHash(window.location.hash || pathname);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      // If we're not on the home page, first navigate to home
      if (pathname !== "/") {
        router.push(href);
        return;
      }
      const element = document.querySelector(href.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        router.push(href.replace("/", ""));
        setActiveHash(href.replace("/", ""));
      }
    } else {
      setActiveHash(href);
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-40 flex justify-center sm:justify-end px-2 sm:px-8 pointer-events-none">
      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 pointer-events-auto">
        {navItems.map((item) => (
          <AppLink
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              (activeHash === item.href || activeHash === item.href.replace("/", "")) && "bg-accent text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </AppLink>
        ))}
        <div className="h-4 w-px bg-border mx-2" />
        <ThemeToggle />
      </div>
      {/* Mobile Nav: icons only, centered */}
      <div className="sm:hidden flex items-center gap-4 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-2 pointer-events-auto">
        {navItems.map((item) => (
          <AppLink
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "flex items-center justify-center p-2 rounded-full transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              (activeHash === item.href || activeHash === item.href.replace("/", "")) && "bg-accent text-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
          </AppLink>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
} 