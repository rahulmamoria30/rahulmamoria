import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FormItemProps {
  label: string;
  id: string;
  children: ReactNode;
  className?: string;
}

export function FormItem({ label, id, children, className }: FormItemProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
} 