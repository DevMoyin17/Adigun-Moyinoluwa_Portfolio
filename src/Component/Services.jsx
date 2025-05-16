import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaCode, FaBug, FaRocket } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Website Development",
      desc: "Modern, responsive websites built using HTML, CSS, JavaScript, React, or any preferred stack.",
    },
    {
      icon: <FaBug className="text-3xl text-blue-500" />,
      title: "Bug Fixing & UI Improvements",
      desc: "Fix layout issues, broken elements, slow pages, and improve user experience across devices.",
    },
    {
      icon: <FaRocket className="text-3xl text-blue-500" />,
      title: "Full Web Solutions",
      desc: "From concept to deployment — complete frontend or full-stack websites tailored for your business.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-gray-100" id="services">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center mb-12"
        >
          My Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-950 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
