import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./section/HeroSection";
import HomeSection from "./section/HomeSection";
import ResumeSection from "./section/ResumeSection";
import ProjectSection from "./section/ProjectSection";
import ContactSection from "./section/ContactSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />}>
          <Route index element={<HomeSection />} />
          <Route path="home" element={<HomeSection />} />
          <Route path="resume" element={<ResumeSection />} />
          <Route path="projects" element={<ProjectSection />} />
          <Route path="contacts" element={<ContactSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
