import React, { useState } from "react";
import TravelWorldIcon from "../travel-world";
import { navItem, buttonStyles } from "./header-cva";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useTheme } from "@/components/theme/theme-provider";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { theme } = useTheme();
  const headerBgColor = theme == "dark" ? "bg-gray-400" : "bg-white";

  return (
    <header className={`${headerBgColor} shadow-md font-semibold`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <TravelWorldIcon />
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#home" className={navItem()}>
            Home
          </a>
          <a href="#about" className={navItem()}>
            About
          </a>
          <a href="#tours" className={navItem()}>
            Tours
          </a>
          <a href="#login" className={navItem()}>
            Login
          </a>
        </nav>
        <div className="hidden md:block">
          <a href="#register" className={buttonStyles()}>
            Register
          </a>
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none hover:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4 text-gray-600">
            <a
              href="#home"
              className={navItem()}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className={navItem()}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#tours"
              className={navItem()}
              onClick={() => setIsMenuOpen(false)}
            >
              Tours
            </a>
            <a
              href="#login"
              className={navItem()}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="#register"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
