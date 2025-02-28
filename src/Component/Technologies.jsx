import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaAngular,FaPhp, FaBootstrap } from "react-icons/fa"; 
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 

const Technologies = () => {
  return (
    <section className="py-16 bg-gray-900" id="technologies">
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
         className="text-3xl font-bold text-white mb-8">Technologies I Use</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaHtml5 />
            </div>
            <p className="mt-4 text-white font-semibold">HTML</p>
          </motion.div>

          {/* CSS */}
          <motion.div   variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaCss3Alt />
            </div>
            <p className="mt-4 text-white font-semibold">CSS</p>
          </motion.div>
           
           {/* Bootstrap */}
          <motion.div   variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaBootstrap />
            </div>
            <p className="mt-4 text-white font-semibold">Bootstrap</p>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaJs />
            </div>
            <p className="mt-4 text-white font-semibold">JavaScript</p>
          </motion.div>

          {/* React */}
          <motion.div 
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaReact />
            </div>
            <p className="mt-4 text-white font-semibold">React</p>
          </motion.div>

          {/* Node.js */}
          <motion.div   variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaNodeJs />
            </div>
            <p className="mt-4 text-white font-semibold">Node.js</p>
          </motion.div>

          {/* GitHub */}
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaGithub />
            </div>
            <p className="mt-4 text-white font-semibold">GitHub</p>
          </motion.div>
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaAngular />
            </div>
            <p className="mt-4 text-white font-semibold">Angular</p>
          </motion.div>
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaPhp />
            </div>
            <p className="mt-4 text-white font-semibold">PHP</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
