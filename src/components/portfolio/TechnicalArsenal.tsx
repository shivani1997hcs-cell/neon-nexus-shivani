import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, BarChart3, TrendingUp, Users, Handshake } from "lucide-react";

const skills = [
  {
    title: "AI & Automation",
    icon: Brain,
    tools: "Google AI Studio, Lovable, Gamma, Manus, Genspark, Warehouse Robotics Software",
    proficiency: 90,
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20"
    }
  },
  {
    title: "Product & Strategy", 
    icon: Target,
    tools: "0-to-1 Development, Roadmapping, Competitive Analysis, GTM Strategy, A/B Testing",
    proficiency: 95,
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20"
    }
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    tools: "SQL, Tableau, Google Analytics, Salesforce, Microsoft Suite",
    proficiency: 85,
    colorClasses: {
      text: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20"
    }
  },
  {
    title: "Growth & Demand Generation",
    icon: TrendingUp,
    tools: "Digital Marketing, Content Strategy, Pipeline Generation",
    proficiency: 90,
    colorClasses: {
      text: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20"
    }
  },
  {
    title: "Leadership & Strategy",
    icon: Users,
    tools: "Team mentorship, Stakeholder management, Cross-functional collaboration",
    proficiency: 92,
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20"
    }
  },
  {
    title: "Business Development & Partnerships",
    icon: Handshake,
    tools: "Enterprise Sales, Partnership Strategy, Sponsorships",
    proficiency: 88,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, strategy, analytics, and leadership 
            to drive transformational growth and innovation.
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