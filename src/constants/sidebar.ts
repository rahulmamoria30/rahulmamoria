import { 
  GitHubLogoIcon, 
  LinkedInLogoIcon, 
  TwitterLogoIcon,
  StarIcon,
  ReaderIcon,
  CodeIcon,
  Pencil1Icon
} from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";

export const profileData = {
  name: "Rahul Mamoria",
  role: "Full Stack Developer",
  location: "Hyderabad, India",
  image: "/profile.jpeg",
  locationIcon: MapPin
};

export const socialLinks = [
  {
    icon: GitHubLogoIcon,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: LinkedInLogoIcon,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: TwitterLogoIcon,
    href: "https://twitter.com/yourusername",
    label: "X (Twitter)",
  },
];

export const externalLinks = [
  {
    title: "Hackathon Diaries",
    url: "/hackathon",
    icon: StarIcon,
  }, 
  {
    title: "My Blogs",
    url: "https://rahulmamoria.hashnode.dev/",
    icon: Pencil1Icon,
  },
  {
    title: "Latest Tech Trends",
    url: "https://openai.com/index/generative-models/",
    icon: CodeIcon,
  },
  {
    title: "Exploring V0 SDK",
    url: "https://vercel.com/blog/ai-sdk-3-generative-ui",
    icon: ReaderIcon,
  },
]; 