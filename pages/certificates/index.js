import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CertificatePage = () => {
  // Sample images for the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const images = [
    '/images/gcp_certificate.jpg',
    '/images/React_certificate.jpg',
    '/images/Javascript_certificate.jpg',
    '/images/Typescript_certificate.jpg',
    '/images/Angular_certificate.jpg',
    '/images/Unit_testing.jpg',
    '/images/CSS_certificate.jpg',
  ];

  // Update the isLargeScreen state based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint in Tailwind is 1024px
    };

    // Call once on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isLargeScreen) {
        // For large screens, show 2 images, so account for the possibility of having an odd number of images.
        return prevIndex === images.length - 2 || prevIndex === images.length - 1
          ? 0
          : prevIndex + 2;
      } else {
        // For small screens, move 1 step at a time
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isLargeScreen) {
        // For large screens, show 2 images, so account for the possibility of having an odd number of images.
        return prevIndex === 0 ? images.length - (images.length % 2 === 0 ? 2 : 1) : prevIndex - 2;
      } else {
        // For small screens, move 1 step at a time
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="font-boska px-5 sm:px-6 md:px-8 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  py-6 md:py-12 lg:py-16">
        Certifications
      </h1>

      <div className="relative mx-auto px-4 sm:px-8 md:px-12 lg:px-20 max-w-full md:max-w-3xl lg:max-w-4xl">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border hover:border-gray-100  border-gray-300 hover:text-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div className="flex justify-center items-center">
    
            {isLargeScreen ? (
              <div className="flex gap-4">
                <img
                  src={images[currentIndex]}
                  alt={`Certificate ${currentIndex + 1}`}
                  className="w-1/2 h-auto rounded-lg shadow-lg"
                />
                <img
                  src={images[(currentIndex + 1) % images.length]} 
                  alt={`Certificate ${currentIndex + 2}`}
                  className="w-1/2 h-auto rounded-lg shadow-lg"
                />
              </div>
            ) : (
              <img
                src={images[currentIndex]}
                alt={`Certificate ${currentIndex + 1}`}
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border hover:border-gray-100  border-gray-300 hover:text-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;
