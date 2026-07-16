import { useReveal } from "@/hooks/useReveal";

const principles = [
  {
    n: "01",
    title: "Evidence over opinions.",
    body: "I'd rather pull the calls than win the argument. Meetings run shorter when someone's already listened to the tape.",
  },
  {
    n: "02",
    title: "Accurate and persuasive aren't the same thing.",
    body: "Marketing loses trust when the two drift apart. I write the persuasive version after the accurate version is on the page.",
  },
  {
    n: "03",
    title: "If I do a task twice, I build an agent for it.",
    body: "Manual work is a signal, not a plan. The second time round is a design brief.",
  },
  {
    n: "04",
    title: "Prioritisation is the most underrated launch skill.",
    body: "Every launch week has fifty things that could ship. The job is picking the four that must.",
  },
];

const HowIWork = () => {
  const header = useReveal<HTMLDivElement>();
  return (
    <section id="how-i-work" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div ref={header}>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">How I work</div>
          <h2 className="font-display font-semibold tracking-tight text-foreground leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            The rules I actually run by.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-10">
          {principles.map((p) => (
            <Principle key={p.n} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Principle = ({ p }: { p: (typeof principles)[number] }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="font-mono text-xs text-accent mb-2">{p.n}</div>
      <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-2 tracking-tight">{p.title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-lg">{p.body}</p>
    </div>
  );
};

export default HowIWork;
