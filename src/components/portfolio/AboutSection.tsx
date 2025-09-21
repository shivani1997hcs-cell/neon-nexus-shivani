import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-6 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <Card className="card-neon group hover:scale-[1.02] hover:shadow-neon-cyan transition-all duration-300 text-center relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-neon-cyan">
              Hey there! 👋
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm that product manager who actually understands both the tech AND the humans using it. 
                With a background that spans from crunching numbers at startups to strategizing at big tech, 
                I've learned that the best products aren't just functional—they're magical.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not obsessing over user journeys or diving deep into analytics, you'll find me 
                exploring new technologies or mentoring the next generation of product folks. Because great 
                products aren't built by lone wolves—they're built by passionate teams.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;