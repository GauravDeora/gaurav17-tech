import React from "react";
import {
  FaArrowRight,
  FaClock,
  FaCalendar,
  FaPenNib,
} from "react-icons/fa6";

import "./Blog.css";

const Blog = () => {
  return (
    <main className="blog-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="blog-hero">

        <div className="blog-hero-inner">

          <span className="blog-section-label">
            BLOG
          </span>

          <h1 className="blog-hero-title">
            Thoughts, Ideas
            <span> &amp; Experiments</span>
          </h1>

          <p className="blog-hero-description">
            A space where I document what I learn, build, explore,
            and discover throughout my journey in computer science
            and software development.
          </p>

        </div>

      </section>


      {/* =========================
          BLOG INTRO
      ========================= */}
      <section className="blog-content-section">

        <div className="blog-section-heading">

          <div className="blog-heading-icon">
            <FaPenNib />
          </div>

          <div>
            <span className="blog-section-label">
              ARTICLES
            </span>

            <h2>
              Latest Writing
            </h2>
          </div>

        </div>


        {/* =========================
            FEATURED ARTICLE
        ========================= */}
        <article className="blog-featured-card">

          <div className="blog-featured-content">

            <span className="blog-category">
              FEATURED
            </span>

            <h3>
              Building a Defence Asset Tracking &amp;
              Geofencing System
            </h3>

            <p>
              A technical walkthrough of the ideas, technologies,
              architecture, and practical challenges involved in
              developing a defence asset tracking and geofencing system.
            </p>

            <div className="blog-meta">

              <span>
                <FaCalendar />
                Coming Soon
              </span>

              <span>
                <FaClock />
                Technical Article
              </span>

            </div>

            <button className="blog-read-button">
              Read Article
              <FaArrowRight />
            </button>

          </div>


          <div className="blog-featured-visual">

            <div className="blog-visual-grid">

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="blog-visual-label">
              DEFENCE TECHNOLOGY
            </div>

          </div>

        </article>

      </section>


      {/* =========================
          RECENT ARTICLES
      ========================= */}
      <section className="blog-content-section">

        <div className="blog-section-heading">

          <div className="blog-heading-icon">
            <FaPenNib />
          </div>

          <div>
            <span className="blog-section-label">
              EXPLORE
            </span>

            <h2>
              More Articles
            </h2>
          </div>

        </div>


        <div className="blog-empty-state">

          <div className="blog-empty-icon">
            <FaPenNib />
          </div>

          <h3>
            More articles are on the way.
          </h3>

          <p>
            I'm currently working on technical articles covering
            computer science concepts, software development,
            projects, and lessons learned while building real-world
            applications.
          </p>

        </div>

      </section>


      {/* =========================
          TOPICS
      ========================= */}
      <section className="blog-content-section">

        <div className="blog-section-heading">

          <div className="blog-heading-icon">
            <FaPenNib />
          </div>

          <div>
            <span className="blog-section-label">
              TOPICS
            </span>

            <h2>
              What I Write About
            </h2>
          </div>

        </div>


        <div className="blog-topic-grid">

          <article className="blog-topic-card">

            <span className="blog-topic-number">
              01
            </span>

            <h3>
              Software Development
            </h3>

            <p>
              Development practices, application architecture,
              debugging, testing, and lessons learned while building
              software.
            </p>

          </article>


          <article className="blog-topic-card">

            <span className="blog-topic-number">
              02
            </span>

            <h3>
              Computer Science
            </h3>

            <p>
              Concepts from algorithms, data structures, operating
              systems, computer networks, databases, and related areas.
            </p>

          </article>


          <article className="blog-topic-card">

            <span className="blog-topic-number">
              03
            </span>

            <h3>
              Projects &amp; Experiments
            </h3>

            <p>
              Technical breakdowns of projects, experiments,
              implementation decisions, and problems encountered
              during development.
            </p>

          </article>


          <article className="blog-topic-card">

            <span className="blog-topic-number">
              04
            </span>

            <h3>
              Learning Journey
            </h3>

            <p>
              Notes and reflections from continuously learning new
              technologies and strengthening computer science
              fundamentals.
            </p>

          </article>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="blog-final-cta">

        <span className="blog-section-label">
          KEEP LEARNING
        </span>

        <h2>
          Learn something.
          <span> Build something.</span>
        </h2>

        <p>
          The goal of this blog is simple: document the journey,
          share useful knowledge, and keep improving.
        </p>

      </section>

    </main>
  );
};

export default Blog;