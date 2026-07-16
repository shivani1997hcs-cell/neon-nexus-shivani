import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Radio, Phone, Newspaper, Star, Database, Slack, FileText, Swords, Files, Palette, LineChart } from "lucide-react";

const sources = [
  { label: "Competitor sites", icon: Radio },
  { label: "Paid ads", icon: Newspaper },
  { label: "Review sites", icon: Star },
  { label: "Sales calls", icon: Phone },
  { label: "CRM", icon: Database },
];

const agents = [
  "Compete",
  "Listen",
  "Compose",
  "Serve",
];

const outputs = [
  { label: "Slack briefs", icon: Slack },
  { label: "Case studies", icon: FileText },
  { label: "Battlecards", icon: Swords },
  { label: "Enablement", icon: Files },
];

const systems = [
  {
    name: "Competitive intelligence agent",
    what: "Monitors competitor positioning, landing pages and campaigns. A weekly brief lands in Slack.",
    outcome: "The team stopped doing quarterly manual teardowns.",
  },
  {
    name: "Call-listening agent",
    what: "Analyses sales calls at scale to surface the exact language buyers use.",
    outcome: "Fed a messaging rewrite that lifted inbound pipeline.",
  },
  {
    name: "Case-study workflow",
    what: "Handles drafting from win data end to end.",
    outcome: "9 approved case studies in one week, quality intact.",
  },
  {
    name: "Asset library skill",
    what: "Knows every asset we have and where it lives.",
    outcome: "Anyone in the org self-serves instead of asking me.",
  },
  {
    name: "Brand-voice skill",
    what: "Keeps everything generated on-brand automatically.",
    outcome: "No more editing pass for tone.",
  },
  {
    name: "Automated customer value reports",
    what: "Monthly impact reports to customers, generated from live data.",
    outcome: "Supports retention with no manual rebuild.",
  },
];

const Diagram = () => {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const active = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.current = true;
      });
    }, { threshold: 0.25 });
    io.observe(el);
    const id = setInterval(() => {
      if (active.current) setStep((s) => (s + 1) % 3);
    }, 1600);
    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="relative border border-border rounded-lg bg-surface p-6 md:p-10">
      <div className="grid grid-cols-3 gap-4 md:gap-10 items-center">
        {/* Sources */}
        <div className="space-y-2">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Sources</div>
          {sources.map((s, i) => {
            const Icon = s.icon;
            const isActive = step === 0;
            return (
              <div
                key={s.label}
                className={`flex items-center gap-2 px-3 py-2 rounded-md border bg-background transition-all ${
                  isActive ? "node-active" : "border-border"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <span className="text-xs md:text-sm text-foreground truncate">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* Agents */}
        <div className="space-y-2 relative">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 text-center">Agents</div>
          {agents.map((a, i) => (
            <div
              key={a}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-md border bg-background transition-all ${
                step === 1 ? "node-active" : "border-border"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs md:text-sm font-mono text-foreground">{a}</span>
            </div>
          ))}
        </div>

        {/* Outputs */}
        <div className="space-y-2">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 text-right">Outputs</div>
          {outputs.map((o, i) => {
            const Icon = o.icon;
            const isActive = step === 2;
            return (
              <div
                key={o.label}
                className={`flex items-center gap-2 px-3 py-2 rounded-md border bg-background transition-all ${
                  isActive ? "node-active" : "border-border"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <span className="text-xs md:text-sm text-foreground truncate">{o.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" aria-hidden>
        <line x1="33%" y1="50%" x2="42%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="1.5" className="flow-line" opacity="0.6" />
        <line x1="58%" y1="50%" x2="67%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="1.5" className="flow-line" opacity="0.6" />
      </svg>

      {/* Stack badge */}
      <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="text-muted-foreground/60 mr-1">Built with</span>
        {["Claude", "MCP", "Scheduled agents", "LangChain", "n8n", "Gong", "HubSpot"].map((t) => (
          <span key={t} className="px-2 py-0.5 rounded border border-border font-mono text-[11px] text-foreground/80">{t}</span>
        ))}
      </div>
    </div>
  );
};

const IntelligenceStack = () => {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section id="system" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div ref={reveal} className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <LineChart className="w-3.5 h-3.5 text-accent" />
            <span>The intelligence stack</span>
          </div>
          <h2 className="font-display font-semibold tracking-tight text-foreground leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Most PMMs use AI to write faster.<br />
            <span className="text-muted-foreground">I use it to build systems that run without me.</span>
          </h2>
        </div>

        <div className="mt-12">
          <Diagram />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((s) => (
            <div key={s.name} className="stack-card border border-border rounded-lg p-6 bg-surface">
              <div className="flex items-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <h3 className="font-display font-semibold text-lg text-foreground leading-snug">{s.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.what}</p>
              <p className="text-sm text-foreground/90 leading-relaxed border-t border-border pt-3">
                <span className="text-muted-foreground/70">Outcome , </span>
                {s.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceStack;
