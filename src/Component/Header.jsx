import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/AM.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "technologies" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(3, 7, 18, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink to="home" smooth duration={500} className="cursor-pointer flex items-center gap-3">
          <img
            src={logo}
            alt="AM Logo"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/40"
          />
       
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              spy
              activeClass="text-blue-400"
              className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium tracking-wide"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ display: "inline-block" }}
          >
            Hire Me
          </ScrollLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-gray-300 hover:text-white text-2xl transition-colors"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ backgroundColor: "rgba(3,7,18,0.97)" }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium py-1 transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="bg-blue-600 text-white text-center py-2.5 rounded-full text-sm font-medium mt-2 cursor-pointer"
              style={{ display: "block" }}
            >
              Hire Me
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;