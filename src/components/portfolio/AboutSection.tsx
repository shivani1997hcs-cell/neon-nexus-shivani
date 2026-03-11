import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "5+", label: "Years PMM" },
  { value: "68%", label: "ARR Growth" },
  { value: "£20M+", label: "Pipeline Influenced" },
  { value: "3", label: "Industries" },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">About</p>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight text-foreground">
          The marketer who reads the CRM before writing the brief.
        </h2>

        {/* Body */}
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-4xl">
          <p>
            I didn't start in marketing. I started in chemistry. Which, honestly, explains a lot about how I work: I'm obsessed with root causes, I don't trust a hypothesis until it's tested, and I get unreasonably excited when the data confirms what a customer said in an interview three months ago.
          </p>
          <p>
            I fell into product marketing by accident and stayed because it's the one role where you're genuinely expected to understand everything: the product, the buyer, the competitor, the sales rep's bad week, the CFO's quarterly pressure. You're the connective tissue. And when you get it right, the whole GTM machine moves differently.
          </p>
          <p>
            Over the last five years I've done this across three very different worlds: digital media at Times Internet, where I grew a subscription product 6x and closed £600K in brand sponsorships. B2B SaaS at Graphy, where I rebuilt onboarding messaging and hit 94% retention. And AI-powered warehouse automation at GreyOrange, where I owned positioning and GTM for three products, helped grow ARR 68%, and ran launches that drove £20M+ in influenced pipeline.
          </p>
          <p>
            I completed my MBA at Imperial College London in 2025, focused on strategy, transformation and AI workflows. It sharpened how I think about markets and pricing, not just individual campaigns.
          </p>
          <p>
            What I care most about: getting close to the customer, finding the real insight, and building the narrative and motion around it. The campaigns, the decks, the battlecards, all of that follows. The insight always comes first.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
