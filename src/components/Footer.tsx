"use client";
import { AppLink } from "@/components/ui/link";
import { socialLinks } from "@/constants/sidebar";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Rahul Mamoria. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
              <link.icon className="h-5 w-5" />
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 