"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { externalLinks, socialLinks, profileData } from "@/constants/sidebar";
import { Home, Briefcase, FolderGit2, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/#home", icon: Home, label: "Home" },
  { href: "/#experience", icon: Briefcase, label: "Experience" },
  { href: "/#projects", icon: FolderGit2, label: "Projects" },
  { href: "/#contact", icon: Mail, label: "Contact" },
];

export function MobileNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);

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

  // Sidebar sheet content for mobile
  const mobileSidebarContent = (
    <div className="flex flex-col items-center p-6 h-full">
      <div className="flex flex-col items-center gap-4 mb-6">
        <Image
          src={profileData.image}
          alt={profileData.name}
          width={64}
          height={64}
          className="rounded-full border-2 border-primary/20"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.jpg";
          }}
        />
        <div className="text-center">
          <h1 className="text-lg font-bold text-foreground">{profileData.name}</h1>
          <p className="text-xs text-muted-foreground">{profileData.role}</p>
          <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
            <profileData.locationIcon className="w-4 h-4" />
            <span>{profileData.location}</span>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 w-full mb-6">
        {externalLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className={`flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors ${pathname === link.url ? "text-primary" : ""}`}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            onClick={() => setIsOpen(false)}
          >
            <link.icon className="h-5 w-5" />
            <span className="text-sm">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      {/* Top bar: sidebar trigger (left) + nav icons (center) + theme toggle (right) */}
      <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center px-2 pointer-events-none">
        {/* Sidebar trigger */}
        <div className="absolute left-4 pointer-events-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="flex items-center justify-center rounded-full border border-border bg-background p-3 shadow-lg hover:bg-accent transition-colors"
                aria-label="Open sidebar"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 max-w-xs w-64">
              {mobileSidebarContent}
            </SheetContent>
          </Sheet>
        </div>
        {/* Nav icons centered */}
        <div className="flex items-center gap-4 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-2 pointer-events-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${
                (activeHash === item.href || activeHash === item.href.replace("/", "")) ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
        {/* Theme toggle at right */}
        <div className="absolute right-4 pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
} 