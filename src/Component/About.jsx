import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from "../assets/image6.png";

const infoCards = [
  { label: "Location", value: "Lagos, Nigeria — Open to Remote" },
  {
    label: "Availability",
    value: (
      <span className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full bg-green-400"
          style={{ boxShadow: "0 0 6px #4ade80" }}
        />
        Immediately Available
      </span>
    ),
  },
  { label: "Email", value: "moyinoluwaadigun390@gmail.com", isEmail: true },
  {
    label: "Open To",
    value: (
      <div className="flex flex-wrap gap-2 mt-1">
        {["Full-time", "Contract", "Remote"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-900/50 text-blue-300 border border-blue-700/40 px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
];

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Moyinoluwa_Adigun_Frontend_CV.pdf";
    link.download = "Moyinoluwa_Adigun_Frontend_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-gray-950 py-24 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3"
        >
          About Me
        </motion.p>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 mb-5"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          A developer who thinks about
          <span className="text-blue-400 italic"> people</span>, not just pixels.
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Photo */}
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-shrink-0 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-2xl scale-110"
                aria-hidden="true"
              />
              <img
                src={image}
                alt="Moyinoluwa Adigun"
                className="relative w-52 sm:w-60 rounded-2xl object-cover ring-1 ring-blue-500/30"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </motion.div> */}

          {/* Right — text + cards */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Bio */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 font-light">
                Hi, I'm Moyinoluwa a Frontend Developer with 2 years of experience designing and
                shipping production-grade web applications. I specialize in role-based access
                control systems, real-time dashboards, and API-driven interfaces that are fully
                responsive and cross-browser compatible.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 font-light">
                I work with <span className="text-gray-200 font-medium">React.js</span>,{" "}
                <span className="text-gray-200 font-medium">Vue.js</span>, and{" "}
                <span className="text-gray-200 font-medium">Tailwind CSS</span> to build
                performant, maintainable interfaces. Comfortable working independently or within
                agile teams. I'm experienced in defining API contracts with backend developers,
                peer code reviews, and deploying via Vercel and GitHub.
              </p>

              {/* Quote callout */}
              <div className="border-l-2 border-blue-500 pl-4 mt-6">
                <p className="text-gray-400 italic text-sm leading-relaxed">
                  "I care deeply about the craft, clean code, thoughtful UX, and interfaces that
                  feel effortless to use."
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500
                 text-white text-sm font-medium px-6 py-3 rounded-full transition-all 
                 duration-200 hover:-translate-y-0.5"
              >
                Download Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </button>
            </motion.div>

            {/* Info cards grid */}
            {/* <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {infoCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3"
                >
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-medium mb-1">
                    {card.label}
                  </p>
                  {card.isEmail ? (
                    <a
                      href={`mailto:${card.value}`}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium break-all"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <div className="text-sm text-gray-300 font-medium">{card.value}</div>
                  )}
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;