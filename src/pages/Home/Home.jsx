import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Home.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/GauravDeora",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/gaurav-deora-835b49323/",
  },
  {
    name: "Email",
    icon: <FiMail />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=gauravdeora17@gmail.com",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/ImperfectONE/",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef />,
    url: "https://www.codechef.com/users/imperfectone",
  },
];

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="page-container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="hero-label"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="status-dot"></span>
              Available for opportunities
            </motion.div>

            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Gaurav
              <span> Deora.</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Computer Science Engineer
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I build software, explore computer science, and work on
              research-oriented projects. I'm particularly interested in
              systems, problem solving, and technology that creates practical
              impact.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link to="/projects" className="primary-button">
                View My Projects
                <FiArrowRight />
              </Link>

              <a
                href="/resume.pdf"
                className="secondary-button"
                download
              >
                Download Resume
                <FiDownload />
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <span className="social-label">Connect with me</span>

              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-title">
                  gaurav@portfolio ~
                </span>

                <FiCode />
              </div>

              <div className="code-content">
                <p>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span> = {"{"}
                </p>

                <p className="code-indent">
                  <span className="code-property">name:</span>{" "}
                  <span className="code-string">"Gaurav Deora"</span>,
                </p>

                <p className="code-indent">
                  <span className="code-property">degree:</span>{" "}
                  <span className="code-string">"B.Tech CSE"</span>,
                </p>

                <p className="code-indent">
                  <span className="code-property">focus:</span> [
                </p>

                <p className="code-double-indent">
                  <span className="code-string">
                    "Software Engineering"
                  </span>
                  ,
                </p>

                <p className="code-double-indent">
                  <span className="code-string">"Computer Science"</span>,
                </p>

                <p className="code-double-indent">
                  <span className="code-string">"Research"</span>
                </p>

                <p className="code-indent">],</p>

                <p className="code-indent">
                  <span className="code-property">status:</span>{" "}
                  <span className="code-string">"Always learning"</span>
                </p>

                <p>{"};"}</p>

                <div className="code-cursor"></div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <FiCode />
              <div>
                <strong>Build</strong>
                <span>Learn · Create · Improve</span>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span className="floating-number">9+</span>
              <div>
                <strong>Portfolio</strong>
                <span>Sections</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;