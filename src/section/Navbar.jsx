import PropTypes from "prop-types";
import { motion } from "framer-motion";
import logo from "../assets/images/logoFa.svg";

const navItems = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Projects", value: "projects" },
  { label: "Resume", value: "resume" },
  { label: "Contact", value: "contact" },
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (event, section) => {
    event.preventDefault();
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      // Find element and scroll with smooth alignment offset
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="rounded-3xl border border-white/10 bg-primary-bg/75 p-3 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        <motion.a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 transition hover:bg-white/10"
          aria-label="Home"
        >
          <img src={logo} alt="Logo" className="h-5.5 w-5.5" />
        </motion.a>

        <nav
          className="flex flex-wrap items-center justify-center gap-1 sm:gap-2"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.value;
            return (
              <a
                key={item.value}
                href={`#${item.value}`}
                className={`relative rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={(event) => handleNavClick(event, item.value)}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white/10 rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
