const skillColumns = [
  {
    title: "PMM Core",
    items: [
      "Positioning & Messaging",
      "GTM Strategy",
      "Product Launches",
      "ICP Definition",
      "Win-Loss Analysis",
      "Competitive Intelligence",
      "Sales Enablement",
      "JTBD Frameworks",
    ],
  },
  {
    title: "Demand & Campaigns",
    items: [
      "ABM",
      "Integrated Campaigns",
      "Content Strategy",
      "Customer Voice Programs",
      "Webinars & Events",
      "Email Sequences",
      "Landing Pages",
    ],
  },
  {
    title: "Tools",
    items: [
      "HubSpot",
      "Salesforce",
      "Klue",
      "Claude",
      "ChatGPT",
      "n8n",
      "LangChain",
      "Tableau",
      "Google Analytics",
      "SQL",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">My Skillset</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">
          The tools, frameworks and instincts I bring.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border">
                {col.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-muted/50 text-muted-foreground rounded-lg border border-border hover:border-neon-cyan/30 hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div className="mt-16 overflow-hidden border-t border-b border-border py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              "Strategic", "Data-Driven", "Customer-Obsessed", "Cross-Functional", "Revenue-Focused",
              "Analytical", "Narrative-First", "Insight-Led", "Collaborative", "Resourceful",
              "Strategic", "Data-Driven", "Customer-Obsessed", "Cross-Functional", "Revenue-Focused",
              "Analytical", "Narrative-First", "Insight-Led", "Collaborative", "Resourceful",
            ].map((word, i) => (
              <span key={i} className="mx-6 text-sm text-muted-foreground/50 uppercase tracking-widest">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
