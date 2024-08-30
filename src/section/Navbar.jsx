import PropTypes from "prop-types";
import logo from "../assets/images/logoFA.svg";
import { useState } from "react";

const Navbar = ({ setActiveSection }) => {
  const [activeSection, setActiveSectionState] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveSectionState(section);
  };

  const navLinkClasses = (section) =>
    `font-medium transition-colors duration-300 hover:text-text-secondary focus:outline-none ${
      activeSection === section
        ? "text-text-primary border-b-2 border-text-text "
        : "text-text-primary"
    }`;

  return (
    <header className="relative flex flex-wrap rounded-lg sm:justify-start sm:flex-nowrap w-full bg-primary-bg text-sm py-3 mb-6">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className=""
            href="#"
            aria-label="Brand"
            onClick={() => handleSectionClick("home")}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 hover:scale-105 hover: duration-300"
            />
          </a>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
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
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
