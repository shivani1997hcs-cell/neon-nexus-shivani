import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skills = [
  "Product positioning and messaging",
  "Go to market strategy and planning",
  "Sales enablement content and playbooks",
  "Customer and win/loss research",
  "ABM and vertical campaigns",
  "Cross functional stakeholder alignment (Product, Sales, CS, RevOps)"
];

const TechnicalArsenal = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gradient-secondary">
            Skills
          </h2>
        </div>

        <Card className="card-neon">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-lg">{skill}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalArsenal;
