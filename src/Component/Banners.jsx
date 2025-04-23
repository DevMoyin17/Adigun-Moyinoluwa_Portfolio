import React, { useRef } from "react";
// import image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from "../assets/image6.png"

const Banners = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-gray-900" id="home">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-[20px] lg:text-[40px] font-bold leading-tight text-gray-100 whitespace-nowrap"
          >
            Hello, I'm <span className="text-blue-500">ADIGUN&nbsp;MOYINOLUWA</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[20px] lg:text-[40px] font-medium leading-tight text-gray-200"
          >
            <span className="mr-3">I specialize in</span>
            <TypeAnimation
              sequence={[
                "Frontend Development",
                2000,
                "Creative Design",
                2000,
                "Technology Solutions",
                2000,
              ]}
              speed={50}
              className="text-blue-500"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg lg:mx-0 text-gray-300"
          >
             Designing clean, responsive, and engaging user interfaces as a frontend developer. I turn ideas into seamless web experiences.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-col sm:flex-row gap-x-6 gap-y-4 items-center mb-10 w-full justify-center"
          >
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-white sm:w-auto"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex gap-x-6 text-[24px] text-gray-300"
          >
            <a href="http://linkedin.com/in/adigun-moyinoluwa-4236872a2" className="hover:text-white transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/DevMoyin17" className="hover:text-white transition duration-300">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <FaTiktok />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex-1 max-w-[300px] lg:max-w-[400px] mx-auto mb-8 lg:mb-0"
        >
          <img
            src={image}
            alt="Avatar"
            className="rounded-full shadow-lg border-2 border-blue-500"
            
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banners;
