import Link from "next/link";
import Image from "next/image";

interface CodingProfileProps {
  url: string;
  title: string;
  imagePath: string;
  className?: string;
}

export function CodingProfile({ url, title, imagePath, className }: CodingProfileProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-colors ${className}`}
      aria-label={`${title} Profile`}
    >
      <Image
        src={imagePath}
        alt={title}
        height={24}
        width={24}
        className="mr-2"
      />
      <span>{title}</span>
    </Link>
  );
} 