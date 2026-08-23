import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiMapPin,
  FiFilm,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Defence Asset Tracking & Geofencing System",
    shortDescription:
      "A defence-oriented asset tracking and geofencing system designed to streamline the management and monitoring of defence assets.",
    description:
      "Developed a Defence Asset Tracking & Geofencing System to streamline the management and monitoring of defence assets. The system combines location tracking, geospatial processing, geofencing and asset management into a unified web application.",
    category: "Research",
    icon: <FiMapPin />,
    featured: true,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Leaflet.js",
      "Java 17",
      "Gson",
      "Apache Tomcat 9",
      "PostgreSQL",
      "PostGIS",
      "GeoServer",
      "BCrypt",
      "HikariCP",
      "Maven",
      "Docker",
    ],

    github:
      "https://github.com/GauravDeora/Defence-Asset-Tracking-Geofencing-System",

    demo: null,
  },

  {
    id: 2,
    title: "Movie Booking System",
    shortDescription:
      "A web-based movie booking system that allows users to browse movies, select seats and book tickets through a user-friendly interface.",
    description:
      "Created a movie booking system with a simple and intuitive web interface. Users can browse available movies, select seats and proceed with ticket booking.",
    category: "Web Development",
    icon: <FiFilm />,
    featured: false,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: null,
    demo: null,
  },
];

const filters = [
  "All",
  "Research",
  "Web Development",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="projects-page">

      {/* ================= HERO ================= */}

      <section className="projects-hero section">

        <div className="page-container">

          <motion.div
            className="section-header"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="section-label">
              03 / PROJECTS
            </div>

            <h1 className="section-title">
              Things I've
              <span> built.</span>
            </h1>

            <p className="section-description">
              A selection of projects where I turn concepts,
              coursework and research ideas into practical
              working systems.
            </p>

          </motion.div>


          {/* ================= FILTERS ================= */}

          <motion.div
            className="projects-filters"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >

            {filters.map((filter) => (

              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "project-filter active"
                    : "project-filter"
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>

            ))}

          </motion.div>


          {/* ================= PROJECTS ================= */}

          <motion.div
            layout
            className="projects-grid"
          >

            <AnimatePresence mode="popLayout">

              {filteredProjects.map(
                (project, index) => (

                  <motion.article
                    key={project.id}
                    layout
                    className={
                      project.featured
                        ? "project-card featured"
                        : "project-card"
                    }
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                  >

                    {/* Project visual */}

                    <div className="project-visual">

                      <div className="project-grid-pattern"></div>

                      <div className="project-icon">
                        {project.icon}
                      </div>

                      <div className="project-code-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      {project.featured && (
                        <div className="featured-label">
                          FEATURED PROJECT
                        </div>
                      )}

                    </div>


                    {/* Project content */}

                    <div className="project-content">

                      <div className="project-category">
                        {project.category}
                      </div>

                      <h2>{project.title}</h2>

                      <p>
                        {project.shortDescription}
                      </p>


                      {/* Technologies */}

                      <div className="technology-list">

                        {project.technologies
                          .slice(0, 6)
                          .map((technology) => (

                            <span
                              key={technology}
                              className="technology-tag"
                            >
                              {technology}
                            </span>

                          ))}

                        {project.technologies.length >
                          6 && (
                          <span className="technology-tag more">
                            +
                            {project.technologies.length -
                              6}
                          </span>
                        )}

                      </div>


                      {/* Actions */}

                      <div className="project-actions">

                        <button
                          type="button"
                          className="project-details-btn"
                          onClick={() =>
                            setSelectedProject(project)
                          }
                        >
                          View Details
                          <FiArrowUpRight />
                        </button>


                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-github-btn"
                          >
                            <FiGithub />
                            GitHub
                          </a>
                        ) : (
                          <span className="project-unavailable">
                            GitHub unavailable
                          </span>
                        )}

                      </div>

                    </div>

                  </motion.article>

                )
              )}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>


      {/* ================= PROJECT PHILOSOPHY ================= */}

      <section className="project-philosophy section">

        <div className="page-container">

          <motion.div
            className="philosophy-card"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="philosophy-number">
              03
            </div>

            <div className="philosophy-content">

              <div className="section-label">
                HOW I BUILD
              </div>

              <h2>
                Learn the concept.
                <span> Build the system.</span>
              </h2>

              <p>
                I believe the best way to understand a technology
                is to use it to solve a real problem. My projects
                combine computer science fundamentals with
                practical implementation, experimentation and
                continuous learning.
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= PROJECT MODAL ================= */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="project-modal-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedProject(null)
            }
          >

            <motion.div
              className="project-modal"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                type="button"
                className="modal-close"
                onClick={() =>
                  setSelectedProject(null)
                }
                aria-label="Close project details"
              >
                <FiX />
              </button>


              <div className="modal-project-icon">
                {selectedProject.icon}
              </div>

              <div className="project-category">
                {selectedProject.category}
              </div>

              <h2>
                {selectedProject.title}
              </h2>

              <p className="modal-description">
                {selectedProject.description}
              </p>


              <div className="modal-section">

                <h3>
                  Technologies
                </h3>

                <div className="technology-list modal-tech">

                  {selectedProject.technologies.map(
                    (technology) => (

                      <span
                        key={technology}
                        className="technology-tag"
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>


              <div className="modal-actions">

                {selectedProject.github && (

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-github"
                  >
                    <FiGithub />
                    View on GitHub
                    <FiExternalLink />
                  </a>

                )}

                {selectedProject.demo && (

                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-demo"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                )}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}

export default Projects;