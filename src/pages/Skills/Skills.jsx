import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiGlobe,
  FiTool,
  FiCpu,
  FiLayers,
  FiGitBranch,
  FiTerminal,
  FiServer,
} from "react-icons/fi";

import "./Skills.css";

const categories = [
  {
    id: "all",
    name: "All Skills",
    icon: <FiLayers />,
  },
  {
    id: "languages",
    name: "Languages",
    icon: <FiCode />,
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <FiGlobe />,
  },
  {
    id: "backend",
    name: "Backend",
    icon: <FiServer />,
  },
  {
    id: "database",
    name: "Databases",
    icon: <FiDatabase />,
  },
  {
    id: "tools",
    name: "Tools",
    icon: <FiTool />,
  },
];

const skills = [
  {
    name: "C",
    category: "languages",
    icon: <FiCode />,
    level: "Core",
  },
  {
    name: "C++",
    category: "languages",
    icon: <FiCode />,
    level: "Core",
  },
  {
    name: "JavaScript",
    category: "languages",
    icon: <FiCode />,
    level: "Working",
  },
  {
    name: "HTML",
    category: "frontend",
    icon: <FiGlobe />,
    level: "Working",
  },
  {
    name: "CSS",
    category: "frontend",
    icon: <FiGlobe />,
    level: "Working",
  },
  {
    name: "React",
    category: "frontend",
    icon: <FiCode />,
    level: "Learning",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: <FiServer />,
    level: "Learning",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: <FiServer />,
    level: "Learning",
  },
  {
    name: "MongoDB",
    category: "database",
    icon: <FiDatabase />,
    level: "Learning",
  },
  {
    name: "MySQL",
    category: "database",
    icon: <FiDatabase />,
    level: "Working",
  },
  {
    name: "Git",
    category: "tools",
    icon: <FiGitBranch />,
    level: "Working",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: <FiGitBranch />,
    level: "Working",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: <FiTerminal />,
    level: "Daily",
  },
  {
    name: "Linux",
    category: "tools",
    icon: <FiTerminal />,
    level: "Learning",
  },
];

const fundamentals = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Computer Architecture",
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <main className="skills-page">

      {/* ================= HERO ================= */}

      <section className="skills-hero section">
        <div className="page-container">

          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              02 / SKILLS
            </div>

            <h1 className="section-title">
              Tools I use to
              <span> build.</span>
            </h1>

            <p className="section-description">
              A growing collection of programming languages,
              technologies and computer science concepts that I use
              while learning and building projects.
            </p>
          </motion.div>


          {/* ================= FILTERS ================= */}

          <motion.div
            className="skills-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={
                  activeCategory === category.id
                    ? "skill-filter active"
                    : "skill-filter"
                }
                onClick={() =>
                  setActiveCategory(category.id)
                }
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>


          {/* ================= SKILLS ================= */}

          <motion.div
            layout
            className="skills-grid"
          >
            <AnimatePresence mode="popLayout">

              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.035,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="skill-card-top">

                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <span
                      className={`skill-level ${skill.level
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {skill.level}
                    </span>

                  </div>

                  <h3>{skill.name}</h3>

                  <div className="skill-line">
                    <span></span>
                  </div>

                </motion.div>
              ))}

            </AnimatePresence>
          </motion.div>

        </div>
      </section>


      {/* ================= CS FUNDAMENTALS ================= */}

      <section className="fundamentals-section section">

        <div className="page-container">

          <motion.div
            className="section-header"
            initial={{
              opacity: 0,
              y: 20,
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

            <div className="section-label">
              COMPUTER SCIENCE
            </div>

            <h2 className="section-title">
              Strong <span>foundations.</span>
            </h2>

            <p className="section-description">
              Beyond frameworks and tools, I focus on understanding
              the fundamentals that form the foundation of good
              software engineering.
            </p>

          </motion.div>


          <div className="fundamentals-grid">

            {fundamentals.map((item, index) => (

              <motion.div
                className="fundamental-card"
                key={item}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
              >

                <span className="fundamental-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FiCpu />

                <span>{item}</span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= LEARNING ================= */}

      <section className="learning-section section">

        <div className="page-container">

          <motion.div
            className="learning-card"
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

            <div className="learning-indicator">

              <span></span>

              CURRENTLY LEARNING

            </div>

            <h2>
              Always learning.
              <span> Always building.</span>
            </h2>

            <p>
              Technology changes quickly. My approach is to keep
              strengthening fundamentals while continuously learning
              new tools and technologies through practical projects.
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

export default Skills;