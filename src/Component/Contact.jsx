import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = 'service_67oup38';
    const templateId = 'template_ytbc8fb';
    const publicKey = 'wnTQIsRL2PFywR2nJ';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: '',
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("There was an error sending your message.");
      });
  };

  return (
    <section ref={ref} className="py-16 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to reach out for collaboration or inquiries.</p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

          {status && <p className="mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
});

export default Contact;
