import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Users, Target } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "GreyOrange: From 'cool tech' to 'business critical'",
    subtitle: "Peak season GTM repositioning",
    icon: TrendingUp,
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20",
      badge: "border-neon-cyan text-neon-cyan",
      button: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background",
      dot: "bg-neon-cyan"
    },
    description: "Reframed GreyMatter, an AI driven warehouse platform, from 'innovation' to 'peak season risk mitigation' for large retailers. Used discovery and win/loss analysis to focus on customers with system failures, labor shortages, and high seasonality. Built a Peak Season Readiness campaign that aligned Product, Sales, and Marketing and helped drive a lift in qualified pipeline and shorter sales cycles for high risk accounts."
  },
  {
    id: 2,
    title: "GreyOrange: Vertical ABM for 3PL, fashion, and manufacturing",
    subtitle: "Segmented email and content strategy",
    icon: Target,
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20",
      badge: "border-neon-magenta text-neon-magenta",
      button: "border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background",
      dot: "bg-neon-magenta"
    },
    description: "Designed separate GTM tracks for 3PL, fashion, and general manufacturing. Built email sequences and content that spoke to each industry's specific pain points, and curated relevant case studies and resources for each segment. This vertical approach improved open and click through rates and increased demo requests from priority accounts."
  },
  {
    id: 3,
    title: "Times Internet: ET Prime Women Leadership Awards",
    subtitle: "Brand IP and executive engagement",
    icon: Award,
    colorClasses: {
      text: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20",
      badge: "border-neon-purple text-neon-purple",
      button: "border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background",
      dot: "bg-neon-purple"
    },
    description: "Led the launch of the ET Prime Women Leadership Awards, a brand IP designed to engage senior women CMOs. Partnered with editorial, marketing, and sales teams, and helped secure Accenture as a sponsor. The program used Economic Times digital reach to drive awareness and participation.",
    links: [
      { label: "Watch event", url: "https://economictimes.indiatimes.com/spotlight/etpwla2024_watchlive.cms" },
      { label: "Read article", url: "https://economictimes.indiatimes.com/news/company/corporate-trends/etpwla-2023-meet-the-trailblazing-winners-of-etprime-women-leadership-awards/articleshow/102541801.cms" }
    ]
  },
  {
    id: 4,
    title: "Graphy: International expansion GTM",
    subtitle: "Three market launch in six months",
    icon: Users,
    colorClasses: {
      text: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20",
      badge: "border-neon-blue text-neon-blue",
      button: "border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background",
      dot: "bg-neon-blue"
    },
    description: "Built a go to market playbook for the US, UK, and Middle East. Defined positioning, launch sequencing, and customer programs, including a creator community and accelerator that supported customer growth and strong retention."
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected projects across warehouse automation, B2B SaaS, and media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            return (
              <Card key={study.id} className="card-neon group hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
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
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {study.description}
                </p>

                {study.links && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.links.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={study.colorClasses.button}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
