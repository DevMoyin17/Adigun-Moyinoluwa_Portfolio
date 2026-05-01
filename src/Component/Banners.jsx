import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from "../assets/image6.png";

const stats = [
  { value: "2+", label: "Years Experience" },
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
      className="min-h-screen flex flex-col justify-center bg-gray-950 px-4 sm:px-8 pt-28 pb-16"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Availability badge */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 flex"
        >
          {/* <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-blue-400 bg-blue-950/60 border border-blue-800/50 px-4 py-2 rounded-full"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
              style={{ boxShadow: "0 0 6px #4ade80" }}
            />
            Available for Remote Roles
          </span> */}
        </motion.div>

        {/* Main grid */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="flex-1">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-bold text-gray-100 leading-tight mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Moyinoluwa
              </span>
              <br />
              Adigun.
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-300 text-lg sm:text-xl font-medium mb-5"
            >
              <span className="text-gray-500">I build</span>
              <TypeAnimation
                sequence={[
                  "Frontend Interfaces",
                  2000,
                  "React Applications",
                  2000,
                  "Real-time Dashboards",
                  2000,
                  "Responsive UIs",
                  2000,
                ]}
                speed={50}
                className="text-blue-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-light"
            >
              Frontend Developer with 2 years shipping production-grade web apps using React.js,
              Vue.js, and Tailwind CSS. I specialize in RBAC systems, real-time dashboards,
              and API-driven interfaces. Fully responsive, performant, and maintainable.
            </motion.p>

            {/* CTAs + Socials */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Hire Me
              </button>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
              >
                View Projects
              </a>

              <div className="flex gap-5 ml-1 text-gray-400 text-xl">
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
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-800"
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <span
                    className="block text-2xl font-bold text-gray-100"
                    style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.04em" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          {/* <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/30 to-indigo-600/20 blur-2xl scale-110"
                aria-hidden="true"
              />
              <img
                src={image}
                alt="Moyinoluwa Adigun"
                className="relative w-52 sm:w-64 lg:w-72 rounded-2xl object-cover ring-1 ring-blue-500/30"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banners;