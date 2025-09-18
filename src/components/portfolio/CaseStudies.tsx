import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Users } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "GreyOrange – Improving Sales Closure Rates",
    subtitle: "Win–Loss Analysis & Targeted Account Planning",
    icon: TrendingUp,
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20",
      badge: "border-neon-cyan text-neon-cyan",
      button: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background",
      dot: "bg-neon-cyan"
    },
    preview: "Structured analysis framework that improved sales closure rates through data-driven insights and competitive positioning.",
    challenge: "GreyOrange faced inconsistent sales closure rates across different market segments and struggled to understand why deals were being lost to competitors.",
    solution: "Implemented a comprehensive win-loss analysis framework including structured interviews with prospects, competitive analysis, and account planning methodologies. Created standardized templates and processes for the sales team.",
    results: [
      "Improved overall closure rate by 35% within 6 months",
      "Identified key competitive differentiators and pricing strategies",
      "Reduced sales cycle time by 20% through better qualification",
      "Created reusable competitive battle cards for 15+ competitors"
    ],
    impact: "The structured approach became the gold standard for GreyOrange's global sales organization, being rolled out across all regions."
  },
  {
    id: 2,
    title: "Times Internet – Mental Health IP Launch",
    subtitle: "Johnson & Johnson Partnership (£100K revenue, Innovation Award)",
    icon: Award,
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20",
      badge: "border-neon-magenta text-neon-magenta",
      button: "border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background",
      dot: "bg-neon-magenta"
    },
    preview: "Strategic partnership that launched a groundbreaking mental health initiative, generating significant revenue and industry recognition.",
    challenge: "Need to create a new revenue stream while addressing the growing mental health awareness trend in India's digital landscape.",
    solution: "Developed a comprehensive mental health content IP, pitched directly to Johnson & Johnson leadership, and created a multi-platform campaign including webinars, expert interviews, and interactive content.",
    results: [
      "Generated £100K+ revenue in first quarter",
      "Won internal Innovation Award for creative partnership",
      "Achieved 50%+ profitability margins",
      "Increased audience engagement by 20%"
    ],
    impact: "Set the blueprint for brand partnership strategies across Times Internet's portfolio, leading to similar successful collaborations."
  },
  {
    id: 3,
    title: "Graphy – Creator Community Boost",
    subtitle: "35% Activation Increase in 45 Days",
    icon: Users,
    colorClasses: {
      text: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20",
      badge: "border-neon-purple text-neon-purple",
      button: "border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background",
      dot: "bg-neon-purple"
    },
    preview: "Community-driven growth strategy that significantly improved creator activation and platform engagement through targeted interventions.",
    challenge: "Low creator activation rates and poor retention were limiting Graphy's growth potential in the competitive online education market.",
    solution: "Built a comprehensive creator community program including mentorship matching, accelerator programs, success showcases, and peer-to-peer learning initiatives.",
    results: [
      "Boosted creator activations by 35% in just 45 days",
      "Raised creator retention rate to 94%",
      "Generated 5K+ SQLs per month",
      "Increased GMV by 40% through improved creator success"
    ],
    impact: "The community model became Graphy's primary growth driver and was adopted as the standard approach for creator platforms within Unacademy."
  }
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep dives into strategic initiatives that drove measurable impact 
            across different industries and business models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            return (
              <Dialog key={study.id}>
                <DialogTrigger asChild>
                  <Card className="card-neon cursor-pointer group hover:scale-105 transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${study.colorClasses.bg} border ${study.colorClasses.border} mr-4`}>
                        <IconComponent className={`w-6 h-6 ${study.colorClasses.text}`} />
                      </div>
                      <Badge variant="outline" className={study.colorClasses.badge}>
                        Case Study {study.id}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <h4 className={`text-sm font-semibold ${study.colorClasses.text} mb-4`}>
                      {study.subtitle}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {study.preview}
                    </p>

                    <Button 
                      variant="outline" 
                      className={`w-full ${study.colorClasses.button}`}
                    >
                      Read Full Case Study
                    </Button>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {study.title}
                    </DialogTitle>
                    <p className={study.colorClasses.text}>
                      {study.subtitle}
                    </p>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-neon-cyan">Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-neon-magenta">Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-neon-purple">Results & Impact</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-start">
                            <div className={`w-2 h-2 ${study.colorClasses.dot} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                            <span className="text-muted-foreground text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                        <p className="text-sm font-medium text-foreground">
                          <strong>Long-term Impact:</strong> {study.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;