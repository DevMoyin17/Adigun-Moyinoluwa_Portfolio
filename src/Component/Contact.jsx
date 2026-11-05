import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await emailjs.send(
        "service_67oup38",
        "template_ytbc8fb",
        {
          from_name: data.get("name"),
          from_email: data.get("email"),
          to_name: "Moyinoluwa",
          message: data.get("message"),
        },
        { publicKey: "wnTQIsRL2PFywR2nJ" },
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>
            Let’s <em>talk.</em>
            <span className="contact-star" aria-hidden="true">
              ✳
            </span>
          </h2>
          <p className="contact-intro">
            A new role, a project, or just a hello.
            <br />
            I’d love to hear from you.
          </p>
          <a className="email-link" href="mailto:moyinoluwaadigun390@gmail.com">
            moyinoluwaadigun390@gmail.com <FiArrowUpRight />
          </a>
          <p className="contact-availability">
            <span /> Open to full-time, contract & remote roles
          </p>
        </div>
        <form onSubmit={submit} className="contact-form">
          <label htmlFor="name">Your name</label>
          <input
            name="name"
            id="name"
            autoComplete="name"
            placeholder="How should I call you?"
            required
            maxLength={100}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
          <label htmlFor="message">What are you thinking?</label>
          <textarea
            name="message"
            id="message"
            placeholder="A little about your project or opportunity…"
            required
            rows={3}
            maxLength={5000}
          />
          <button
            className="pill"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send a message"}
            <FiArrowRight />
          </button>
          <div className="form-status" role="status" aria-live="polite">
            {status === "success" &&
              "Thank you! Your message is on its way. I’ll be in touch."}
            {status === "error" && (
              <>
                Your message couldn’t be sent. Please try again or{" "}
                <a href="mailto:moyinoluwaadigun390@gmail.com">
                  email me directly
                </a>
                .
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
