import React from "react";

const Header = () => {
  return (
    <header className="py-6 bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl lg:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
              A
            </span>
            <span className="text-white">M.</span>
          </h1>

          {/* Call-to-Action Button */}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 sm:px-6 sm:py-3"
          >
            Work With Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
