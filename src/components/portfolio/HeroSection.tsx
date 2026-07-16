import TerminalAnimation from "./TerminalAnimation";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Shivani_Saluja_Resume.pdf";
    link.download = "Shivani_Saluja_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToSystem = () => document.getElementById("system")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border-strong bg-surface text-xs text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for senior PMM roles
          </div>

          <h1 className="font-display font-semibold tracking-tight text-foreground leading-[0.98]"
              style={{ fontSize: "clamp(2.5rem, 6.2vw, 5rem)" }}>
            I build the<br />
            <span className="text-accent">intelligence layer</span><br />
            for product marketing.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Product marketer across robotics, AI and B2B SaaS. I turn complex products into commercial narratives — and I build AI agents that do the heavy lifting.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={goToSystem}
              className="group px-5 py-3 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-accent-glow transition-colors flex items-center gap-2"
            >
              See the system
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-5 py-3 rounded-md border border-border-strong text-foreground font-medium text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Download CV
            </button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            London <span className="text-border-strong mx-2">·</span>
            Currently at Mention Me <span className="text-border-strong mx-2">·</span>
            MBA, Imperial College London
          </p>
        </div>

        {/* Right: terminal */}
        <div className="w-full">
          <TerminalAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
