import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAngular,
  FaPhp,
  FaBootstrap,
  FaVuejs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const techStack = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React.js" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaAngular />, label: "Angular" },
  { icon: <FaVuejs />, label: "Vue.js" },
  // Uncomment if using:
  // { icon: <FaNodeJs />, label: "Node.js" },
  // { icon: <FaPhp />, label: "PHP" },
];

const Technologies = () => {
  return (
    <section className="py-16 bg-gray-900" id="technologies">
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Technologies I Use
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-white text-4xl">{tech.icon}</div>
              <p className="mt-4 text-white font-semibold">{tech.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
