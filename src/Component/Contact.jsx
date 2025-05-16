import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

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
      setErrorMessage("There was an error sending your message.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setShowModal(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section ref={ref} id="contact" className="min-h-screen py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-10 text-lg">
          I'm open to new opportunities or collaborations. Let's get in touch!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-lg shadow-lg bg-gray-800 text-white" noValidate>

          {/* Name */}
          <div className="mb-5 text-left">
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm" id="name-error" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5 text-left">
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
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
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm" id="email-error" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-5 text-left">
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows="5"
              placeholder="Type your message..."
              className="w-full p-3 rounded-md bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm" id="message-error" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 rounded-md font-semibold transition-colors duration-300 ${
              sending ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {errorMessage && <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>}
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center shadow-lg relative">
            <h3 id="success-title" className="text-2xl font-semibold mb-4 text-gray-900">
              Message Sent!
            </h3>
            <p className="mb-6 text-gray-700">
              Thank you for reaching out. I will get back to you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
