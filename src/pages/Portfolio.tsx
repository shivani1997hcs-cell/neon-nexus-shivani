import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import PhotosSection from "@/components/portfolio/PhotosSection";
import WorkSection from "@/components/portfolio/WorkSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CredentialsSection from "@/components/portfolio/CredentialsSection";
import Contact from "@/components/portfolio/Contact";
import FloatingBackground from "@/components/portfolio/FloatingBackground";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <FloatingBackground />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PhotosSection />
        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
        <CredentialsSection />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
