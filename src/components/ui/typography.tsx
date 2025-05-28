import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
        {...props}
      />
    );
  }
);
TypographyH1.displayName = "TypographyH1";

export const TypographyP = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      />
    );
  }
);
TypographyP.displayName = "TypographyP"; 