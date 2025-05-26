"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

export function Contact() {
  return (
    <div className="flex flex-col items-start flex-grow w-full">
      <div className="w-full">
        <div className="space-y-6">
          <SectionTitle icon={Mail} title="Contact" />
          
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-8">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:rahulmamoria@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      rahulmamoria@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">Send Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 