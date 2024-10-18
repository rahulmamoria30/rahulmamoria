import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import Button from "@mui/material/Button";

export default function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    const particles = [];
    const numParticles = 100;

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1,
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Check for boundary collisions and reverse velocity
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.vx = -particle.vx;
        }
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.vy = -particle.vy;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6347"; // Change to tomato color
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Resize the canvas to fill the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas(); // Set initial canvas size
    window.addEventListener("resize", resizeCanvas); // Update canvas size on window resize
    animate(); // Start animation

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative flex flex-col justify-between min-h-screen font-boska px-4 md:px-8">
      {/* Dynamic Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
      
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl capitalize font-bold text-center">
          Rahul Mamoria
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl max-w-xl text-center">
          Aspiring software engineer committed to creativity and growth.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-x-4 flex justify-center">
          <ScrollLink to="about" smooth={true} offset={-80} duration={500}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "8px 20px",
                backgroundColor: "#FF6347", 
                "&:hover": {
                  backgroundColor: "#E5533C", 
                },
                borderRadius: "8px", // Rounded corners
                fontWeight: "bold", // Bold text
              }}
            >
              About Me
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} offset={-80} duration={500}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                padding: "8px 20px",
                borderColor: "#FF6347", // Custom border color
                color: "#FF6347", // Text color for outlined button
                "&:hover": {
                  backgroundColor: "#FF6347", // Background color on hover
                  color: "#fff", // Text color on hover
                },
                borderRadius: "8px", // Rounded corners
                fontWeight: "bold", // Bold text
              }}
            >
              Hire Me
            </Button>
          </ScrollLink>
        </div>
      </div>

      {/* SVG Section at the Bottom */}
      <div className="flex flex-col items-center mb-8 md:mb-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-tomato -my-1" // Change to tomato color
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-tomato -my-1"
          style={{ animationDelay: "0.2s" }} // Delay for second arrow
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-tomato -my-1"
          style={{ animationDelay: "0.4s" }} // Delay for third arrow
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
    </section>
  );
}
