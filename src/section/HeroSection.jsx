import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import ImpactSection from "./ImpactSection";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const id = visibleEntry.target.id;
          // Map "impact" back to "home" to keep nav highlighted
          setActiveSection(id === "impact" ? "home" : id);
        }
      },
      { 
        rootMargin: "-20% 0px -60% 0px", // Better thresholds for scroll spy
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9] 
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen w-full bg-secondary-bg text-text-primary">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6 xl:sticky xl:top-6 xl:self-start">
            <ProfileCard onNavigate={handleSectionClick} />
            <SocialLinks />
          </aside>

          <div className="space-y-6">
            <div className="sticky top-4 z-30">
              <Navbar
                activeSection={activeSection}
                setActiveSection={handleSectionClick}
              />
            </div>

            <HomeSection setActiveSection={handleSectionClick} />
            <ImpactSection />
            <AboutSection />
            <ProjectSection />
            <ResumeSection />
            <ContactSection />

            <footer className="rounded-3xl border border-white/10 bg-primary-bg/80 px-6 py-8 text-center shadow-sm">
              <p className="text-lg font-semibold text-text-primary">
                Learning continuously.
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                Building robust AI systems & production-ready web applications.
              </p>
            </footer>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-accent text-primary-bg shadow-lg transition hover:scale-105"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </section>
  );
};

export default HeroSection;
