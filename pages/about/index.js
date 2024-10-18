import { Mail, MapPin } from "lucide-react";
import { LinkedIn, Instagram, GitHub } from "@mui/icons-material";
import Image from "next/image";
import Title from "@/components/Titile/Title";
export default function AboutPage() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden px-5 md:px-8 md:py-10 font-boska">
      {/* <h1 className=' text-4xl md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16'>About me</h1>
       */}
      <Title title="About me" subtitle="who I am" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full ">
        {/* Profile Image */}
        <div className="relative rounded-lg overflow-hidden">
          {/* Border on the left and bottom */}
          <div className="absolute left-0 bottom-0 w-3/4 h-3/4 border-l-4 border-b-4 border-[#FF6347] rounded-bl-lg pointer-events-none"></div>

          {/* Image with a larger gap between the border and image */}
          <div className="relative z-10 m-6">
            {" "}
            {/* Increased margin for more gap */}
            <Image
              width={400}
              height={400}
              src="/images/Profileipic.jpeg"
              alt="Rahul Mamoria"
              className="object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-3/5 flex flex-col justify-between">
          <div>
            {/* Name and Role */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-8 font-bold tracking-tight ">
              Rahul Mamoria
            </h1>
            <p className="mt-2 text-lg md:text-xl text-[#FF6347]">
              Software Engineer
            </p>

            {/* Location */}
            <div className="mt-2 flex items-center ">
              <MapPin className="h-5 w-5 text-[#FF6347] mr-2" />
              <span className="text-base md:text-lg">Hyderabad, India</span>
            </div>

            {/* Bio */}
            <p className="mt-4  leading-relaxed text-base md:text-lg">
              Hello! I'm a passionate Software Engineer based in India. With a
              strong foundation in web development, I specialize in building
              dynamic applications using Next.js and TypeScript. I also have
              experience working with Node.js and Express.js for backend
              development, along with Java and Spring Boot for enterprise-level
              applications. I am committed to creating efficient, user-friendly
              software solutions and continuously improving my skills in the
              ever-evolving tech landscape.
            </p>
            <p className="mt-4  leading-relaxed text-base md:text-lg">
              I work at Grid Dynamics, where I contribute to real-world
              projects, leveraging my skills to create impactful solutions and
              drive innovation.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="mailto:rahulmamoria@gmail.com"
                className="text-[#FF6347] hover:ttext-[#E5533C]"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/rahulmm07"
                className="text-[#FF6347] hover:ttext-[#E5533C]"
              >
                <LinkedIn className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/rahul_rm__/"
                className="text-[#FF6347] hover:ttext-[#E5533C]"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/rahulmamoria30"
                className="text-[#FF6347] hover:ttext-[#E5533C]"
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
