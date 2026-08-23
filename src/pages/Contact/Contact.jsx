import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa6";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  setSending(true);

  try {
    await emailjs.send(
      "service_2ip464u",        // Your Service ID
      "template_bz16xxr",       // Your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "v4uXcGqMKPlx2YT6D"         // Your Public Key
    );

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error(error);
    alert("Message could not be sent.");
  }

  setSending(false);
};

  return (
    <main className="contact-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="contact-hero">

        <div className="contact-hero-inner">

          <span className="contact-section-label">
            CONTACT
          </span>

          <h1 className="contact-hero-title">
            Let's <span>Connect</span>
          </h1>

          <p className="contact-hero-description">
            Have a project, internship opportunity, technical question,
            or simply want to get in touch? I'd be happy to hear from you.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT CONTENT
      ========================= */}
      <section className="contact-content-section">

        {/* =========================
            CONTACT INFORMATION
        ========================= */}
        <div className="contact-information">

          <div className="contact-section-heading">

            <span className="contact-section-label">
              GET IN TOUCH
            </span>

            <h2>
              Contact Information
            </h2>

            <p>
              Whether you want to discuss a project, internship
              opportunity, collaboration, or technology, feel free
              to reach out.
            </p>

          </div>


          <div className="contact-info-list">

            {/* EMAIL */}
            <a
              href="mailto:gauravdeora17@gmail.com"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-content">
                <span>Email</span>
                <strong>gauravdeora17@gmail.com</strong>
              </div>

            </a>


            {/* PHONE */}
            <a
              href="tel:+918114414552"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div className="contact-info-content">
                <span>Phone</span>
                <strong>+91 8114414552</strong>
              </div>

            </a>


            {/* LOCATION */}
            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaLocationDot />
              </div>

              <div className="contact-info-content">
                <span>Location</span>
                <strong>Jodhpur, Rajasthan, India</strong>
              </div>

            </div>

          </div>


          {/* SOCIAL LINKS */}
          <div className="contact-social-section">

            <span className="contact-section-label">
              FIND ME ONLINE
            </span>

            <div className="contact-social-links">

              <a
                href="https://github.com/GauravDeora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/gauravdeora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            CONTACT FORM
        ========================= */}
        <div className="contact-form-wrapper">

          <div className="contact-form-heading">

            <span className="contact-section-label">
              SEND A MESSAGE
            </span>

            <h2>
              Start a Conversation
            </h2>

          </div>


          {submitted && (
            <div className="contact-success-message">
              Your message has been sent successfully!
            </div>
          )}


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="contact-form-field">

              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

            </div>


            {/* EMAIL */}
            <div className="contact-form-field">

              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />

            </div>


            {/* SUBJECT */}
            <div className="contact-form-field">

              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />

            </div>


            {/* MESSAGE */}
            <div className="contact-form-field">

              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="7"
                required
              />

            </div>


            {/* SUBMIT */}
            <button
              type="submit"
            className="contact-submit-button"
              disabled={sending}
            >
              <span>
                {sending ? "Sending..." : "Send Message"}
              </span>

              <FaPaperPlane />
            </button>

          </form>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="contact-final-cta">

        <span className="contact-section-label">
          OPEN TO OPPORTUNITIES
        </span>

        <h2>
          Let's build something
          <span> meaningful.</span>
        </h2>

        <p>
          I'm interested in software development, internships,
          technical projects, and opportunities to learn and contribute.
        </p>

        <a
          href="/projects"
          className="contact-final-button"
        >
          <span>View My Projects</span>
          <FaArrowRight />
        </a>

      </section>

    </main>
  );
};

export default Contact;