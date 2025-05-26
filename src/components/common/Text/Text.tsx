import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <p className={cn("text-lg text-gray-400 mt-4 max-w-2xl", className)}>
      {children}
    </p>
  );
} 