import { useState } from "react";
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
        return <HomeSection />;
    }
  };

  return (
    <section className="hero h-screen w-full bg-secondary-bg text-text-primary">
      <div className="mx-auto px-4 pt-8">
        <div className="w-full md:w-2/3 mx-auto"></div>
        <div className="main-body mt-8 p-3">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-6 md:mb-0 p-3 flex flex-col justify-between">
              <ProfileCard />
              <SocialLinks />
              <Stats />
            </div>
            <div className="md:w-3/4 p-4">
              <Navbar setActiveSection={setActiveSection} />
              {getCurrentSection()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
