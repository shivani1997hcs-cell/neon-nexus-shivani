import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import HighlightsBar from "@/components/portfolio/HighlightsBar";
import IntelligenceStack from "@/components/portfolio/IntelligenceStack";
import CaseStudies from "@/components/portfolio/CaseStudies";
import HowIWork from "@/components/portfolio/HowIWork";

import Background from "@/components/portfolio/Background";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <HighlightsBar />
        <IntelligenceStack />
        <CaseStudies />
        <HowIWork />
        
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
