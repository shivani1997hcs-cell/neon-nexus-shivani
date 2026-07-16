import { useReveal } from "@/hooks/useReveal";

const Writing = () => {
  const header = useReveal<HTMLDivElement>();
  const card = useReveal<HTMLDivElement>();

  return (
    <section id="writing" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div ref={header}>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Writing</div>
          <h2 className="font-display font-semibold tracking-tight text-foreground leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Writing
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            Occasional essays on product marketing.
          </p>
        </div>

        <div ref={card} className="mt-12 max-w-3xl">
          <article className="border border-border rounded-lg p-6 bg-surface">
            <div className="flex items-start justify-between gap-6">
              <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground tracking-tight leading-snug">
                We weren't losing on product. We were losing on value.
              </h3>
              <span className="shrink-0 text-[11px] uppercase tracking-widest text-accent border border-accent/40 rounded-full px-2.5 py-1">
                Coming this week
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              What 100+ closed-lost interviews taught me about premium pricing.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Writing;
