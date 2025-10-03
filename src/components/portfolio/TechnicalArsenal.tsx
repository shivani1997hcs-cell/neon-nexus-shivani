import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, BarChart3, TrendingUp, Users, Handshake } from "lucide-react";

const skills = [
  {
    title: "Product & Strategy",
    icon: Target,
    tools: "Positioning & Messaging, Go-to-Market Strategy, Competitive Analysis, Product Launches, Market Research",
    proficiency: 95,
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20"
    }
  },
  {
    title: "Growth & Content", 
    icon: TrendingUp,
    tools: "Content Strategy, Sales Enablement, Customer Insights, Conversion Optimization, Campaign Planning",
    proficiency: 92,
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20"
    }
  },
  {
    title: "Leadership & Execution",
    icon: Users,
    tools: "Stakeholder Management, Cross-Functional Leadership, GTM Execution, External Relations, Negotiation",
    proficiency: 90,
    colorClasses: {
      text: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20"
    }
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    tools: "A/B Testing, Performance Metrics, Market Sizing, Customer Analytics, ROI Tracking",
    proficiency: 88,
    colorClasses: {
      text: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20"
    }
  },
  {
    title: "Business Development & Partnerships",
    icon: Handshake,
    tools: "Partnership Strategy, Due Diligence, Deal Negotiation, Relationship Building, Revenue Growth",
    proficiency: 90,
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20"
    }
  },
  {
    title: "Technical Fluency",
    icon: Brain,
    tools: "AI/ML Platforms, No-Code Tools, Conversational AI, Product Documentation, Technical Translation",
    proficiency: 85,
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20"
    }
  }
];

const TechnicalArsenal = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gradient-secondary">
            My Superpowers
          </h2>
          <p className="text-muted-foreground text-xl max-w-4xl mx-auto">
            The stuff I'm actually good at (with proof)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="card-neon group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${skill.colorClasses.bg} border ${skill.colorClasses.border} mr-4`}>
                    <IconComponent className={`w-6 h-6 ${skill.colorClasses.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {skill.tools}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className={`text-sm font-bold ${skill.colorClasses.text}`}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.proficiency} 
                      className="h-2 progress-glow"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;