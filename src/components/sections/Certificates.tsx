"use client";
import Image from "next/image";

const certificates = [
  {
    title: "Google Cloud Digital Leader",
    image: "/images/certificates/gcp_certificate.jpg",
    issuer: "Google Cloud"
  },
  {
    title: "React Developer Certification",
    image: "/images/certificates/React_certificate.jpg",
    issuer: "Udemy"
  },
  {
    title: "Angular Developer Certification",
    image: "/images/certificates/Angular_certificate.jpg",
    issuer: "Udemy"
  },
  { 
    title: "Jest Unit Testing",
    image: "/images/certificates/unit_testing.jpg",
    issuer: "Udemy"
  },
  {
    title: "Typescript Unit Testing",
    image: "/images/certificates/Typescript_certificate.jpg",
    issuer: "Udemy"
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* <SectionTitle icon={Award} title="Certificates" /> */}
        
        <div className="mt-12 relative">
          <div className="flex animate-scroll gap-8">
            {/* First set of certificates */}
            {certificates.map((cert, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border"
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
            
            {/* Duplicate set for continuous scroll */}
            {certificates.map((cert, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border"
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 