import { ArrowRight } from "lucide-react";

interface TrendsCardProps {
  title: string;
  gradient: string;
  onClick?: () => void;
}

export default function TrendsCard({ title, gradient, onClick }: TrendsCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative group flex items-center justify-center w-full sm:w-48 h-36 ${gradient} rounded-lg cursor-pointer shadow-lg transition-transform hover:scale-105`}
    >
      <ArrowRight className="absolute top-3 right-3 transform -rotate-45 text-white group-hover:text-gray-300 text-sm" />
      <h2 className="text-md text-gray-200 font-semibold group-hover:text-white">
        {title}
      </h2>
    </div>
  );
} 