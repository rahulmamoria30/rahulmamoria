import { LucideIcon } from "lucide-react";

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FlipCard({ icon: Icon, title, description }: FlipCardProps) {
  return (
    <div className="group relative h-[200px] perspective-1000">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
        </div>
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden bg-primary/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary/20 rotate-y-180 flex flex-col items-center justify-center text-center">
          <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
} 