import { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { LinkedIn, Instagram, GitHub } from "@mui/icons-material";
import Image from "next/image";
import Title from "@/components/Title/Title";
import Link from "next/link"; // Importing the Link component from Next.js

const dotsData = Array(5).fill("•"); // Dynamic dots data

export default function AboutPage() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden px-5 sm:px-8 md:py-10 font-boska">
      <Title title="About me" subtitle="who I am" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">
        {/* Profile Image Container */}
        <div className="relative w-full md:w-1/3 lg:w-2/5">
          <div className="relative  rounded-lg overflow-hidden border border-transparent p-6">
            <div className="absolute inset-0 border-l-4 border-b-4 border-[#FF6347] rounded-bl-lg pointer-events-none">
              <div className="absolute left-0 bottom-0 w-3/4 h-3/4 pointer-events-none"></div>
            </div>

            <div className="relative z-10">
              <Image
                width={400}
                height={400}
                src="/images/Profileipic.jpeg"
                alt="Rahul Mamoria"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="flex flex-col justify-between w-full md:w-2/3 lg:w-3/5">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-8 font-bold tracking-tight ">
              Rahul Mamoria
            </h1>
            <p className="mt-2 text-lg md:text-xl text-[#FF6347]">
              Software Engineer
            </p>

            <div className="mt-2 flex items-center ">
              <MapPin className="h-5 w-5 text-[#FF6347] mr-2" />
              <span className="text-base md:text-lg">Hyderabad, India</span>
            </div>

            <p className="mt-4 leading-relaxed text-base md:text-lg">
              Hello! I'm a passionate Software Engineer based in India. I
              specialize in building dynamic applications with Next.js and
              TypeScript, and I have experience with Node.js, Express.js, Java,
              and Spring Boot. I am dedicated to creating efficient,
              user-friendly software solutions and continuously improving my
              skills in the tech landscape.
            </p>
            <p className="mt-4 leading-relaxed text-base md:text-lg">
              Currently, I work at Grid Dynamics, where I contribute to
              real-world projects and leverage my skills to drive innovation.
            </p>

            <div className="mt-4 leading-relaxed text-base md:text-lg font-bold">
              Always on lookout for efficient projects to work on.....!
              <p>
                <Link
                  href="https://drive.google.com/file/d/1kr8yEE6b1UI9krXy5FaxdtxI5XU0Guxx/view?usp=sharing" // Update the path to your resume
                  className="text-[#FF6347] hover:text-[#E5533C] underline"
                  target="_blank"
                  rel="noopener noreferrer" // Recommended for external links
                >
                  Resume Link
                </Link>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="mailto:rahulmamoria@gmail.com"
                className="text-[#FF6347] hover:text-[#E5533C]"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/rahulmm07"
                className="text-[#FF6347] hover:text-[#E5533C]"
              >
                <LinkedIn className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/rahul_rm__/"
                className="text-[#FF6347] hover:text-[#E5533C]"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/rahulmamoria30"
                className="text-[#FF6347] hover:text-[#E5533C]"
              >
                <GitHub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
