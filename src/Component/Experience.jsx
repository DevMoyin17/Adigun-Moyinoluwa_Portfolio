import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const experiences = [
  {
    period: "Nov 2025 – Feb 2026",
    role: "Frontend Developer",
    company: "FloattHR",
    type: "Softweb-digital · Lagos, Nigeria",
    current: true,
    bullets: [
      "Engineered real-time admin and role-listing interfaces using React Hooks and React Query, handling live data fetching, mutations, caching, and optimistic UI updates at scale.",
      "Built a full Admin Management dashboard covering account lifecycle management: profile editing, role reassignment, and Suspend/Activate status toggling — reducing manual admin overhead.",
      "Developed a Consultant & Client Oversight module enabling direct assignments, status approvals (Approve/Decline), and request tracking with instant UI feedback.",
      "Architected a Role-Based Access Control (RBAC) system with full CRUD operations and a searchable permissions interface, enabling granular, scalable platform access control.",
      "Collaborated with backend developers to define and validate RESTful API contracts; maintained code quality via Git/GitHub branching strategies and peer code reviews.",
    ],
    tags: ["React.js", "React Query", "RBAC", "REST APIs", "Tailwind CSS", "Git/GitHub"],
  },
  {
    period: "Jun 2024 – Dec 2025",
    role: "Frontend Developer",
    company: "Healthcare Management System",
    type: "Collaborative Team Project",
    current: false,
    bullets: [
      "Co-built a role-based healthcare platform serving patients, doctors, and admins, consolidating appointment scheduling, user management, and reporting into one system.",
      "Developed all frontend views and components in React.js, styled with Bootstrap for responsive cross-device compatibility, reducing UI inconsistency across user roles.",
      "Integrated backend APIs for JWT authentication, appointment booking, role-based routing, and admin dashboards. Delivering a secure, personalized user experience.",
      "Implemented conditional rendering and protected route logic based on JWT-authenticated sessions, ensuring users only access role-appropriate content.",
      "Managed feature integration and deployment pipeline via Git/GitHub, including branching, code merging, and peer review workflows.",
    ],
    tags: ["React.js", "JWT Auth", "Bootstrap", "REST APIs", "Git/GitHub", "Node.js"],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="bg-gray-900 py-24 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3"
        >
          Experience
        </motion.p>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          Where I've built things.
        </motion.h2>

        <div className="flex flex-col divide-y divide-gray-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-8"
            >
              <div className="flex flex-col lg:flex-row lg:gap-10">
                {/* Date column */}
                {/* <div className="flex-shrink-0 lg:w-44 mb-3 lg:mb-0 pt-1">
                  <span className="text-xs text-gray-500 font-medium tracking-wide">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="ml-2 inline-flex items-center gap-1 text-xs text-green-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Recent
                    </span>
                  )}
                </div> */}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-gray-100">{exp.role}</h3>
                      <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{exp.type}</p>
                    </div>
                    <button
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      className="text-xs text-gray-500 hover:text-blue-400 transition-colors self-start sm:self-auto flex items-center gap-1 mt-1"
                    >
                      {expanded === index ? "Less" : "Details"}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>

                  {/* Bullet points — expandable */}
                  <div
                    style={{
                      maxHeight: expanded === index ? "600px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm text-gray-400 leading-relaxed font-light pl-4 relative"
                        >
                          <span
                            className="absolute left-0 top-2 w-1 h-1 rounded-full bg-blue-500"
                            style={{ marginTop: "1px" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Always visible: tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-800 border border-gray-700 text-gray-400 px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;