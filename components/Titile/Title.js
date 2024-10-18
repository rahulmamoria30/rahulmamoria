import { useTheme } from "@/ThemeContext";

export default function Title({ title, subtitle }) {
  const { theme } = useTheme();
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl  italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] via-[#FF6347] to-[#DC143C] hover:scale-105 transition-transform duration-300 ease-in-out">
        {title}
      </h1>
      <div className="flex items-center justify-center py-0"> 
        <hr className="flex-grow border-t border-gray-300" />
        <span
          className={`mx-4 text-md md:text-lg lg:text-xl font-semibold`}
          style={{
            color: theme.text,
          }}
        >
          {subtitle}
        </span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
    </div>
  );
}
