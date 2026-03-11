import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.005,
        y: (e.clientY - window.innerHeight / 2) * 0.005,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-20 relative overflow-hidden"
    >
      {/* Subtle green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--neon-cyan) / 0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 text-center max-w-5xl mx-auto"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      >
        {/* Tag */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card/50 mb-8">
          <div className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Senior Product Marketing Manager · <span className="text-neon-cyan">Available for Hire</span>
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-bold mb-6 text-foreground tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.95 }}
        >
          Shivani Saluja
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 uppercase tracking-widest font-light">
          I turn complex B2B products into
        </p>
        <p
          className="font-serif italic text-neon-cyan mb-10"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          stories that close deals.
        </p>

        {/* Location & role */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-neon-cyan" />
            Based in <span className="text-foreground font-medium">London</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-neon-cyan" />
            AI, Enterprise SaaS & <span className="text-foreground font-medium">Warehouse Automation</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-base font-semibold rounded-full"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-border text-foreground hover:bg-muted px-8 py-3 text-base font-semibold rounded-full"
          >
            Let's Chat
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
