import { Button } from "@/components/ui/button";
import TestimonialSlider from "./TestimonialSlider";

const HeroSection = () => {
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
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Manager of Product / Marketing / GTM / Strategy
        </h2>

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