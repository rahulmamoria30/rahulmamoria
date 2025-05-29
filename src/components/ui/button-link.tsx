import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "flex items-center justify-center rounded-md font-medium transition-colors",
          {
            "bg-primary/10 hover:bg-primary/20 text-primary": variant === "primary",
            "bg-secondary/10 hover:bg-secondary/20 text-secondary": variant === "secondary",
            "border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground": variant === "outline",
            "px-3 py-1.5 text-xs": size === "sm",
            "px-4 py-2 text-sm": size === "md",
            "px-6 py-3 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonLink.displayName = "ButtonLink"; 