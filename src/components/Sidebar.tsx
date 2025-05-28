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

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`relative h-screen border-r border-border bg-background/50 backdrop-blur-sm transition-all duration-300 ${
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
                    <link.icon className='h-6 w-6' />
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
  );
} 