import { SectionTitle } from "@/components/ui/section-title";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SectionTitle icon={Shield} title="Privacy Policy" />
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with my portfolio website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you visit the website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Communicate with you</li>
          <li>Provide you with information or services that you request from us</li>
          <li>Improve our website</li>
          <li>Monitor the usage of our website</li>
        </ul>

        <h2>Contact Information</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at rahulmamoria@gmail.com.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 