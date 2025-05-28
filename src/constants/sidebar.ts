import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  StarIcon,
  ReaderIcon,
  CodeIcon,
  Pencil1Icon,
  GlobeIcon,
  InstagramLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export const profileData = {
  name: "Rahul Mamoria",
  role: "Full Stack Developer",
  location: "Hyderabad, India",
  locationIcon: GlobeIcon,
  image: "/profile.jpeg",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rahulmamoria",
    icon: GitHubLogoIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahulmamoria",
    icon: LinkedInLogoIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/rahulmamoria",
    icon: TwitterLogoIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rahulmamoria",
    icon: InstagramLogoIcon,
  },
];

export const externalLinks = [
  {
    title: "About Me",
    url: "/about",
    icon: PersonIcon,
  },
  {
    title: "Hackathon",
    url: "/hackathon",
    icon: StarIcon,
  },
  {
    title: "My Blogs",
    url: "https://rahulmamoria.hashnode.dev/",
    icon: Pencil1Icon,
  },
  // {
  //   title: "Latest Tech Trends",
  //   url: "https://openai.com/index/generative-models/",
  //   icon: CodeIcon,
  // },
  // {
  //   title: "Exploring V0 SDK",
  //   url: "https://vercel.com/blog/ai-sdk-3-generative-ui",
  //   icon: ReaderIcon,
  // },
]; 