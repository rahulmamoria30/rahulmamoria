"use client";

import { Link as NextLink, Mail, MapPin, Instagram, Send, X } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { useState } from "react";
import { sendContactForm, type ContactFormData } from "@/api/contact";
import { socialLinks } from "@/constants/sidebar";
import Link from "next/link";
import { FormItem } from "@/components/ui/form-item";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await sendContactForm(formData);
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setStatus({ type: null, message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="pb-24 space-y-6 scroll-mt-24">
      <SectionTitle icon={Mail} title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="text-start space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Write me an email at</h4>
                  <Link
                    href="mailto:rahulmamoria@gmail.com"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    rahulmamoria07@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                  <span className="text-base font-medium text-foreground">
                    Hyderabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                <TooltipProvider>
                  {socialLinks.map((link) => (
                    <Tooltip key={link.label}>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-background/50 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          <link.icon className="w-5 h-5" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormItem label="Name" id="name">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </FormItem>
            
            <FormItem label="Email" id="email">
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </FormItem>
            
            <FormItem label="Message" id="message">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message"
              />
            </FormItem>

            {status.message && (
              <div
                className={`p-3 rounded-md ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}
            
            <div className="flex justify-between gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                className="w-32"
              >
                Send
                <Send className="w-4 h-4 ml-2" />
              </Button>
              <Button
                type="button"
                onClick={handleReset}
                variant="outline"
              >
                Reset
                <X className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 