import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/AM.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Technologies", to: "technologies" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={logo}
            alt="AM Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
        </ScrollLink>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-blue-500"
              className="text-white hover:text-blue-400 transition cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition cursor-pointer"
          >
            Work With Me
          </ScrollLink>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="text-white hover:text-blue-400 cursor-pointer transition"
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="bg-blue-600 text-white text-center py-2 rounded-full"
            >
              Work With Me
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
