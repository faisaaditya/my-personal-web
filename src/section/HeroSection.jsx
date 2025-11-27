import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import ResumeSection from "./ResumeSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import Stats from "./Stats";

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  const getCurrentSection = () => {
    switch (activeSection) {
      case "resume":
        return <ResumeSection />;
      case "projects":
        return <ProjectSection />;
      case "contacts":
        return <ContactSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <section className="hero min-h-screen w-full bg-secondary-bg text-text-primary">
      <div className="mx-auto px-4 pt-8">
        <div className="main-body mt-8 p-3">
          <div className="flex flex-col md:flex-row">
            {/* LEFT SIDE */}
            <div className="md:w-1/4 p-3 flex flex-col gap-6">
              <ProfileCard />
              <SocialLinks />
              <Stats />
            </div>

            {/* RIGHT SIDE (CONTENT) */}
            <div className="md:w-3/4 p-6 md:pl-10">
              <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              {getCurrentSection()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
