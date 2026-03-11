import { GraduationCap, Award, BookOpen, Beaker } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "MBA, Strategy & Transformation",
    org: "Imperial College Business School",
    year: "2025",
    note: "Won Innovation Challenge. Shortlisted VCIC Regionals.",
  },
  {
    icon: Award,
    title: "Product Management Bootcamp",
    org: "Exactimo",
    year: "Certified",
    note: "",
  },
  {
    icon: BookOpen,
    title: "Becoming a Product Manager",
    org: "LinkedIn Learning",
    year: "Certified",
    note: "",
  },
  {
    icon: Beaker,
    title: "BSc Chemistry",
    org: "Hindu College, University of Delhi",
    year: "2018",
    note: "",
  },
];

const CredentialsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">Credentials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">Certified & Verified</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="card-neon flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 shrink-0">
                  <Icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{cred.title}</h3>
                  <p className="text-sm text-muted-foreground">{cred.org}</p>
                  <p className="text-xs text-neon-cyan mt-1">{cred.year}</p>
                  {cred.note && (
                    <p className="text-xs text-muted-foreground mt-2">{cred.note}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
