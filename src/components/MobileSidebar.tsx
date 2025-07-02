import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { AppLink } from "@/components/ui/link";
import { externalLinks, socialLinks, profileData } from "@/constants/sidebar";
import { Dispatch, SetStateAction } from "react";

interface MobileSidebarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}

export const MobileSidebar = ({ setIsOpen, pathname }: MobileSidebarProps) => {
  return (
    <div className="flex flex-col items-center p-6 h-full">
      <div className="flex flex-col items-center gap-4 mb-6">
        <Image
          src={profileData.image}
          alt={profileData.name}
          width={64}
          height={64}
          className="rounded-full border-2 border-primary/20"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.jpg";
          }}
        />
        <div className="text-center">
          <h1 className="text-lg font-bold text-foreground">{profileData.name}</h1>
          <p className="text-xs text-muted-foreground">{profileData.role}</p>
          <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
            <profileData.locationIcon className="w-4 h-4" />
            <span>{profileData.location}</span>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 w-full mb-6">
        {externalLinks.map((link, idx) => (
          <AppLink
            key={idx}
            href={link.url}
            icon={<link.icon className="h-5 w-5" />}
            label={link.title}
            className="text-muted-foreground hover:text-primary text-sm"
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            onClick={() => setIsOpen(false)}
            active={pathname === link.url}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {socialLinks.map((link) => (
          <AppLink
            key={link.label}
            href={link.href}
            icon={<link.icon className="h-5 w-5" />}
            className="text-muted-foreground hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  );
};