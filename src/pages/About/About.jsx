import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiTarget,
  FiAward,
} from "react-icons/fi";
import "./About.css";

const interests = [
  {
    icon: <FiCode />,
    title: "Software Development",
    description:
      "Building practical applications with clean, maintainable and scalable code.",
  },
  {
    icon: <FiCpu />,
    title: "Computer Science",
    description:
      "Exploring algorithms, operating systems, computer networks and system design.",
  },
  {
    icon: <FiBookOpen />,
    title: "Research",
    description:
      "Working on research-oriented projects and understanding emerging technologies.",
  },
  {
    icon: <FiTarget />,
    title: "Problem Solving",
    description:
      "Strengthening algorithmic thinking through competitive programming and technical problem solving.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero section">
        <div className="page-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">01 / ABOUT ME</div>

            <h1 className="section-title">
              A little bit about
              <span> me.</span>
            </h1>

            <p className="section-description">
              Computer Science student, developer and technology
              enthusiast focused on learning, building and solving
              meaningful problems.
            </p>
          </motion.div>

          <div className="about-introduction">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p>
                I'm <strong>Gaurav Deora</strong>, a Computer Science
                Engineering student with a strong interest in software
                development, computer science fundamentals and
                research-oriented technology.
              </p>

              <p>
                I enjoy understanding how things work beneath the
                surface rather than simply using them. This has led me
                to explore areas such as algorithms, operating systems,
                computer networks, databases and software engineering.
              </p>

              <p>
                Alongside academics, I work on practical projects to
                turn concepts into working systems. I believe that the
                best way to learn technology is to combine theory with
                implementation.
              </p>

              <p>
                My long-term goal is to develop strong technical depth
                while working on challenging problems that have real
                practical impact.
              </p>
            </motion.div>

            <motion.div
              className="about-highlight"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="highlight-icon">
                <FiAward />
              </div>

              <span className="highlight-label">
                CURRENT FOCUS
              </span>

              <h2>
                Building strong foundations
                <span> for the future.</span>
              </h2>

              <p>
                Strengthening computer science fundamentals,
                developing projects and preparing for advanced
                opportunities in technology and research.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-education section">
        <div className="page-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              EDUCATION
            </div>

            <h2 className="section-title">
              Academic <span>journey.</span>
            </h2>
          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-icon">
              <FiBookOpen />
            </div>

            <div className="education-content">
              <div className="education-top">
                <span className="education-type">
                  B.TECH
                </span>

                <span className="education-status">
                  In Progress
                </span>
              </div>

              <h3>
                Bachelor of Technology
              </h3>

              <h4>
                Computer Science & Engineering
              </h4>

              <p>
                Developing a strong foundation in computer science,
                programming, mathematics and engineering concepts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-interests section">
        <div className="page-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              WHAT I DO
            </div>

            <h2 className="section-title">
              Areas I'm <span>exploring.</span>
            </h2>
          </motion.div>

          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                className="interest-card"
                key={interest.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <div className="interest-icon">
                  {interest.icon}
                </div>

                <h3>{interest.title}</h3>

                <p>{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;