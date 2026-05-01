import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = React.forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const serviceId = "service_67oup38";
  const templateId = "template_ytbc8fb";
  const publicKey = "wnTQIsRL2PFywR2nJ";

  const onSubmit = async (data) => {
    setSending(true);
    setErrorMessage("");
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Moyinoluwa",
      message: data.message,
    };
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setShowModal(true);
      reset();
    } catch (error) {
      console.error("Email send error:", error);
      setErrorMessage("There was an error sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") setShowModal(false); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const contactLinks = [
    {
      icon: <FiMail size={16} />,
      label: "Email",
      value: "moyinoluwaadigun390@gmail.com",
      href: "mailto:moyinoluwaadigun390@gmail.com",
    },
    {
      icon: <FaGithub size={16} />,
      label: "GitHub",
      value: "github.com/DevMoyin17",
      href: "https://github.com/DevMoyin17",
    },
    {
      icon: <FaLinkedin size={16} />,
      label: "LinkedIn",
      value: "Moyinoluwa Adigun",
      href: "http://linkedin.com/in/adigun-moyinoluwa-4236872a2",
    },
    // {
    //   icon: <FiMapPin size={16} />,
    //   label: "Location",
    //   value: "Lagos, Nigeria — Open to Remote",
    //   href: null,
    // },
  ];

  return (
    <section ref={ref} id="contact" className="bg-gray-950 py-24 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3"
        >
          Contact
        </motion.p>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-medium text-gray-100 mb-4"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          Let's build something together.
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base leading-relaxed mb-12 max-w-lg font-light"
        >
          I'm actively looking for frontend roles at growth-stage startups or tech-forward teams,
          full-time, contract, or remote. If you have an opportunity or just want to chat, reach out.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — links */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-80 flex flex-col gap-3"
          >
            {contactLinks.map((link, i) =>
              link.href ? (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl px-4 py-3.5 text-sm text-gray-300 hover:text-blue-400 transition-all duration-200 group"
                >
                  <span className="text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-0.5 uppercase tracking-wide">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium leading-none">{link.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3.5"
                >
                  <span className="text-gray-500 flex-shrink-0">{link.icon}</span>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-0.5 uppercase tracking-wide">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-300 font-medium leading-none">{link.value}</p>
                  </div>
                </div>
              )
            )}
          </motion.div>

          {/* Right — form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-col gap-4"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-900 border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-colors"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-gray-900 border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-colors"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                className="w-full bg-gray-900 border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-colors resize-none"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                sending
                  ? "bg-blue-800 cursor-not-allowed text-blue-300"
                  : "bg-blue-600 hover:bg-blue-500 text-white hover:-translate-y-0.5"
              }`}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>

            {errorMessage && (
              <p className="text-xs text-red-400 text-center">{errorMessage}</p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 id="success-title" className="text-xl font-semibold text-gray-100 mb-2">
              Message Sent!
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Contact;