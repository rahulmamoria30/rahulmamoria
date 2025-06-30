"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialLinks, externalLinks, profileData } from "@/constants/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  // Mobile sidebar content (same as desktop, but vertical and icon-only for links)
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
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (completely hidden on md and below) */}
      <div
        className={`hidden md:block relative h-screen border-r border-border bg-background/50 backdrop-blur-sm transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-80"
        }`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 z-50 rounded-full border border-border bg-background p-1 hover:bg-accent"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-4 w-4" />
          ) : (
            <ChevronLeftIcon className="h-4 w-4" />
          )}
        </button>

        <div className="flex h-full flex-col items-center p-6">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={profileData.image}
              alt={profileData.name}
              width={isCollapsed ? 48 : 96}
              height={isCollapsed ? 48 : 96}
              className="rounded-full border-2 border-primary/20"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.jpg";
              }}
            />
            {!isCollapsed && (
              <div className="text-center">
                <h1 className="text-xl font-bold text-foreground">{profileData.name}</h1>
                <p className="text-sm text-muted-foreground">{profileData.role}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                  <profileData.locationIcon className="w-4 h-4" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            )}
          </div>

          <Separator className="my-6" />

          {/* Links Section */}
          <div className="w-full mb-6">
            <div className="space-y-4">
              {/* External Links */}
              {externalLinks.map((link, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {link.url.startsWith('/') ? (
                        <Link
                          href={link.url}
                          className={`flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors ${
                            pathname === link.url ? "text-primary" : ""
                          }`}
                        >
                          <link.icon className='h-5 w-5' />
                          {!isCollapsed && <p className="text-md font-medium">{link.title}</p>}
                        </Link>
                      ) : (
                        <Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <link.icon className='h-5 w-5' />
                          {!isCollapsed && <p className="text-md font-medium">{link.title}</p>}
                        </Link>
                      )}
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="left">
                        <p>{link.title}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          <div className={`mt-auto ${isCollapsed ? "flex flex-col gap-6" : "flex gap-4"}`}>
            <TooltipProvider>
              {socialLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className='h-5 w-5' />
                    </Link>
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
      {/* Mobile Sidebar Trigger Button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="fixed top-4 left-4 z-50 flex items-center justify-center rounded-full border border-border bg-background p-3 shadow-lg hover:bg-accent transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="h-7 w-7" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 max-w-xs w-64">
            {mobileSidebarContent}
          </SheetContent>
        </Sheet>
      </div>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden justify-around items-center bg-background/90 border-t border-border py-2 backdrop-blur-sm">
        {/* External Links as icons */}
        {externalLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className={`flex flex-col items-center text-muted-foreground hover:text-primary transition-colors ${pathname === link.url ? "text-primary" : ""}`}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <link.icon className="h-6 w-6" />
          </Link>
        ))}
        {/* Social Links as icons */}
        {socialLinks.map((link, idx) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </>
  );
} 