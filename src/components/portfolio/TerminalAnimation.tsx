import { useEffect, useState } from "react";

const lines = [
  { text: "monitoring competitor landing pages", status: "running" },
  { text: "analysing 40 sales calls for buyer language", status: "running" },
  { text: "drafting case study #9", status: "running" },
  { text: "delivered to Slack", status: "done" },
  { text: "listening for pricing objections on live calls", status: "running" },
  { text: "auto-generating monthly customer value report", status: "running" },
];

interface Rendered {
  text: string;
  status: string;
  displayed: string;
  time: string;
}

const now = () => {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
};

const TerminalAnimation = () => {
  const [history, setHistory] = useState<Rendered[]>([]);
  const [current, setCurrent] = useState<Rendered | null>(null);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const line = lines[lineIdx % lines.length];
    const full = line.text;
    let char = 0;
    let cancelled = false;

    setCurrent({ text: full, status: line.status, displayed: "", time: now() });

    const step = () => {
      if (cancelled) return;
      if (char <= full.length) {
        setCurrent((c) => (c ? { ...c, displayed: full.slice(0, char) } : c));
        char++;
        setTimeout(step, prefersReduced ? 0 : 28);
      } else {
        // pause with cursor
        setTimeout(() => {
          if (cancelled) return;
          setHistory((h) => {
            const next = [...h, { text: full, status: line.status, displayed: full, time: now() }];
            return next.slice(-3);
          });
          setCurrent(null);
          setTimeout(() => {
            if (!cancelled) setLineIdx((i) => i + 1);
          }, 300);
        }, prefersReduced ? 300 : 700);
      }
    };
    step();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIdx]);

  return (
    <div className="font-mono text-[13px] md:text-sm bg-surface border border-border rounded-lg overflow-hidden shadow-2xl shadow-black/40">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-elevated">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
        </div>
        <div className="flex-1 text-center text-[11px] text-muted-foreground tracking-wide">
          agents.shivani.local
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 space-y-1.5 min-h-[180px]">
        {history.map((h, i) => (
          <div key={i} className="flex items-start gap-3 opacity-70">
            <span className="text-muted-foreground/60 shrink-0">{h.time}</span>
            <span className="text-accent shrink-0">✓</span>
            <span className="text-foreground/70">{h.text}</span>
          </div>
        ))}
        {current && (
          <div className="flex items-start gap-3">
            <span className="text-muted-foreground/60 shrink-0">{current.time}</span>
            <span className="text-accent shrink-0">▶</span>
            <span className="text-foreground">
              {current.displayed}
              <span className="terminal-cursor" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalAnimation;
