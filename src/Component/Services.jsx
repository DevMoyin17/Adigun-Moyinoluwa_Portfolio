import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    title: "Responsive Web Design",
    description:
      "Creating layouts that adapt seamlessly to different screen sizes and devices for an optimal user experience.",
    icon: "📱",
  },
  {
    title: "Single Page Applications (SPA)",
    description:
      "Building fast and dynamic web applications using modern frameworks like React and Angular.",
    icon: "⚡",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Translating designs into clean, interactive user interfaces with attention to accessibility and usability.",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving page load speed and front-end efficiency for better SEO and user retention.",
    icon: "🚀",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 py-16 text-white" id="services">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl font-bold text-center text-white mb-8"
        >
          My Frontend Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
