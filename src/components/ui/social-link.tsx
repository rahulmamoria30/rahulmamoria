import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export function SocialLink({ icon: Icon, href, label }: SocialLinkProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon className="w-6 h-6" />
      </a>
    </Button>
  );
} 