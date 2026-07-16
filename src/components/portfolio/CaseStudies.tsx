import { useReveal } from "@/hooks/useReveal";

const cases = [
  {
    title: "We weren't losing on product. We were losing on value.",
    client: "GreyOrange · Warehouse robotics",
    problem: "Premium-priced product, long sales cycles, deals slipping to no-decision.",
    found: "Ran closed-lost analysis across 100+ win/loss interviews. Everyone loved the demo. Nobody had the numbers to justify the premium to a CFO.",
    did: "Rebuilt the assets around ROI, not features. Built a payback calculator reps could take into a CFO conversation. Standardised the demo so every rep told the same story.",
    result: [
      { k: "+20%", v: "Win rate" },
      { k: "−30%", v: "Sales cycle" },
      { k: "100+", v: "Win/loss interviews" },
    ],
  },
  {
    title: "Launching robots on a deadline.",
    client: "GreyOrange · Two autonomous forklift launches",
    problem: "Two hardware launches, one shared narrative to hold, forty reps to enable, no room to slip.",
    found: "Sales, Product and RevOps were reading three different briefs. Positioning was drifting inside the company before it hit any customer.",
    did: "Wrote the shared narrative before any asset. Ruthlessly prioritised launch week , everything nice-to-have got pushed. Built a post-launch feedback loop with Sales and RevOps so field signal turned into decisions, not decks.",
    result: [
      { k: "+45%", v: "Pipeline" },
      { k: "$20M+", v: "Influenced pipeline" },
      { k: "40+", v: "Reps enabled" },
    ],
  },
  {
    title: "Listening at a scale humans can't.",
    client: "Repositioning · AI-driven call analysis",
    problem: "Messaging didn't match what buyers actually said. Reps knew it. Marketing didn't have proof.",
    found: "Fed sales calls into an analysis agent to surface the exact language buyers used to describe the problem, and to describe the alternative to buying.",
    did: "Rewrote the angle around the buyers' own words. Tested it in the sales pitch first. Once it proved out in live calls, rolled it to the website and paid campaigns.",
    note: "Tested in live sales calls before it touched the website. The numbers travel by email.",
  },
];

type CaseItem = {
  title: string;
  client: string;
  problem: string;
  found: string;
  did: string;
  result?: { k: string; v: string }[];
  note?: string;
};

const Case = ({ c, i }: { c: CaseItem; i: number }) => {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <div ref={reveal} className="border-t border-border py-14 first:border-t-0 first:pt-0">
      <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16">
        <div className="lg:w-24 shrink-0">
          <div className="font-mono text-xs text-muted-foreground">CASE {String(i + 1).padStart(2, "0")}</div>
          <div className="mt-2 text-xs text-accent">{c.client}</div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight max-w-3xl">
            "{c.title}"
          </h3>

          <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Problem</div>
              <p className="text-sm text-foreground/90 leading-relaxed">{c.problem}</p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">What I found</div>
              <p className="text-sm text-foreground/90 leading-relaxed">{c.found}</p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">What I did</div>
              <p className="text-sm text-foreground/90 leading-relaxed">{c.did}</p>
            </div>
          </div>

          {c.result && (
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {c.result.map((r) => (
                <div key={r.k}>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-accent tabular-nums tracking-tight">{r.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.v}</div>
                </div>
              ))}
            </div>
          )}
          {c.note && (
            <p className="mt-8 italic text-muted-foreground max-w-2xl leading-relaxed">
              {c.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const header = useReveal<HTMLDivElement>();
  return (
    <section id="case-studies" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div ref={header}>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Case studies</div>
          <h2 className="font-display font-semibold tracking-tight text-foreground leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Three problems, three answers.
          </h2>
        </div>

        <div className="mt-16">
          {cases.map((c, i) => (
            <Case key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
