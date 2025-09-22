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
                Recent Imperial MBA grad in that classic 'I have business knowledge and ambition, now what?' phase. 
                It's actually liberating-no predetermined path, just curiosity about where problems need solving.
              </p>
              
              <p className="text-muted-foreground">
                Pre-MBA, I made warehouse automation less painful for humans. It taught me that fixing friction 
                points matters whether you're designing robot workflows or user experiences.
              </p>
              
              <p className="text-muted-foreground">
                These days I'm exploring everything-fintech, consumer products, you name it. Not collecting 
                experiences, but finding where my systematic problem-solving can actually make a difference.
              </p>
              
              <p className="text-muted-foreground">
                Also, I make a solid flat white and have strong opinions about London's startup coffee scene. 
                Important life skills, obviously.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;