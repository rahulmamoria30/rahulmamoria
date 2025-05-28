import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rahul Mamoria. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/rahulmamoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/rahulmamoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/rahulmamoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <TwitterLogoIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 