import { useReveal } from "@/hooks/useReveal";

const roles = [
  { period: "Now", company: "Mention Me", role: "AI product & growth marketing", location: "London" },
  { period: "2025", company: "Freelance", role: "Product marketing consulting", location: "London" },
  { period: "2025", company: "HeyAlpha", role: "MBA internship — AI for guest experience", location: "London" },
  { period: "2022 — 2024", company: "GreyOrange", role: "PMM · Warehouse robotics", location: "US & India" },
  { period: "2021 — 2022", company: "Graphy", role: "Product marketing", location: "India" },
  { period: "2019 — 2021", company: "Times Internet", role: "Brand strategist", location: "India" },
];

const education = [
  { period: "2024 — 2025", school: "Imperial College London", degree: "MBA" },
  { period: "2015 — 2018", school: "University of Delhi", degree: "BSc Chemistry" },
];

const Background = () => {
  const header = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();

  return (
    <section id="background" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div ref={header}>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Background</div>
          <h2 className="font-display font-semibold tracking-tight text-foreground leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Six roles across three continents.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            Worked across India, US, UK and the Middle East. MBA at Imperial. Not looking for a CV dump? Below is the compact version.
          </p>
        </div>

        <div ref={body} className="mt-14 grid lg:grid-cols-[1.6fr_1fr] gap-12">
          {/* Roles */}
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">Roles</div>
            <ol className="border-l border-border">
              {roles.map((r) => (
                <li key={r.company} className="relative pl-6 pb-6 last:pb-0">
                  <span className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-display font-semibold text-foreground">{r.company}</span>
                    <span className="text-xs text-muted-foreground font-mono">{r.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {r.role} <span className="text-border-strong mx-1.5">·</span> {r.location}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Education */}
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">Education</div>
            <ol className="border-l border-border">
              {education.map((e) => (
                <li key={e.school} className="relative pl-6 pb-6 last:pb-0">
                  <span className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-foreground" />
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-display font-semibold text-foreground">{e.school}</span>
                    <span className="text-xs text-muted-foreground font-mono">{e.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{e.degree}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
