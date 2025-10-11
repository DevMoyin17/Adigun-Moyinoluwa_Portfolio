import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from "../assets/image6.png";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MoyinoluwaAdigunResume.pdf";
    link.download = "MoyinoluwaAdigunResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gray-950 py-16 text-white" id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
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

        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-2/3 lg:pl-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-300 mb-4">
            Hi, I’m Moyinoluwa, A passionate frontend developer who turns
            creative ideas into clean, responsive, and high-performing web
            experiences. I specialize in building user interfaces that are not
            only visually appealing but also accessible and optimized for
            performance.
          </p>
          <p className="text-gray-300 mb-4">
            I work with tools like <strong>React.js</strong>,{" "}
            <strong>Vue.js</strong>,
            <strong>Bootstrap</strong>, <strong>Tailwind Css</strong> and modern JavaScript to craft websites
            that function seamlessly across all devices. Whether I’m
            collaborating on a team or working independently, I value writing
            clean, maintainable code and delivering projects that meet
            real-world needs.
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
