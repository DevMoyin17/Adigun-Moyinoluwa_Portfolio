import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const works = [
  {
    title: "Buyly | Online Marketplace",
    type: "E-Commerce · Personal Project",
    description:
      "Full-featured e-commerce platform with product catalog, dynamic shopping cart, admin dashboard, category filtering, and simulated checkout. Built end-to-end independently from design to deployment.",
    stack: ["React.js", "Context API", "JSON Server", "Tailwind CSS", "React Router"],
    imageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://buyly.vercel.app/",
    repoUrl: "https://github.com/DevMoyin17/Buyly",
  },
  {
    title: "Winfield Hospital Management",
    type: "Healthcare · Team Project",
    description:
      "Role-based healthcare platform serving patients, doctors, and admins. Features appointment booking, JWT authentication, protected routing, and admin dashboards. Bsuilt with React and Node.js.",
    stack: ["React.js", "Node.js", "JWT Auth", "Bootstrap", "MongoDB"],
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://winfield-hospital.vercel.app/",
    repoUrl: "https://github.com/DevMoyin17/Hospital_management",
  },
  {
    title: "ChainStats | Crypto Tracker",
    type: "Vue.js · Personal Project",
    description:
      "Real-time cryptocurrency tracker in Vue 3 with search, currency switching, manual refresh, dark mode, and loading skeletons. Powered by the live CoinGecko public API.",
    stack: ["Vue.js 3", "Tailwind CSS", "CoinGecko API", "Composition API"],
    imageUrl:
      "https://images.unsplash.com/photo-1639754390580-2e7437267698?w=500&auto=format&fit=crop&q=60",
    liveUrl: "https://chainstats.vercel.app/",
    repoUrl: "https://github.com/DevMoyin17/Crypto_tracker",
  },
];

const Works = () => {
  return (
    <section id="projects" className="bg-gray-950 py-24 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3"
        >
          Projects
        </motion.p>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          Things I've built and shipped.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{
                boxShadow: "0 0 0 0 rgba(59,130,246,0)",
                transition: "border-color 0.3s, transform 0.2s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(59,130,246,0)";
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-blue-300 bg-blue-900/60 border border-blue-700/40 px-2.5 py-1 rounded-full">
                  {work.type}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-100 mb-2 leading-snug">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 font-light flex-1">
                  {work.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {work.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-gray-800 text-gray-400 border border-gray-700 px-2 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={work.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiGithub size={12} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;