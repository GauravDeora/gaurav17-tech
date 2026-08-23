import React from "react";
import {
  FaDownload,
  FaEye,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa6";

import "./Resume.css";

const Resume = () => {
  return (
    <main className="resume-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="resume-hero">
        <div className="resume-hero-inner">

          <span className="resume-section-label">
            RESUME
          </span>

          <h1 className="resume-hero-title">
            My <span>Resume</span>
          </h1>

          <p className="resume-hero-description">
            Computer Science undergraduate with hands-on experience in
            software and web development, with practical exposure through
            internships at DRDO and Dhurav Star.
          </p>

          <div className="resume-action-group">

            <a
              href="/resume.pdf"
              download="Gaurav_Deora_Resume.pdf"
              className="resume-action resume-action-primary"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-action resume-action-secondary"
            >
              <FaEye />
              <span>View Resume</span>
            </a>

          </div>

        </div>
      </section>


      {/* =========================
          PROFESSIONAL SUMMARY
      ========================= */}
      <section className="resume-content-section">

        <div className="resume-section-heading">

          <div className="resume-heading-icon">
            <FaCode />
          </div>

          <div className="resume-heading-text">
            <span className="resume-section-label">
              PROFILE
            </span>

            <h2>
              Professional Summary
            </h2>
          </div>

        </div>


        <div className="resume-summary-card">

          <p>
            Computer Science undergraduate with hands-on experience in
            software and web development through internships at DRDO and
            Dhurav Star.
          </p>

          <p>
            Developed applications including a Defence Asset Tracking &
            Geofencing System and a Movie Booking System.
          </p>

          <p>
            Passionate about building software solutions and contributing
            to challenging software development projects.
          </p>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================= */}
      <section className="resume-content-section">

        <div className="resume-section-heading">

          <div className="resume-heading-icon">
            <FaBriefcase />
          </div>

          <div className="resume-heading-text">
            <span className="resume-section-label">
              EXPERIENCE
            </span>

            <h2>
              Professional Experience
            </h2>
          </div>

        </div>


        <div className="resume-experience-list">

          {/* DRDO */}
          <article className="resume-experience-card">

            <div className="resume-experience-header">

              <div className="resume-experience-heading">

                <span className="resume-experience-date">
                  JUN 2026 — JUL 2026
                </span>

                <h3>
                  Software Development Intern
                </h3>

                <h4>
                  Defence Research & Development Organisation (DRDO)
                </h4>

                <p className="resume-experience-location">
                  Defence Laboratory, Jodhpur
                </p>

              </div>

              <div className="resume-experience-number">
                01
              </div>

            </div>


            <div className="resume-experience-divider"></div>


            <ul className="resume-experience-points">

              <li>
                Developed a Defence Asset Tracking & Geofencing System
                to streamline the management and monitoring of defence
                assets.
              </li>

              <li>
                Gained practical experience in the Software Development
                Life Cycle, database management, version control, and
                collaborative software development.
              </li>

              <li>
                Conducted testing and debugging of software modules,
                ensuring quality and functionality.
              </li>

            </ul>

          </article>


          {/* DHURAV STAR */}
          <article className="resume-experience-card">

            <div className="resume-experience-header">

              <div className="resume-experience-heading">

                <span className="resume-experience-date">
                  JUN 2025 — JUL 2025
                </span>

                <h3>
                  Web Development Intern
                </h3>

                <h4>
                  Dhurav Star
                </h4>

              </div>

              <div className="resume-experience-number">
                02
              </div>

            </div>


            <div className="resume-experience-divider"></div>


            <ul className="resume-experience-points">

              <li>
                Created a Movie Booking System allowing users to browse
                movies, select seats, and book tickets through a
                user-friendly web interface.
              </li>

              <li>
                Developed responsive web applications using HTML, CSS,
                and JavaScript frameworks.
              </li>

              <li>
                Collaborated with team members on design mockups and
                wireframes for client projects.
              </li>

            </ul>

          </article>

        </div>

      </section>


      {/* =========================
          EDUCATION
      ========================= */}
      <section className="resume-content-section">

        <div className="resume-section-heading">

          <div className="resume-heading-icon">
            <FaGraduationCap />
          </div>

          <div className="resume-heading-text">
            <span className="resume-section-label">
              EDUCATION
            </span>

            <h2>
              Academic Background
            </h2>
          </div>

        </div>


        <div className="resume-education-list">

          {/* BTECH */}
          <article className="resume-education-card">

            <div className="resume-education-year">
              EXPECTED 2028
            </div>

            <h3>
              Bachelor of Technology (B.Tech.)
            </h3>

            <h4>
              Computer Science and Engineering
            </h4>

            <p>
              National Institute of Electronics and Information
              Technology — Ajmer
            </p>

          </article>


          {/* CLASS XII */}
          <article className="resume-education-card">

            <div className="resume-education-year">
              2024
            </div>

            <h3>
              Senior Secondary (Class XII)
            </h3>

            <p>
              Holi Spirit Sr Sec School — Jodhpur
            </p>

            <strong>
              74.40%
            </strong>

          </article>


          {/* CLASS X */}
          <article className="resume-education-card">

            <div className="resume-education-year">
              2022
            </div>

            <h3>
              Secondary (Class X)
            </h3>

            <p>
              St Paul's School Shastri Circle — Jodhpur
            </p>

            <strong>
              74.60%
            </strong>

          </article>

        </div>

      </section>


      {/* =========================
          TECHNICAL SKILLS
      ========================= */}
      <section className="resume-content-section">

        <div className="resume-section-heading">

          <div className="resume-heading-icon">
            <FaCode />
          </div>

          <div className="resume-heading-text">
            <span className="resume-section-label">
              TECHNICAL SKILLS
            </span>

            <h2>
              What I Work With
            </h2>
          </div>

        </div>


        <div className="resume-skills-list">

          <span>Web Development</span>
          <span>SQL</span>
          <span>Python</span>
          <span>Java</span>
          <span>C</span>
          <span>Data Structures &amp; Algorithms</span>

        </div>

      </section>


      {/* =========================
          INTERESTS
      ========================= */}
      <section className="resume-content-section">

        <div className="resume-section-heading">

          <div className="resume-heading-icon">
            <FaHeart />
          </div>

          <div className="resume-heading-text">
            <span className="resume-section-label">
              BEYOND CODE
            </span>

            <h2>
              Interests
            </h2>
          </div>

        </div>


        <div className="resume-interest-list">

          <article className="resume-interest-card">

            <h3>
              Philomath
            </h3>

            <p>
              Passionate about continuous learning and exploring new
              areas of knowledge.
            </p>

          </article>


          <article className="resume-interest-card">

            <h3>
              Geopolitics
            </h3>

            <p>
              Regularly follow global affairs, international relations,
              and technology policy.
            </p>

          </article>


          <article className="resume-interest-card">

            <h3>
              Sports
            </h3>

            <p>
              Actively participate in and follow sports, fostering
              teamwork, discipline, and strategic thinking.
            </p>

          </article>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="resume-final-cta">

        <span className="resume-section-label">
          LET'S CONNECT
        </span>

        <h2>
          Interested in working
          <span> together?</span>
        </h2>

        <p>
          Have a project, internship opportunity, or technical challenge
          in mind? Let's connect.
        </p>

        <a
          href="/contact"
          className="resume-final-button"
        >
          <span>Get In Touch</span>
          <FaArrowRight />
        </a>

      </section>

    </main>
  );
};

export default Resume;