import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

const HeroSection = () => {
  const [selectedTitle, setSelectedTitle] = useState("Product");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
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

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Available for Hire badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-neon-cyan bg-neon-cyan/10 mb-8 glow-cyan">
          <div className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></div>
          <span className="text-neon-cyan font-medium text-sm">Available for Hire</span>
        </div>

        {/* Name and title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient-primary">
          Shivani Saluja
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light flex items-center justify-center gap-2">
          <span>Manager of</span>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 px-3 py-1 rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-colors"
            >
              {selectedTitle}
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-sm border border-neon-cyan/30 rounded-lg shadow-neon-cyan overflow-hidden z-50">
                {titleOptions.map((title) => (
                  <button
                    key={title}
                    onClick={() => {
                      setSelectedTitle(title);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-neon-cyan/10 transition-colors ${
                      selectedTitle === title ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-foreground'
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={handleDownloadResume}
            variant="neon"
            size="lg"
            className="px-8 py-3 text-lg font-semibold"
          >
            Download Resume
          </Button>
          <Button 
            variant="neon-magenta"
            onClick={handleContactMe}
            size="lg"
            className="px-8 py-3 text-lg font-semibold"
          >
            Contact Me
          </Button>
        </div>

        {/* Testimonial slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default HeroSection;