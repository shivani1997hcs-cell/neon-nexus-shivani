import { useCountUp } from "@/hooks/useCountUp";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  {
    end: 45,
    prefix: "+",
    suffix: "%",
    label: "Pipeline",
    detail: "Robotics product launches at GreyOrange.",
  },
  {
    end: 20,
    prefix: "+",
    suffix: "%",
    label: "Win rate",
    detail: "Repositioning after 100+ win/loss interviews.",
  },
  {
    end: 70,
    prefix: "",
    suffix: "%",
    label: "Adoption in 3 weeks",
    detail: "AI agent product launch.",
  },
  {
    end: 9,
    prefix: "",
    suffix: "",
    label: "Case studies in a week",
    detail: "Approved via a workflow I built.",
  },
];

const StatCard = ({ end, prefix, suffix, label, detail }: (typeof stats)[number]) => {
  const { ref, display } = useCountUp({ end, prefix, suffix });
  return (
    <div className="stack-card group border border-border rounded-lg p-6 bg-surface">
      <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-accent tabular-nums"><span ref={ref} className="contents">
        <span>{display}</span>
      </div>
      <div className="mt-3 text-sm font-medium text-foreground">{label}</div>
      <div className="mt-1 text-sm text-muted-foreground">{detail}</div>
    </div>
  );
};

const HighlightsBar = () => {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section className="px-6 py-20">
      <div ref={reveal} className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsBar;
