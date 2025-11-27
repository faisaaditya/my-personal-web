import PropTypes from "prop-types";
import logo from "../assets/images/logoFa.svg";

const Navbar = ({ activeSection, setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const navLinkClasses = (section) =>
    `font-medium transition-colors duration-300 hover:text-text-secondary ${
      activeSection === section
        ? "text-accent border-b-2 border-accent"
        : "text-text-primary"
    }`;

  return (
    <header className="flex flex-wrap bg-primary-bg rounded-lg py-3 mb-6">
      <nav className="w-full flex items-center justify-between px-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 cursor-pointer"
          onClick={() => handleSectionClick("home")}
        />

        <div className="flex gap-6">
          <button
            className={navLinkClasses("home")}
            onClick={() => handleSectionClick("home")}
          >
            Home
          </button>
          <button
            className={navLinkClasses("resume")}
            onClick={() => handleSectionClick("resume")}
          >
            Resume
          </button>
          <button
            className={navLinkClasses("projects")}
            onClick={() => handleSectionClick("projects")}
          >
            Projects
          </button>
          <button
            className={navLinkClasses("contacts")}
            onClick={() => handleSectionClick("contacts")}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
