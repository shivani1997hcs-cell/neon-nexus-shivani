const workExperience = [
  {
    period: "Jul-Sept 2025",
    company: "HeyAlpha",
    role: "Strategy Intern",
    description: "Supported 8 pilot rollouts across hotels, healthcare & retail. Built ROI frameworks & GTM strategy for UK & Middle East pilots.",
  },
  {
    period: "Aug 2022-Aug 2024",
    company: "GreyOrange",
    role: "Product & Marketing Manager",
    description: "Drove 68% ARR growth co-owning automation products from concept to deployment. Lifted pipeline 45% with AI-powered ROI calculators & competitive tools.",
  },
  {
    period: "Mar 2021-Jul 2022",
    company: "Graphy (Unacademy)",
    role: "Product Marketing Manager",
    description: "Scaled into 3 markets (+25% customers), generated 5K+ SQLs/month. Raised retention to 94% by building customer community & accelerator program.",
  },
  {
    period: "Feb 2019-Feb 2021",
    company: "Times Internet",
    role: "Associate Product Marketing Manager",
    description: "Launched 3 monetizable IPs (50%+ profitability). Secured £600K+ sponsorships from top brands including Johnson & Johnson.",
  },
];

const academicBackground = [
  {
    period: "2024-2025",
    institution: "Imperial College Business School",
    degree: "MBA, Strategy & Transformation",
    note: "Won Innovation Challenge. Shortlisted VCIC Regionals.",
  },
  {
    period: "2015-2018",
    institution: "Hindu College, University of Delhi",
    degree: "B.Sc. Chemistry",
    note: "",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Where I've Been</h2>
        <p className="text-muted-foreground text-lg mb-16">
          A look at the places and roles that have shaped my journey.
        </p>

        {/* Work Experience */}
        <h3 className="text-xl font-semibold text-foreground mb-8">Work Experience</h3>
        <div className="space-y-0 border-l border-border ml-4 mb-16">
          {workExperience.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-neon-cyan -translate-x-[5px]" />
              <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
              <h4 className="text-lg font-bold text-foreground">{exp.company}</h4>
              <p className="text-sm text-neon-cyan mb-2">{exp.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Academic */}
        <h3 className="text-xl font-semibold text-foreground mb-8">Academic Background</h3>
        <div className="space-y-0 border-l border-border ml-4">
          {academicBackground.map((edu, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-neon-magenta -translate-x-[5px]" />
              <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
              {edu.note && <p className="text-sm text-muted-foreground mt-1">{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
