import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const stats = [
  { value: "2", label: "Years Experience" },
  { value: "10+", label: "Modules Shipped" },
  { value: "50%", label: "Load Time Reduced" },
  { value: "100%", label: "Responsive Scores" },
];

const Banners = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      // Added h-auto for mobile and min-h-screen for desktop to ensure content is never cut off
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-950 px-6 sm:px-12 py-20 lg:py-32 text-center"
    >
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        
        {/* Content Wrapper */}
        <div className="w-full">
          {/* Intro Text */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-100 leading-tight mb-2"
            style={{
              fontFamily: "'DM Serif Display', serif",
              // Adjusted clamp for better mobile scaling
              fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Hi there, I'm Moyinoluwa Adigun
          </motion.h1>

          {/* Main Title */}
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-medium text-gray-100 leading-tight mb-8"
            style={{
              fontFamily: "'DM Serif Display', serif",
              // Responsive fluid typography
              fontSize: "clamp(2.5rem, 10vw, 5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            A Frontend Developer
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light"
          >
            Specialized in building high-performance, scalable web applications. 
            With 2 years of experience across the React and Vue ecosystems, I bridge the gap between 
            complex backend logic and intuitive user interfaces, crafting seamless RBAC systems 
            and data-rich dashboards that users actually enjoy.
          </motion.p>

          {/* CTAs + Socials */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-blue-900/20 whitespace-nowrap"
              >
                Contact me
              </button>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-6 text-gray-400 text-2xl mt-4 sm:mt-0 border-t sm:border-t-0 sm:border-l border-gray-800 pt-6 sm:pt-0 sm:pl-6">
              <a
                href="http://linkedin.com/in/adigun-moyinoluwa-4236872a2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/DevMoyin17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            // Grid layout for mobile (2x2) and flex for tablet/desktop
            className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-y-10 gap-x-4 sm:gap-20 pt-10 border-t border-gray-800/50"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="block text-2xl sm:text-3xl font-bold text-gray-100"
                  style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.04em" }}
                >
                  {s.value}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banners;