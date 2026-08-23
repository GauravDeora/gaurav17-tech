import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Research", path: "/research" },
  { name: "Certifications", path: "/certifications" },
  { name: "Resume", path: "/resume" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">GD</span>
          <span className="logo-text">Gaurav<span>.</span></span>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/resume"
            className="resume-button"
            onClick={closeMenu}
          >
            <FiDownload />
            Resume
          </NavLink>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;