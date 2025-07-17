import React from "react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from "../assets/image6.png";

const Banners = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-gray-950 py-10 px-4 sm:px-8"
      id="home"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight text-gray-100"
          >
            Hello, I'm{" "}
            <span className="text-blue-500 whitespace-nowrap">
              MOYINOLUWA ADIGUN
            </span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="my-4 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium text-gray-200"
          >
            <span className="mr-2">I specialize in</span>
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
            className="mb-6 max-w-xl  lg:mx-0 text-gray-300 text-sm sm:text-base"
          >
            I craft fast, modern websites using the right tools for the job,
            from HTML, CSS, and JavaScript to powerful frameworks like React
            and beyond. Let’s collaborate to bring your ideas to life online.
          </motion.p>

          {/* Button */}
<motion.div
  variants={fadeIn("up", 0.6)}
  initial="hidden"
  whileInView="show"
  className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 mb-10"
>
  {/* Contact Button */}
  <button
    onClick={scrollToContact}
    className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition text-sm sm:text-base"
  >
    Contact Me
  </button>

  {/* Social Icons */}
  <div className="flex gap-x-6 text-[20px] sm:text-[24px] text-gray-300">
    <a
      href="http://linkedin.com/in/adigun-moyinoluwa-4236872a2"
      className="hover:text-white transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/DevMoyin17"
      className="hover:text-white transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
    <a
      href="#"
      className="hover:text-white transition duration-300"
      aria-label="TikTok profile link"
    >
      <FaTiktok />
    </a>
  </div>
</motion.div>

        </div>

        {/* Right Side Image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] mx-auto"
        >
          <img
            src={image}
            alt="Moyinoluwa Adigun"
            className="rounded-full shadow-lg border-2 border-blue-500 object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banners;
