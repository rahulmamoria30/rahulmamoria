import { useState, useEffect } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"; // Icon for system theme
import { useTheme, themes } from "@/ThemeContext";
// import "./header.css";
export default function MainHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About me", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact me", to: "contact" }
  ];

  const handleThemeChange = (newTheme) => {
    console.log("newTheme:", newTheme);
    if (newTheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(mediaQuery.matches ? themes.dark : themes.light);
    } else if (themes[newTheme]) {
      setTheme(themes[newTheme]);
    } else {
      console.error("Invalid theme:", newTheme);
      setTheme(themes.light);
    }
    setAnchorEl(null);
  };

  return (
    <header
      className={`flex fixed w-full items-center justify-between ${
        isScrolled
          ? `backdrop-blur-md ${theme.headerBackground}/80 shadow-lg`
          : theme.headerBackground
      } top-0 left-0 z-10 px-4 md:px-8 lg:px-24 py-4 transition-all duration-300 ease-in-out font-boska`}
    >
    <div
        className={`p-1 cursor-pointer ${
          isScrolled ? "flip-animation" : ""
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* Commented out image */}
        {/* 
        <Image
          src="/images/Rahul.png"
          alt="Logo image"
          width={175}
          height={60}
        /> 
        */}
        {/* New logic with 'R' letter */}
        <div className="text-5xl font-bold ">R</div>
      </div>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <ScrollLink
                className={`text-xl font-light relative ${
                  router.pathname === `/${item.to}` ? "underline" : ""
                }`}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Icon with Dropdown */}
        <div>
          <IconButton
            onClick={(event) => setAnchorEl(event.currentTarget)}
            color="inherit"
            
          >
            {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
           
          >
            <MenuItem onClick={() => handleThemeChange("light")} >
              <ListItemIcon>
                <LightModeIcon />
              </ListItemIcon>
              <ListItemText primary="Light" />
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange("dark")}>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText primary="Dark" />
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange("system")}>
              <ListItemIcon>
                <SettingsBrightnessIcon />
              </ListItemIcon>
              <ListItemText primary="System" />
            </MenuItem>
          </Menu>
        </div>
      </nav>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden focus:outline-none"
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 right-0 bg-[#34373b] shadow-md w-[100%] h-[100vh]">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  className={`text-xl font-light relative ${
                    router.pathname === `/${item.to}` ? "underline" : ""
                  }`}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
