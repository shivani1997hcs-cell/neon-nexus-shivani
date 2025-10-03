import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";
import TypingAnimation from "./TypingAnimation";

const HeroSection = () => {
  const [selectedTitle, setSelectedTitle] = useState("Product");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const titleOptions = [
    "Product",
    "Marketing", 
    "GTM",
    "Strategy",
    "AI & Growth",
    "Partnerships",
    "Business Development"
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Shivani_Saluja_Resume.pdf';
    link.download = 'Shivani_Saluja_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-magenta rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-neon-blue rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div 
        className="relative z-10 text-center max-w-4xl mx-auto"
        style={{ 
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` 
        }}
      >
        {/* Available for Hire badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-neon-cyan bg-neon-cyan/10 mb-8 glow-cyan">
          <div className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></div>
          <span className="text-neon-cyan font-medium text-sm">Available for Hire</span>
        </div>

        {/* Name and title with animated gradient */}
        <h1 className="font-bold mb-8 text-gradient-animated animate-glow" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
          Shivani Saluja
        </h1>
        
        {/* Typing animation subtitle */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <TypingAnimation
            text="Product marketer who actually gets what customers want to hear (not what engineering wants to say)"
            speed={50}
            delay={1000}
            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed block"
          />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={handleDownloadResume}
            variant="neon"
            size="lg"
            className="px-8 py-3 text-lg font-semibold hover:scale-105 hover:shadow-neon-cyan hover:-translate-y-1 transition-all duration-300"
          >
            Download My Resume
          </Button>
          <Button 
            variant="outline"
            onClick={handleContactMe}
            size="lg"
            className="px-8 py-3 text-lg font-semibold border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            Let's Chat
          </Button>
        </div>

        {/* Testimonial slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default HeroSection;