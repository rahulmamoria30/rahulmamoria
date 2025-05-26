import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Mamoria",
  description: "Portfolio website of Rahul Mamoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Background />
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1 h-screen overflow-y-auto">
            <TopNav />
            <div className="container mx-auto px-8 py-12">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
