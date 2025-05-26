export function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      {/* Main SVG Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" fill="#FFD700" opacity="0.2" />
        <circle cx="150" cy="50" r="40" fill="#FF6347" opacity="0.2" />
        <circle cx="50" cy="150" r="40" fill="#FFA500" opacity="0.2" />
        <circle cx="150" cy="150" r="40" fill="#FFD700" opacity="0.2" />
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          stroke="#FF6347"
          strokeWidth="4"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="0"
          x2="0"
          y2="200"
          stroke="#FFD700"
          strokeWidth="4"
          opacity="0.2"
        />
      </svg>

      {/* Additional floating elements */}
      <svg
        className="absolute top-1/4 right-1/4 w-1/2 h-1/2 opacity-5 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="60" fill="#4F46E5" opacity="0.15" />
        <path
          d="M100 40 L160 100 L100 160 L40 100 Z"
          fill="#FFD700"
          opacity="0.15"
        />
      </svg>

      {/* Blur effects */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute right-0 bottom-0 -z-10 m-auto h-[210px] w-[210px] rounded-full bg-secondary/10 blur-[80px]" />
    </div>
  );
} 