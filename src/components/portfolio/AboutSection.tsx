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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gradient-secondary">
            The Problem with Most Marketing
          </h2>
          <p className="text-muted-foreground text-xl max-w-4xl mx-auto">
            It's either too boring or too buzzword-y. I fix that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="card-neon group hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Positioning That Sticks</h3>
            <p className="text-muted-foreground leading-relaxed">
              I don't just say you're "innovative" or "best-in-class." I find what actually makes you different and say it in a way people remember at 3am.
            </p>
          </Card>

          {/* Card 2 */}
          <Card className="card-neon group hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-neon-magenta">Messaging Surgery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Take a 47-slide deck full of jargon. Give me 30 minutes. You'll get one sentence your grandma could understand (and remember).
            </p>
          </Card>

          {/* Card 3 */}
          <Card className="card-neon group hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-neon-purple">GTM That Actually Goes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built launches that got sales excited (hard), customers interested (harder), and press coverage (surprisingly doable when you're not boring).
            </p>
          </Card>

          {/* Card 4 */}
          <Card className="card-neon group hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">Stakeholder Whisperer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Led external relations for a tech club. Won a VC challenge. Learned that getting buy-in is 20% logic, 80% knowing what keeps people up at night.
            </p>
          </Card>

          {/* Card 5 */}
          <Card className="card-neon group hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Data + Storytelling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently interning with a conversational AI platform. Turns out, even the coolest tech needs someone to explain why anyone should care.
            </p>
          </Card>

          {/* Card 6 */}
          <Card className="card-neon group hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-neon-magenta">Built This for £2.50</h3>
            <p className="text-muted-foreground leading-relaxed">
              Because if I'm going to talk about efficiency and scrappiness, I should probably practice it. Domain cost only. No fancy agency. Just me, no-code tools, and caffeine.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;