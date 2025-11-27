import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import HeroSection from "./section/HeroSection";
import HomeSection from "./section/HomeSection";
import ResumeSection from "./section/ResumeSection";
import ProjectSection from "./section/ProjectSection";
import ContactSection from "./section/ContactSection";

import LoadingScreen from "./components/LoadingScreen"; // loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Menunggu halaman fully loaded OR fallback 2 detik
    const handleLoaded = () => {
      setTimeout(() => setLoading(false), 300);
    };

    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      window.addEventListener("load", handleLoaded);
      const fallback = setTimeout(handleLoaded, 2500);

      return () => {
        window.removeEventListener("load", handleLoaded);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <Router>
      {/* LOADING SPLASH */}
      {loading && <LoadingScreen />}

      {/* AFTER LOAD */}
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        <Routes>
          <Route path="/" element={<HeroSection />}>
            <Route index element={<HomeSection />} />
            <Route path="home" element={<HomeSection />} />
            <Route path="resume" element={<ResumeSection />} />
            <Route path="projects" element={<ProjectSection />} />
            <Route path="contacts" element={<ContactSection />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
