import { useState, useEffect } from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import TechnicalArsenal from "@/components/portfolio/TechnicalArsenal";
import WorkExperience from "@/components/portfolio/WorkExperience";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Notifications from "@/components/portfolio/Notifications";

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
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechnicalArsenal />
      <WorkExperience />
      <CaseStudies />
      <Education />
      <Contact />
      {showNotifications && <Notifications />}
    </div>
  );
};

export default Portfolio;