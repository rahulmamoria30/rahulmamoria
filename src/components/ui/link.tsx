import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AppLinkProps {
  href: string;
  icon?: ReactNode;
  label?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  active?: boolean;
  children?: ReactNode;
}

export function AppLink({
  href,
  icon,
  label,
  className,
  target,
  rel,
  onClick,
  active,
  children,
}: AppLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 transition-colors",
        className,
        active && "text-primary"
      )}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label && <span>{label}</span>}
      {children}
    </Link>
  );
} 