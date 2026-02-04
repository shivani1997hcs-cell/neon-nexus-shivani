import { useState, useEffect } from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechnicalArsenal from "@/components/portfolio/TechnicalArsenal";
import WorkExperience from "@/components/portfolio/WorkExperience";
import CaseStudies from "@/components/portfolio/CaseStudies";
import WorkSamples from "@/components/portfolio/WorkSamples";
import HowIWork from "@/components/portfolio/HowIWork";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Notifications from "@/components/portfolio/Notifications";
import FloatingBackground from "@/components/portfolio/FloatingBackground";

const Portfolio = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Start notifications after a brief delay
    const timer = setTimeout(() => {
      setShowNotifications(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <FloatingBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechnicalArsenal />
        <WorkExperience />
        <CaseStudies />
        <WorkSamples />
        <HowIWork />
        <Education />
        <Contact />
      </div>
      {showNotifications && <Notifications />}
    </div>
  );
};

export default Portfolio;
