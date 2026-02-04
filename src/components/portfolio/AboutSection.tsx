import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Target, MessageSquare, FileText } from "lucide-react";

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

  const cards = [
    {
      icon: Target,
      title: "GTM Strategy",
      description: "I design and execute go to market strategies for new products and features. I have launched campaigns in warehouse robotics, SaaS, and media, always starting from customer and win/loss insight.",
      colorClasses: {
        text: "text-neon-cyan",
        bg: "bg-neon-cyan/10",
        border: "border-neon-cyan/20"
      }
    },
    {
      icon: MessageSquare,
      title: "Positioning and Messaging",
      description: "I turn complex, technical products into positioning and messaging that sales and customers can understand. This includes ICP definition, narrative, value propositions, and messaging frameworks.",
      colorClasses: {
        text: "text-neon-magenta",
        bg: "bg-neon-magenta/10",
        border: "border-neon-magenta/20"
      }
    },
    {
      icon: FileText,
      title: "Sales Enablement and Customer Proof",
      description: "I build the assets that support revenue: decks, email plays, battlecards, ROI narratives, and customer proof programs with case studies and video testimonials.",
      colorClasses: {
        text: "text-neon-purple",
        bg: "bg-neon-purple/10",
        border: "border-neon-purple/20"
      }
    }
  ];

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
            What I Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card key={index} className="card-neon group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${card.colorClasses.bg} border ${card.colorClasses.border} mr-4`}>
                    <IconComponent className={`w-6 h-6 ${card.colorClasses.text}`} />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${card.colorClasses.text}`}>{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
