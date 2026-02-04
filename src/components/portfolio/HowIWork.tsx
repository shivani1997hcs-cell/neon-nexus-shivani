import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const workApproach = [
  "Start from customer conversations and win/loss insight.",
  "Align positioning, ICP, and messaging before building assets.",
  "Work closely with Sales and CS to refine GTM based on real deal feedback."
];

const HowIWork = () => {
  return (
    <section id="how-i-work" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            How I Work
          </h2>
        </div>

        <Card className="card-neon">
          <ul className="space-y-4">
            {workApproach.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-magenta mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default HowIWork;
