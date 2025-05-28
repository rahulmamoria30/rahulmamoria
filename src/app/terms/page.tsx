import { SectionTitle } from "@/components/ui/section-title";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SectionTitle icon={FileText} title="Terms of Service" />
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using this portfolio website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2>Use License</h2>
        <p>
          Permission is granted to temporarily view the materials (information or software) on this website for personal, non-commercial transitory viewing only.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>Limitations</h2>
        <p>
          In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
        </p>

        <h2>Revisions and Errata</h2>
        <p>
          The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on the website are accurate, complete, or current.
        </p>

        <h2>Links</h2>
        <p>
          I have not reviewed all of the sites linked to this website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by me of the site.
        </p>

        <h2>Modifications</h2>
        <p>
          I may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 