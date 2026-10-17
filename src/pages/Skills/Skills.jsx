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
    id: "development",
    name: "Development",
    icon: <FiGlobe />,
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

const proficiencyLabels = {
  1: "Beginner",
  2: "Advanced Beginner",
  3: "Intermediate",
  4: "Proficient",
  5: "Expert",
};

const skills = [
  // Languages
  {
    name: "C",
    category: "languages",
    icon: <FiCode />,
    level: 4,
  },
  {
    name: "C++",
    category: "languages",
    icon: <FiCode />,
    level: 2,
  },
  {
    name: "Python",
    category: "languages",
    icon: <FiCode />,
    level: 4,
  },
  {
    name: "Rust",
    category: "languages",
    icon: <FiCode />,
    level: 1,
  },
  {
    name: "Java",
    category: "languages",
    icon: <FiCode />,
    level: 3,
  },
  {
    name: "C#",
    category: "languages",
    icon: <FiCode />,
    level: 1,
  },
  {
    name: "JavaScript",
    category: "languages",
    icon: <FiCode />,
    level: 4,
  },

  // Frontend, backend, and web development technologies
  {
    name: "HTML",
    category: "development",
    icon: <FiGlobe />,
    level: 4,
  },
  {
    name: "CSS",
    category: "development",
    icon: <FiGlobe />,
    level: 4,
  },
  {
    name: "Bootstrap",
    category: "development",
    icon: <FiGlobe />,
    level: 3,
  },
  {
    name: "React",
    category: "development",
    icon: <FiCode />,
    level: 4,
  },

  // Databases
  {
    name: "MySQL",
    category: "database",
    icon: <FiDatabase />,
    level: 4,
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: <FiDatabase />,
    level: 4,
  },
  {
    name: "MongoDB",
    category: "database",
    icon: <FiDatabase />,
    level: 2,
  },

  // Tools and development environments
  {
    name: "Git",
    category: "tools",
    icon: <FiGitBranch />,
    level: 4,
  },
  {
    name: "GitHub",
    category: "tools",
    icon: <FiGitBranch />,
    level: 5,
  },
  {
    name: "VS Code",
    category: "tools",
    icon: <FiTerminal />,
    level: 5,
  },
  {
    name: "Linux",
    category: "tools",
    icon: <FiTerminal />,
    level: 3,
  },
  {
    name: "Docker",
    category: "tools",
    icon: <FiTool />,
    level: 4,
  },
  {
    name: "Postman",
    category: "tools",
    icon: <FiTool />,
    level: 3,
  },
];

// Ordered by broad relevance to software development,
// followed by more specialized subjects.
const fundamentals = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Internet of Things (IoT)",
  "Blockchain and Cryptocurrency",
  "Design Thinking",
  "Computer Architecture",
  "Assembly Language and Microprocessors",
  "Computer-Aided Graphics Design",
];

const allSkillsDemandOrder = [
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "React",
  "PostgreSQL",
  "MySQL",
  "Java",
  "C#",
  "C++",
  "VS Code",
  "GitHub",
  "Git",
  "Docker",
  "MongoDB",
  "Bootstrap",
  "Linux",
  "Postman",
  "C",
  "Rust",
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? [...skills].sort(
          (a, b) =>
            allSkillsDemandOrder.indexOf(a.name) -
            allSkillsDemandOrder.indexOf(b.name)
        )
      : skills
          .filter((skill) => skill.category === activeCategory)
          .sort((a, b) => b.level - a.level);

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
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* ================= SKILLS ================= */}

          <motion.div layout className="skills-grid">
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
                    <div className="skill-icon">{skill.icon}</div>

                    <span
                      className={`skill-level level-${skill.level}`}
                      title={`Level ${skill.level}`}
                    >
                      {proficiencyLabels[skill.level]}
                    </span>
                  </div>

                  <h3>{skill.name}</h3>

                  <div 
                    className="skill-line"
                    role="img"
                    aria-label={`Proficiency: ${skill.level} out of 5`}
                    title={`Level ${skill.level} of 5`}
                  >
                    {Array.from({ length: 5 }, (_, segmentIndex) => (
                      <span
                        key={`${skill.name}-${segmentIndex}`}
                        className={segmentIndex < skill.level ? "filled" : ""}
                      />
                    ))}
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
            <div className="section-label">COMPUTER SCIENCE</div>

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