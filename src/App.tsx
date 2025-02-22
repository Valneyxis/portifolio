import Navbar from "../src/componets/Navbar";
import HeroSection from "../src/componets/HeroSection";
import SkillsSection from "../src/componets/SkillsSection";
import ProjectsSection from "../src/componets/ProjectsSection";
import ExperienceSection from "./componets/ExperienceSection";
import About from "../src/componets/About";
import Footer from "../src/componets/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
