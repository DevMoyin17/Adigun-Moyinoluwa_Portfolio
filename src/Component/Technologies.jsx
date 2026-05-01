import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const tailwindIcon = (
  <img
    src="https://www.svgrepo.com/show/374118/tailwind.svg"
    alt="Tailwind CSS"
    className="w-5 h-5"
  />
);
const nextIcon = (
  <img
    src="https://cdn.simpleicons.org/nextdotjs/9ca3af"
    alt="Next.js"
    className="w-5 h-5"
  />
);

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript ES6+" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <FaVuejs className="text-green-500" />, name: "Vue.js" },
      { icon: nextIcon, name: "Next.js" },
    ],
  },
  {
    label: "Styling",
    skills: [
      { icon: tailwindIcon, name: "Tailwind CSS" },
      { icon: <FaBootstrap className="text-purple-400" />, name: "Bootstrap" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { icon: <FaGithub className="text-gray-300" />, name: "Git / GitHub" },
      {
        icon: (
          <img
            src="https://cdn.simpleicons.org/vercel/9ca3af"
            alt="Vercel"
            className="w-5 h-5"
          />
        ),
        name: "Vercel",
      },
      {
        icon: (
          <img
            src="https://cdn.simpleicons.org/postman/ef5e25"
            alt="Postman"
            className="w-5 h-5"
          />
        ),
        name: "Postman",
      },
    ],
  },
];

const achievements = [
  {
    icon: "⚡",
    title: "50% faster page load times",
    desc: "Achieved using React Query for data fetching, caching, and state synchronization, eliminating redundant API calls across the app.",
  },
  {
    icon: "📱",
    title: "100% responsive design scores",
    desc: "Delivered across multiple projects (Buyly, ChainStats) using Tailwind CSS and Bootstrap for seamless UX on every device size.",
  },
  {
    icon: "🔧",
    title: "10+ production-ready modules shipped",
    desc: "Including automated consultant assignment logic, a searchable RBAC permissions interface, and real-time admin dashboards.",
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-gray-900 py-10 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3"
        >
          Skills & Achievements
        </motion.p>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          My technical toolkit.
        </motion.h2>

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              variants={fadeIn("up", 0.2 + gi * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-5"
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="flex items-center gap-2 bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-lg px-3 py-2 transition-colors duration-200"
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also comfortable with */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
            Also Comfortable With
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "React Router",
              "React Query",
              "Context API",
              "React Hooks",
              "JWT Auth",
              "RBAC Architecture",
              "REST API Integration",
              "Node.js",
              "Express.js",
              "JSON Server",
              "Mobile-First Design",
              "Agile / Scrum",
              "Code Reviews",
            ].map((item) => (
              <span
                key={item}
                className="text-xs bg-gray-800 border border-gray-700 text-gray-400 px-3 py-1.5 rounded-full font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key achievements */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-5">
            Key Achievements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-5 hover:border-blue-500/40 transition-colors duration-200"
              >
                <span className="text-xl mb-3 block">{a.icon}</span>
                <p className="text-sm font-semibold text-gray-200 mb-2">{a.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;