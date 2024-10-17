import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { Button, Dropdown, Drawer, Menu } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  BulbOutlined,
  MenuOutlined,
  CloseOutlined
} from "@ant-design/icons"; // Ant Design icons
import { useTheme, themes } from "@/ThemeContext";

export default function MainHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [newTheme, setNewTheme] = useState("dark"); // State for newTheme
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  console.log("theme :", theme);

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

  const handleThemeChange = (newThemeValue) => {
    console.log("newTheme:", newThemeValue);
    setNewTheme(newThemeValue); // Update newTheme state
    if (newThemeValue === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(mediaQuery.matches ? themes.dark : themes.light);
    } else if (themes[newThemeValue]) {
      setTheme(themes[newThemeValue]);
    } else {
      console.error("Invalid theme:", newThemeValue);
      setTheme(themes.light);
    }
  };

  const themeMenu = (
    <Menu
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <Menu.Item
        key="light"
        onClick={() => handleThemeChange("light")}
        style={{
          color: theme.text,
          fontSize: "18px"
        }}
      >
        <SunOutlined className="mr-2" />
        Light
      </Menu.Item>
      <Menu.Item
        key="dark"
        onClick={() => handleThemeChange("dark")}
        style={{
          color: theme.text,
          fontSize: "18px"
        }}
      >
        <MoonOutlined className="mr-2" />
        Dark
      </Menu.Item>
      <Menu.Item
        key="system"
        onClick={() => handleThemeChange("system")}
        style={{
          color: theme.text,
          fontSize: "18px"
        }}
      >
        <BulbOutlined className="mr-2" />
        System
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      className={`flex fixed w-full items-center justify-between ${
        isScrolled
          ? `backdrop-blur-md ${theme.headerBackground}/80 shadow-lg`
          : theme.headerBackground
      } top-0 left-0 z-10 px-4 md:px-8 lg:px-24 py-4 transition-all duration-300 ease-in-out font-boska`}
    >
      <div
        className={`p-1 cursor-pointer ${isScrolled ? "flip-animation" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="text-5xl font-bold">R</div>
      </div>

      <div className="ml-auto flex items-center gap-10">
        <nav className="hidden md:flex gap-10">
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
        </nav>
        <div className="pr-8">
          <Dropdown overlay={themeMenu} trigger={["hover"]}>
            <Button
              className={`border-none hover:text-gray-500`}
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                color: theme.text,
                height: "30px"
              }}
            >
              {newTheme === "dark" ? (
                <SunOutlined
                  className={` ${theme.text}`}
                  style={{ fontSize: "24px" }}
                />
              ) : (
                <MoonOutlined
                  className={` ${theme.text}`}
                  style={{ fontSize: "24px" }}
                />
              )}
            </Button>
          </Dropdown>
        </div>
      </div>

      <button
        onClick={toggleMobileMenu}
        className={`md:hidden focus:outline-none  text-${theme.text}`}
      >
        {isMobileMenuOpen ? (
          <CloseOutlined style={{ fontSize: "24px", color: theme.text }} />
        ) : (
          <MenuOutlined style={{ fontSize: "24px", color: theme.text }} />
        )}
      </button>

      <Drawer
        title={
          <div className="flex justify-between w-full">
            <span style={{ color: theme.text }}>Menu</span>
            {/* Close icon on the right */}
            <CloseOutlined
              onClick={closeMobileMenu}
              style={{
                fontSize: "24px",
                color: theme.text,
                cursor: "pointer"
              }}
            />
          </div>
        }
        placement="right"
        closable={false} // Disable the default close button since we added custom
        open={isMobileMenuOpen}
        style={{
          padding: "16px 0px",
          backgroundColor: theme.background,
          color: theme.text
        }}
      >
        <ul className="flex flex-col items-left gap-4 py-4">
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
      </Drawer>
    </header>
  );
}
