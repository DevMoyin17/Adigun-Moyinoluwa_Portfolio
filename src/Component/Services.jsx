import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Frontend Development",
    desc: "Modern, responsive web apps built with React.js, Vue.js, and Tailwind CSS. I write clean, maintainable code that's fast, accessible, and scales well.",
    tags: ["React.js", "Vue.js", "Tailwind CSS"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Dashboard & Admin UIs",
    desc: "Role-based dashboards, RBAC systems, and real-time data interfaces with optimistic UI updates. The kind of complex UI that needs to just work.",
    tags: ["React Query", "RBAC", "REST APIs"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Bug Fixes & UI Improvements",
    desc: "Performance tuning, layout fixes, and UX improvements on existing projects. I've cut page load times by 50%. I know what to look for.",
    tags: ["Performance", "Responsive Design", "UX"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "End-to-End Web Solutions",
    desc: "From concept to Vercel deployment. Full frontend builds with API integration, authentication, and everything in between, delivered independently.",
    tags: ["Full Build", "Vercel", "API Integration"],
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-950 py-10 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3"
        >
          Services
        </motion.p>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          What I can do for you.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-blue-950/60 border border-blue-800/40 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-100 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-800 border border-gray-700 text-gray-500 px-2.5 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;