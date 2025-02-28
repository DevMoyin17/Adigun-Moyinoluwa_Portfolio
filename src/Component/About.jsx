import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 
import image from "../assets/image6.png"

const About = () => {
  const handleDownload = () =>{
    const link = document.createElement('a');
    link.href = '/AdigunMoyinoluwaDeborahResume.pdf'; // This should be the path to your CV file in the public folder
    link.download = 'DevMoyin_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="bg-gray-900 py-16 text-white" id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Side: Image */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start"
        >
          <img
            src={image}
            alt="About Me"
            className="rounded-full w-[50%] lg:w-[60%] shadow-lg border-2 border-blue-500" 
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-2/3 lg:pl-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-300 mb-4">
            Hi! I'm a passionate full-stack developer with experience building
            responsive web applications and scalable back-end systems. I love
            crafting elegant solutions to complex problems and continuously
            learning new technologies.
          </p>
          <p className="text-gray-300 mb-4">
            With expertise in front-end frameworks & libraries like React, Angular and robust
            back-end tools like Node.js, MongoDB, MySQL, and PHP, I bring a holistic approach
            to software development. My goal is to deliver clean, efficient, and
            user-friendly applications tailored to client needs.
          </p>
          <button
            onClick={handleDownload}
            className="inline-block bg-blue-600 text-white px-6 py-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
